import React from 'react';
import useUserRole from '../Hooks/useUserRole';
import { Navigate } from 'react-router';

const HostRoute = ({children}) => {
   const [role, isLoading] = useUserRole();

   if (isLoading)
     return (
       <div className="h-screen flex justify-center items-center text-[#EF8557]">
         <span className="loading loading-bars loading-lg"></span>
       </div>
     );

   if (role === "host") return children;

   return <Navigate to={"/dashboard"}></Navigate>;
};

export default HostRoute;