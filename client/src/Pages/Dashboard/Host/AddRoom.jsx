import React, { useState } from 'react';
import {categories} from "../../../Components/Categories/CategoriesData"
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

const AddRoom = () => {
    const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: null,
        key: "selection",
      },
    ]);
    return (
      <div className="p-20">
        <form className="space-y-5">
          <div className="flex gap-5">
            <div className="md:w-1/2">
              <label htmlFor="location" className="font-bold">
                Location
              </label>{" "}
              <br />
              <input
                className="px-3 py-2 border-2 w-full"
                type="text"
                name="location"
                id=""
                placeholder="Location"
              />
            </div>
            <div className="md:w-1/2">
              <div className="">
                <label htmlFor="title" className="font-bold">
                  Title
                </label>{" "}
                <br />
                <input
                  className="px-3 py-2 border-2 w-full"
                  type="text"
                  name="title"
                  id=""
                  placeholder="Title"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="md:w-1/2">
              <label htmlFor="location" className="font-bold">
                Category
              </label>{" "}
              <br />
              <select
                className="w-full px-3 py-2 border-2"
                name="category"
                id=""
              >
                {categories.map((category) => (
                  <option value={category.label}>{category.label}</option>
                ))}
              </select>
            </div>
            <div className="md:w-1/2">
              <div className="border-2 w-full border-dotted flex justify-start px-4 py-4">
                <input className="w-3/2" type="file" name="image" id="" />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="md:w-1/2">
              <label className="font-bold" htmlFor="calender">
                Select Availability Range
              </label>

              <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex justify-between gap-5">
                <div className="md:w-1/2">
                  <label className="font-bold" htmlFor="price">
                    Price
                  </label>{" "}
                  <br />
                  <input
                    className="px-3 py-2 border-2"
                    type="number"
                    name="price"
                    id=""
                    placeholder="Price"
                  />
                </div>
                <div className="md:w-1/2">
                  <label className="font-bold" htmlFor="totalGuest">
                    Total Guest
                  </label>{" "}
                  <br />
                  <input
                    className="px-3 py-2 border-2"
                    type="number"
                    name="totalGuest"
                    id=""
                    placeholder="Total Guest"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <div className="md:w-1/2">
                  <label className="font-bold" htmlFor="bedRooms">
                    Bedrooms
                  </label>{" "}
                  <br />
                  <input
                    className="px-3 py-2 border-2"
                    type="number"
                    name="bedrooms"
                    id=""
                    placeholder="Bedrooms"
                  />
                </div>
                <div className="md:w-1/2">
                  <label className="font-bold" htmlFor="bathrooms">
                    Bathrooms
                  </label>{" "}
                  <br />
                  <input
                    className="px-3 py-2 border-2"
                    type="number"
                    name="bathrooms"
                    id=""
                    placeholder="Bathrooms"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label htmlFor="description" className="font-bold">
                  {" "}
                  Description
                </label>
                <textarea
                  className="w-full h-[200px] px-3 py-2 border-2"
                  name="description"
                  id=""
                  placeholder="Description"
                ></textarea>
              </div>
            </div>
          </div>

          <input
            className="btn w-full bg-[#F09167] font-bold"
            type="submit"
            value="Save & Continue"
          />
        </form>
      </div>
    );
};

export default AddRoom;