import React from 'react';
import Categories from '../../Components/Categories/Categories';
import Rooms from '../../Components/Rooms/Rooms';


const Home = () => {
    return (
      <div>
        <div className='flex justify-center'>
          <Categories></Categories>
        </div>
        <div>
          <Rooms></Rooms>
        </div>
      </div>
    );
};

export default Home;