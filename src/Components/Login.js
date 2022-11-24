import React from "react";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword,useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../firebase.init";
import { toast } from "react-toastify";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const { register,formState: { errors },handleSubmit,reset} = useForm();
   // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user1, loading1, error1] =useSignInWithEmailAndPassword(auth);
    const navigate=useNavigate();

    let signInError;

    if (loading1) {
        return <Loading></Loading>;
    }

    if (error1) {
        signInError = (
          <p className="text-red-500">
            <small>{error1?.message}</small>
          </p>
        );
      }

    if(user1){
        navigate("/");
    }


    const onSubmit = async(data) => {/*console.log(data)*/
        await signInWithEmailAndPassword(data.email, data.password);
        
    };
  return (
      <div className="bg-accent">
        <div className="bg-base-100">
        <div className="h-full md:h-screen my-10 lg:my-0 container flex justify-center items-center">
          <div className="w-full  md:w-[50%] lg:w-[33%]">
          <div className="pb-8 px-4 md:px-10  bg-accent rounded-xl mt-10">
          <h1 className="text-center text-3xl font-semibold pt-8 pb-10 uppercase text-secondary">
                Welcome <span className="text-primary">Back</span>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "provide a valid email",
                  },
                })}
              />

                <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                </label>
              
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "must be 6 characters or longer",
                  },
                })}
              />
            <label class="label">
                {errors.password?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
            </label>
             
            </div>
            {signInError}
            <input
              className="btn w-full max-w-xs text-white mb-2 mt-5 bg-primary"
              type="submit"
              value="Login"
            />
          </form>
          </div>
          <div className="divider">OR</div>
          <button  class="btn btn-outline w-full">continue with Google</button>
          </div>
        </div>
      </div>
      </div>
 
  );
};

export default Login;
