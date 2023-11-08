import React from 'react'
import styles from '../../styles/styles'
import ShopInfo from "../../components/Shop/ShopInfo";
import ShopProfileData from "../../components/Shop/ShopProfileData";
import Error404 from '../../routes/Error404/Error404';
import { useSelector } from 'react-redux';

const ShopHomePage = () => {
  const { user, error, successMessage } =useSelector((state) => state.user);
  if ( user && user?.email === "umidjongafforov175@gmail.com") {
  return (
    <div className={`${styles.section} bg-[#f5f5f5]`}>
         <div className="w-full flex py-10 justify-between">
          <div className="w-[25%] bg-[#fff] rounded-[4px] shadow-sm overflow-y-scroll h-[90vh] sticky top-10 left-0 z-10">
            <ShopInfo isOwner={true} />
          </div>
          <div className="w-[72%] rounded-[4px]">
            <ShopProfileData isOwner={true} />
          </div>
         </div>
    </div>
  )}else{
    return(
      <Error404/>
    )
  }
}

export default ShopHomePage