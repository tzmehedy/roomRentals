import axios from 'axios';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';


const SignUp = () => {
  const { createUser, profileUpdate, loading, user, loginWithGoogle } =
    useAuth();
  const navigate = useNavigate()
  const handelRegister = async(e) =>{
    e.preventDefault()
    const form = e.target 
    const name = form.name.value 
    const email = form.email.value 
    const password = form.password.value 
    const image = form.image.files[0] 

    const formData = new FormData()
    formData.append("image", image)

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_imgbb_API_key
    }`

    const {data} = await axios.post(url,formData)
    

    try{
      await createUser(email,password)
      await profileUpdate(name, data.data.display_url)
      toast.success("Sign Up successful")
      navigate("/")
    }catch(err){
      toast.error(err.message)
    }
  }

  const handelSignUpWithGoogle = async() =>{
    try{
      await loginWithGoogle()
      toast.success("Sign Up successful")
       navigate("/")

    }catch(err){
      toast.error(err.message)

    }
  }


    return (
      <div className="flex justify-center items-center  ">
        <div className="space-y-10 bg-[#F3F4F6] p-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <span className="text-slate-400">
              Welcome To Home Rental
            </span>
          </div>

          <form onSubmit={handelRegister} className="space-y-5">
            <div className="space-y-3">
              <label htmlFor="name">Name</label> <br />
              <input
                className="px-3 py-2 w-full border-2 border-slate-300 bg-[#E5E7EB]"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                id=""
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="image">Select Image</label> <br />
              <input
                className=" w-full "
                type="file"
                name="image"
                id=""
              />
            </div>
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
                value="Sign Up"
              />
            </div>
          </form>

          <div className="space-y-3">
            <p className="text-slate-400">Sign Up With Social Accounts</p>

            <div className="">
              <button onClick={handelSignUpWithGoogle} className="btn border border-slate-300 w-full flex justify-center items-center">
                {" "}
                <FcGoogle className="text-2xl"></FcGoogle>Continue With Google
              </button>
            </div>
            <small className=''>
              <span className="text-slate-400">Already have an account?</span>{" "}
              <Link className="underline hover:text-[#F09167]" to={"/login"}>
                Login
              </Link>
            </small>
          </div>
        </div>
      </div>
    );
};

export default SignUp;