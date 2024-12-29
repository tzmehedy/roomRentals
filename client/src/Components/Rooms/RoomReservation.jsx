import { differenceInCalendarDays } from 'date-fns';
import React, { useState } from 'react';
import { DateRange } from "react-date-range";

const RoomReservation = ({room}) => {
    const [state, setState] = useState([
      {
        startDate: new Date(room.from),
        endDate: new Date(room.to),
        key: "selection",
      },
    ]);

    const totalPrice = parseInt(
      differenceInCalendarDays(new Date(room.to), new Date(room.from)) *
        room.price
    );
    return (
      <div className="border border-slate-300 rounded-lg md:w-1/3 md:p-3">
        <h1 className="font-bold text-2xl">${room.price}/night</h1>
        <div className="divider"></div>

        <DateRange
          showDateDisplay={false}
          rangeColors={["#F09167"]}
          onChange={(item) => {
            setState([
              {
                startDate: new Date(room.from),
                endDate: new Date(room.to),
                key: "selection",
              },
            ]);
          }}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />

        <button className="btn w-full  font-bold bg-[#F09167]">Reserve</button>

        <div className='flex justify-between text-2xl font-bold mt-2'>
          <h1>Total Price </h1>
          <h1>${totalPrice}</h1>
        </div>
      </div>
    );
};

export default RoomReservation;