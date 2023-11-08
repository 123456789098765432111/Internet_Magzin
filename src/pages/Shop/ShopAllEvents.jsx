import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import AllEvents from "../../components/Shop/AllEvents";
import Error404 from '../../routes/Error404/Error404';
import { useSelector } from 'react-redux';

const ShopAllEvents = () => {
  const { user, error, successMessage } = useSelector((state) => state.user);
  if ( user && user?.email === "umidjongafforov175@gmail.com") {
  return (
    <div>
        <DashboardHeader />
        <div className="flex justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <DashboardSideBar active={5} />
            </div>
            <div className="w-full justify-center flex">
                <AllEvents />
            </div>
          </div>
    </div>
  )
}else{
  return (
    <Error404/>
  )
}
}

export default ShopAllEvents