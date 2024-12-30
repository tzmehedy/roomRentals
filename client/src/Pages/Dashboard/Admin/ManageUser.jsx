import React, { useState } from 'react';
import useUserRole from '../../../Hooks/useUserRole';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import UpdateUserRole from '../../../Components/Modal/UpdateUserRole';

const ManageUser = () => {
    const axiosSecure = useAxiosSecure()
    const [open, setOpen] = useState(false);
    const [currentUser,setCurrentUser] = useState()

    const handelOpen = (user)=>{
      setOpen(!open)
      setCurrentUser(user);
    }

    console.log(open)
    

    const { data:users , refetch,isLoading } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const { data } = await axiosSecure.get("/users");
        return data;
      },
    });

  
    return (
      <div>
        <div className="overflow-x-auto p-20">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{user?.email}</td>
                  <td>{user?.role}</td>
                  <td>{user?.status}</td>
                  <th>
                    <button
                      onClick={() => handelOpen(user)}
                      className="btn btn-sm bg-[#F09167] bg-opacity-30 px-2 py-1"
                    >
                      Update Role
                    </button>
                  </th>
                  <UpdateUserRole
                    setOpen={setOpen}
                    open={open}
                    user={currentUser}
                    handelOpen={handelOpen}
                    refetch={refetch}
                  ></UpdateUserRole>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageUser;