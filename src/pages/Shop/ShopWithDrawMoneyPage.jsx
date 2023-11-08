import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import WithdrawMoney from "../../components/Shop/WithdrawMoney";
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar';
import Error404 from '../../routes/Error404/Error404';
import { useSelector } from 'react-redux';

const ShopWithDrawMoneyPage = () => {
  const { user, error, successMessage } =useSelector((state) => state.user);
  if ( user && user?.email === "umidjongafforov175@gmail.com") {
  return (
    <div>
    <DashboardHeader />
    <div className="flex items-start justify-between w-full">
      <div className="w-[80px] 800px:w-[330px]">
        <DashboardSideBar active={7} />
      </div>
       <WithdrawMoney />
    </div>
  </div>
  )}else{
    return(
      <Error404/>
    )
  }
}

export default ShopWithDrawMoneyPage