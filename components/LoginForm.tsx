import { signInAnonymously } from "firebase/auth";
import { useState, useEffect, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext } from "../stores/AuthContext";

interface Inputs {
  email: string;
  password: string;
}

function LoginForm() {
  const { user, signIn, signUp, logOut, error, loading } =useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    signIn(email, password);
    if(error) {
      alert(error);
      return;
    }
  };

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  return (
    <form
      className="relative space-y-8 rounded bg-black/75 py-10 px-10 md:mt-0 md:px-16 h-[500px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-4xl font-semibold">Sign In</h1>
      <div className="space-y-4">
        <label className="inline-block w-full">
          <input
            type="email"
            placeholder="Email or phone number"
            className={`input`}
            {...register("email", { required: true })}
            onChange={(e) => setEnteredEmail(e.target.value)}
          />
          {enteredEmail?.length <= 4 && (
            <p className="p-1 text-[13px] font-light  text-orange-500">
              Please enter a valid email or phone number
            </p>
          )}
        </label>
        <label className="inline-block w-full">
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            className={`input`}
            onChange={(e) => setEnteredPassword(e.target.value)}
          />
          {enteredPassword?.length <= 4 && (
            <p className="p-1 text-[13px] font-light  text-orange-500">
              Your password must contain between 4 and 60 characters.
            </p>
          )}
        </label>
      </div>
      <button
        className="w-full rounded bg-[#E50914] py-3 font-semibold"
        // onClick={() => setLogin(true)}
        type="submit"
      >
        Sign In
      </button>
      <div className="text-[gray]">
        New to Netflix?{" "}
        <button
          className="cursor-pointer text-white hover:underline"
          // onClick={() => setLogin(false)}
          type="submit"
        >
          Sign up now
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
