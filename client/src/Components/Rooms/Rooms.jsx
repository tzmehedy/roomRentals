import React from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import RoomsCard from './RoomsCard';
import { useSearchParams } from 'react-router';

const Rooms = () => {
    const axiosPublic = useAxiosPublic()
    const [params,setParams] = useSearchParams()
    const category = params.get('category')
    const {data:rooms=[], isLoading} = useQuery({
        queryKey: ["rooms", category],
        queryFn: async()=>{
            const {data} = await axiosPublic.get(`/rooms?category=${category}`)
            return data
        }
    })
    return (
      <div>
        {rooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10 p-5">
            {rooms.map((room) => (
              <RoomsCard key={room._id} room={room}></RoomsCard>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-screen">
            <div className="text-center">
              <p className="font-bold text-2xl">
                No rooms available in this category
              </p>
              <small className='text-slate-400'>Please select another category</small>
            </div>
          </div>
        )}
      </div>
    );
};

export default Rooms;