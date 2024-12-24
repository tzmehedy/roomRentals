import React from 'react';

const CategoryBox = ({label,icon:Icon}) => {
    return (
      <div className="shadow-lg p-2 border-b-2  border-slate-400 font-bold">
        <div className="flex justify-center items-center">
          <Icon className="" />
        </div>
        <p>{label}</p>
      </div>
    );
};

export default CategoryBox;