import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShopCreate from "../components/Shop/ShopCreate";
import Error404 from '../routes/Error404/Error404';

const ShopCreatePage = () => {
  const navigate = useNavigate();
  const { isSeller,seller } = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      navigate(`/shop/${seller._id}`);
    }
  }, [])
  const { user, error, successMessage } =useSelector((state) => state.user);
  if ( user && user?.email === "umidjongafforov175@gmail.com") {
  return (
    <div>
        <ShopCreate />
    </div>
  )}else{
    return(
      <Error404/>
    )
  }
}

export default ShopCreatePage