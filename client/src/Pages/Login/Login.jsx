import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';

const Login = () => {
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate()
  const location = useLocation()
  

  const handelLogin = async(e)=>{
    e.preventDefault()
    const form = e.target 
    
    const email = form.email.value 
    const password = form.password.value 

   

    try{
      await login(email,password)
      toast.success("Login Successful")
      navigate(`${location?.state?.from ? location.state.from.pathname : "/"}`)

    }catch(err){
      
      toast.error(err.message)
    }
  }

  const handelLoginWithGoogle = async() =>{
    try {
      await loginWithGoogle()
      toast.success("Login Successful");
       navigate(
         `${location?.state?.from ? location.state.from.pathname : "/"}`
       );
    } catch (err) {
     
      toast.error(err.message);
    }
    
    
  }



    return (
      <div className="flex justify-center items-center  ">
        <div className="space-y-10 bg-[#F3F4F6] p-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <span className="text-slate-400">
              Sign in to access your account
            </span>
          </div>

          <form onSubmit={handelLogin} className="space-y-5">
            <div className="space-y-3">
              <label htmlFor="email">Email Address</label> <br />
              <input
                className="px-3 py-2 w-full border-2 border-slate-300 bg-[#E5E7EB]"
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                id=""
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="password">Password</label> <br />
              <input
                className="px-3 py-2 w-full border-2 border-slate-300 bg-[#E5E7EB]"
                type="password"
                name="password"
                placeholder="*********"
                id=""
              />
            </div>

            <div>
              <input
                className="btn w-full bg-[#F09167] hover:bg-[#F09167] hover:opacity-80"
                type="submit"
                value="Sign In"
              />
            </div>
          </form>

          <div className="space-y-3">
            <p className="text-slate-400">Login With Social Accounts</p>

            <div className="">
              <button onClick={handelLoginWithGoogle} className="btn border border-slate-300 w-full flex justify-center items-center">
                {" "}
                <FcGoogle className="text-2xl"></FcGoogle>Continue With Google
              </button>
            </div>
            <small>
              <span className="text-slate-400">Don't have an account yet?</span>{" "}
              <Link className="underline hover:text-[#F09167]" to={"/signup"}>
                Sign Up
              </Link>
            </small>
          </div>
        </div>
      </div>
    );
};

export default Login;