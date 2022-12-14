import { AuthContext } from "../stores/AuthContext";

import { useState, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  email: string;
  password: string;
}

function LoginForm() {
  const [login, setLogin] = useState(true)

  const {signIn, signUp, error } = useContext(AuthContext);

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
      if (error) {
        return
      }
    } else {
      await signUp(email, password);
      if (error) {
        alert(error);
        return
      }
    }
  };
  // To check password's strength
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  return (
    <form
      className="relative space-y-8 rounded bg-black/75 py-10 px-10 md:mt-0 md:px-16 h-[500px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-4xl font-semibold">{login ? "Sign In" : "Sign Up"}</h1>
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
      <button className="w-full rounded bg-[#E50914] py-3 font-semibold" type="submit">
        {login ? "Sign In" : "Sign Up"}
      </button>
      <div className="text-[gray]">
        {login ? "New to Netflix?" : "Already have an account?"}{" "}
        <button className="cursor-pointer text-white hover:underline" type="submit" onClick={() => setLogin(prevState => !prevState)}>
          {login ? "Sign up now" : "Sign in now"}
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
