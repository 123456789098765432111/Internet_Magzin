import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import Footer from '../../components/Layout/Footer'
import OrderDetails from "../../components/Shop/OrderDetails";
import { useSelector } from 'react-redux';
import Error404 from '../../routes/Error404/Error404';

const ShopOrderDetails = () => {
  const { user, error, successMessage } = useSelector((state) => state.user);
  if ( user && user?.email === "umidjongafforov175@gmail.com") {
  return (
    <div>
         <DashboardHeader />
         <OrderDetails />
          <Footer />
    </div>
  )
  }else{
    return(
      <Error404/>
    )
  }
}

export default ShopOrderDetails