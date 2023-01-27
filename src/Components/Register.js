import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {useCreateUserWithEmailAndPassword,useUpdateProfile} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { toast } from "react-toastify";

const Register = () => {

    const { register,formState: { errors },handleSubmit,reset} = useForm();
    const navigate=useNavigate();
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);
  
    const onSubmit = async(data) => {
      console.log(data)
      await createUserWithEmailAndPassword(data.email, data.password,data.name)
      reset();
      fetch('https://provider-management-platform-server.onrender.com/users',{
        method:'POST',
        headers:{
            'content-type':'application/json',
        },
        body: JSON.stringify(data)

    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
      toast.success("Your account is created.please log in");

      navigate("/login");
    };
  
    return (
      <div className="bg-[#F5F5F5]">
          <div class="h-full md:h-screen bg-[#F5F5F5] text-black my-8 lg:my-0 container flex justify-center items-center">
        <div class="w-full  md:w-[50%] lg:w-[33%]">
          <div class="pb-6 px-6 md:px-10  bg-white rounded-xl mt-8 mb-4">
          <h1 className="text-center text-3xl font-semibold pt-4 pb-2 uppercase text-secondary">
                  Join <span className="text-primary">with</span> Us
                </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">UserName</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  class="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                <label class="label">
                  {errors.name?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
  
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
  
              <input
                className="btn w-full max-w-xs text-white mb-2 mt-5 bg-primary"
                type="submit"
                value="sign up"
              />
              <p>
                Already have an account?{" "}
                <Link className="text-primary" to="/login">
                  please login
                </Link>
              </p>
            </form>   
          </div>
        </div>
      </div>
      </div>
    );
  };
export default Register;