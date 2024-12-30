import React, { useState } from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUserRole = () => {
   const axiosSecure = useAxiosSecure()
   const {user, loading} = useAuth()
  
   

   const {data:role, isLoading} = useQuery({
    queryFn: ["userRole", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async() =>{
        const { data } = await axiosSecure.get(`/user-role/${user?.email}`);
        return data.role
    }
   })
   
   return [role, isLoading]
};

export default useUserRole;