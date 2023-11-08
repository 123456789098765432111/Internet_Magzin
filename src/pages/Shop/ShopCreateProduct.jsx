import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import CreateProduct from "../../components/Shop/CreateProduct";
import Error404 from '../../routes/Error404/Error404';
import { useSelector } from 'react-redux';

const ShopCreateProduct = () => {
  const { user, error, successMessage } = useSelector((state) => state.user);
  if ( user && user?.email === "umidjongafforov175@gmail.com") {
  return (
    <div>
        <DashboardHeader />
        <div className="flex items-center justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <DashboardSideBar active={4} />
            </div>
            <div className="w-full justify-center flex">
                <CreateProduct />
            </div>
          </div>
    </div>
  )
}else{
  return(
    <Error404/>
  )
}
}

export default ShopCreateProduct