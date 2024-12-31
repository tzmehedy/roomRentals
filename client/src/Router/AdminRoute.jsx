import { Navigate, useNavigate } from "react-router";

import useUserRole from "../Hooks/useUserRole";

 
 
 const AdminRoute = ({children}) => {
    
    const [role,isLoading] = useUserRole()

    if(isLoading) return (
      <div className="h-screen flex justify-center items-center text-[#EF8557]">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );

    if(role==='admin') return children 
     
    return <Navigate to={"/dashboard"}></Navigate>
    
 };
 
 export default AdminRoute;