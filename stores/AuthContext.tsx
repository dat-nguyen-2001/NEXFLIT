import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

import { useRouter } from "next/router";

import React, {
  createContext,
  useMemo,
  useState,
} from "react";

import { auth } from "../firebase";

interface Props {
  children: React.ReactNode;
}

interface ContextProps {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  error: string | null;
  loading: boolean;
}

export const AuthContext = createContext<ContextProps>({
  user: null,
  signIn: async () => {},
  signUp: async () => {},
  logOut: async () => {},
  error: null,
  loading: false,
});

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);

  const [user, setUser] = useState<User | null>(null);



  const signIn = async (email: string, password: string) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.replace("/browse");
      })
      .then(() => setLoading(false))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.replace("/browse");
      })
      .then(() => setLoading(false))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const logOut = async () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
        setLoading(false);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const context = useMemo(
    () => ({ user, signIn, signUp, logOut, error, loading }),
    [user, error, loading]
  );
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
