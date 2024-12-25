import React, { useState } from 'react';
import queryString from 'query-string';
import { useNavigate } from 'react-router';

const CategoryBox = ({label,icon:Icon}) => {

  const navigate = useNavigate()
  // const [active,setActive] = useState(false)
  const handelCategory = () =>{
    // setActive(true)
    let category = {category:label}

    const url =  queryString.stringifyUrl({
      url: "/",
      query: category
    })

    navigate(url)

    
  }
    return (
      <div
        onClick={handelCategory}
        className={`shadow-lg p-2   font-bold cursor-pointer`}
      >
        <div className="flex justify-center items-center">
          <Icon className="" />
        </div>
        <p>{label}</p>
      </div>
    );
};

export default CategoryBox;