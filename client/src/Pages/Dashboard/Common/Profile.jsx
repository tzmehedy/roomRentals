import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useUserRole from '../../../Hooks/useUserRole';

const Profile = () => {
    const {user} = useAuth()
    const [role] = useUserRole()
    console.log(user)
    return (
      <div className="flex justify-center items-center h-screen ">
        <div className="shadow-2xl">
          <div className="">
            <div className="w-full h-20 bg-[#F09167] rounded-t-xl p-20"></div>
            <div className="flex justify-center -mt-10 ">
              <img
                className="h-20 w-20 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </div>

            <div className="flex flex-col justify-center items-center mt-2 p-2">
              <h1 className="uppercase bg-[#F09167] px-2 py-1 rounded-lg">
                {role}
              </h1>
              <p>{user?.uid}</p>
            </div>
            <div className="flex  justify-between mt-2 gap-5 p-2">
              <p>
                <span className="font-bold">Name:</span> <br />
                {user?.displayName}
              </p>
              <p>
                <span className="font-bold">Email:</span> <br />
                {user?.email}
              </p>
            </div>

            <div className="mt-2 flex flex-col space-y-2 p-2">
              <button className="btn btn-sm w-1/3 bg-[#F09167]">
                Change Password
              </button>
              <button className="btn btn-sm w-1/3 bg-[#F09167]">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;