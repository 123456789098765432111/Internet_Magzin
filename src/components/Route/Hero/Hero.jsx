import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh]  bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://evo.business/wp-content/uploads/2016/09/Depositphotos_35284617_m-2015-1.jpg)",
      backgroundSize:'cover'}}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h2
          className={`text-[35px] leading-[1.2] 800px:text-[50px] text-[#3d3a3a] font-[600] capitalize`}
        >
         Grand_Market Internet magazinimizga  <br /> xush kelibsiz
        </h2>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Bizning Internet Mangazinimizda Optim Mahsulotlarni sotib olishingiz mumkin <br /> Agar sayt haqida biror xatolik duch kelsangiz biz bilan bo'glanishingiz mumkin {" "}
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Mahsulotlar
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
