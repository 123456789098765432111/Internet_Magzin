import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllSellers from "../components/Admin/AllSellers";
import Error404 from '../routes/Error404/Error404';
import { useSelector } from 'react-redux';

const AdminDashboardSellers = () => {
  const { user, error, successMessage } =useSelector((state) => state.user);
  if ( user && user?.email === "umidjongafforov175@gmail.com") {
  return (
    <div>
    <AdminHeader />
    <div className="w-full flex">
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <AdminSideBar active={3} />
        </div>
        <AllSellers />
      </div>
    </div>
  </div>
  )}else{
    return(
      <Error404/>
    )
  }
}

export default AdminDashboardSellers