import React from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import RoomsCard from './RoomsCard';

const Rooms = () => {
    const axiosPublic = useAxiosPublic()

    const {data:rooms=[], isLoading} = useQuery({
        queryKey: ["rooms"],
        queryFn: async()=>{
            const {data} = await axiosPublic.get("/rooms")
            return data
        }
    })

    


    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10 mt-10 p-5'>
            {
                rooms?.map(room=> <RoomsCard key={room._id} room={room}></RoomsCard>)
            }
            
        </div>
    );
};

export default Rooms;