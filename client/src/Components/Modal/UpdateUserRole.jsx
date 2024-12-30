import React from 'react';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import useAuth from '../../Hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';


const UpdateUserRole = ({ setOpen, user,open, handelOpen,refetch }) => {
  const axiosSecure = useAxiosSecure()
  console.log(user)

  const { mutateAsync } = useMutation({
    mutationFn: async (updatedUser) => {
      const { data } = await axiosSecure.patch(
        "/user-role-update",
        updatedUser
      );
      return data;
    },
    onSuccess: () => {
      toast.success("The user role successfully updated");
      refetch()
      setOpen(false)
    },
  });

  const handelUpdate = async(e) =>{
    e.preventDefault()
    const form = e.target
    const newRole = form.role.value

    const updatedUser = {
      email:user?.email,
      role: newRole,
      status: "verified"
    }
    await mutateAsync(updatedUser)
  }
  
  return (
    <Dialog
      open={open}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={handelOpen}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl shadow-2xl bg-slate-300 p-5 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle as="h3" className="text-base/7 font-medium ">
              <form className="space-y-3" onSubmit={handelUpdate}>
                <div className="w-full">
                  <select
                    className="w-full px-3 py-2 outline-none"
                    name="role"
                    id=""
                    defaultValue={user?.role}
                  >
                    <option value="guest">Guest</option>
                    <option value="host">Host</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                <div className="">
                  <input
                    className="btn btn-sm outline-none bg-[#F09167]"
                    type="submit"
                    value="Update"
                  />
                </div>
              </form>
              <button className="btn btn-sm bg-[#F09167]" onClick={handelOpen}>
                Cancel
              </button>
              
            </DialogTitle>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default UpdateUserRole;