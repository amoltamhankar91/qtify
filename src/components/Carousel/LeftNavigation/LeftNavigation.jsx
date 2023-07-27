import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import LeftArrow from "../../../assets/leftarrow.png";


const LeftNavigation = () => {
 const swiper = useSwiper();
 //const [isBeginning,setBiginning]= useState(swiper.isBeginning);
 //useEffect(()=>{
   // swiper.on("slideChange",function(){})
 //},[])

 return(
    <img src={LeftArrow} alt="left" onClick={()=>{
        swiper.slidePrev();
    }} /> 
 )
}

export default LeftNavigation;