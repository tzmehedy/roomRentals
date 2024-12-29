import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyListings = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: rooms,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myListings"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/myListings/${user.email}`);
      return data;
    },
  });

  const handelUpdate = () => {};

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async(result) => {
      if (result.isConfirmed) {
        const {data} = await axiosSecure.delete(`/myListings/${id}`)
        if(data.deletedCount>0){
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch()
        }
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto p-20">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Location</th>
              <th>Price</th>
              <th>From</th>
              <th>To</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rooms?.map((room, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{room.title}</td>
                <td>{room.location}</td>
                <td>${room.price}</td>
                <th>{room.from}</th>
                <th>{room.to}</th>
                <td className="flex space-x-3 justify-center items-center">
                  <button
                    onClick={handelUpdate}
                    className="text-[#F09167] text-2xl"
                  >
                    <FaRegEdit></FaRegEdit>
                  </button>
                  <button
                    onClick={() => handelDelete(room._id)}
                    className="text-[#F09167] text-2xl"
                  >
                    <MdDelete></MdDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListings;
