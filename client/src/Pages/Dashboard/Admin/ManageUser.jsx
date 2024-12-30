import React from 'react';
import useUserRole from '../../../Hooks/useUserRole';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ManageUser = () => {
    const axiosSecure = useAxiosSecure()
    const [role] = useUserRole()

    const { data:users , isLoading } = useQuery({
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
                  <th>
                    {index+1}
                    
                  </th>
                  <td>
                    {
                        user?.email
                    }
                    
                  </td>
                  <td>
                    {
                        user?.role
                    }
                    
                  </td>
                  <td>{user?.status}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Update Role</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageUser;