import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
interface Inputs {
  email: string;
  password: string;
}

function LoginForm() {
  return (
    <form
      className="relative space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:px-14 h-[500px]"
      // onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-4xl font-semibold">Sign In</h1>
      <div className="space-y-4">
        <label className="inline-block w-full">
          <input
            type="email"
            placeholder="Email"
            className={`input`}
            // {...register("email", { required: true })}
          />
          {/* {errors.email && (
            <p className="p-1 text-[13px] font-light  text-orange-500">
              Please enter a valid email.
            </p>
          )} */}
        </label>
        <label className="inline-block w-full">
          <input
            type="password"
            // {...register("password", { required: true })}
            placeholder="Password"
            className={`input`}
          />
          {/* {errors.password && (
            <p className="p-1 text-[13px] font-light  text-orange-500">
              Your password must contain between 4 and 60 characters.
            </p>
          )} */}
        </label>
      </div>
      <button
        className="w-full rounded bg-[#E50914] py-3 font-semibold"
        //   onClick={() => setLogin(true)}
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
