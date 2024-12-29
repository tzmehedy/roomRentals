import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import RoomReservation from './RoomReservation';

const RoomsDetails = () => {
    const params = useParams()
    const axiosSecure = useAxiosSecure()

    const {data:room=[], isLoading} = useQuery({
        queryKey: ["roomsDetails"],
        queryFn: async()=>{
            const { data } = await axiosSecure.get(`/rooms/${params.id}`)
            return data
        }
    })
    

    if(isLoading) return (
      <div className="flex justify-center items-center h-screen text-[#F09167]">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );

    

    console.log("start date-->", new Date(room.from).toLocaleDateString());
    console.log("End date-->", new Date(room.to).toLocaleDateString());
    return (
      <div className=" md:px-20 space-y-5">
        <div className="space-y-5">
          <h1 className="font-bold text-2xl">{room.title}</h1>
          <p className="text-slate-500">{room.location}</p>
          <img
            className="w-full rounded-xl h-[400px]"
            src={room.image}
            alt=""
          />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-5">
          <div className="md:w-2/3">
            <div className="flex  items-center md:space-x-2">
              <h1 className="text-xl font-bold">Hosted by {room.host?.name}</h1>
              <img
                className="w-10 h-10 rounded-full"
                src={room.host?.image}
                alt=""
              />
            </div>
            <div className="flex md:space-x-3 text-slate-500">
              <p>{room.guests} Guests</p>
              <p>{room.bathrooms} Bathrooms</p>
              <p>{room.bedrooms} BedRooms</p>
            </div>

            <div className="divider"></div>

            <div>
              <p className="text-slate-500">{room.description}</p>
            </div>

            <div className="divider"></div>
          </div>

          {/* <div className="border border-slate-300 rounded-lg md:w-1/3 md:p-3">
            <h1 className="font-bold text-2xl">${room.price}/night</h1>
            <div className="divider"></div>

            <DateRange
              showDateDisplay={false}
              rangeColors={["#F09167"]}
              onChange={(item) =>
              {
                setState([
                  {
                    startDate: new Date(room.from),
                    endDate: new Date(room.to),
                    key: "selection",
                  },
                ]);
              }
              }
              moveRangeOnFirstSelection={false}
              ranges={state}
            />

            <button className="btn w-full  font-bold bg-[#F09167]">
              Reserve
            </button>
          </div> */}

          <RoomReservation key={room._id} room={room}></RoomReservation>
        </div>
      </div>
    );
};

export default RoomsDetails;