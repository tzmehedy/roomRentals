import React from 'react';
import {categories} from "../Categories/CategoriesData"
import CategoryBox from '../CategoryBox';

const Categories = () => {
    return (
      <div className="flex space-x-5 overflow-x-scroll md:overflow-hidden">
        {categories.map((item, index) => (
          <CategoryBox
            key={index}
            label={item.label}
            icon={item.icon}
          ></CategoryBox>
        ))}
      </div>
    );
};

export default Categories;