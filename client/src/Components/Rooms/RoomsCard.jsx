import React from 'react';
import { Link } from 'react-router';

const RoomsCard = ({room}) => {
 
    const {location,category,title,image,price,_id} = room
    return (
      <Link to={`/rooms/${_id}`} className="card bg-slate-100 shadow-xl p-2 space-y-3">
        <img
          className="w-full h-2/3 rounded-lg transition ease-out delay-100 hover:-translate-y-1 hover:scale-90 "
          src={image}
          alt=""
        />
        <p className="text-xl font-bold">{location}</p>
        <p>${price}/night</p>
      </Link >
    );
};

export default RoomsCard;