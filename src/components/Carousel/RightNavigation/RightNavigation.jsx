import React, { useState,useEffect } from 'react';
import {useSwiper} from 'swiper/react';
import RightArrow from '../../../assets/rightarrow.png';

const RightNavigation = () => {
    const swiper =useSwiper();
    //const [isEnd,setIsEnd]=useState(swiper.isEnd); 
    //useEffect(()=>{
      //  swiper.on("slideChange",function(){})
     //},[])
    
     return(
        <img src={RightArrow} alt="right" onClick={()=>{
            swiper.slideNext();
        }} />)
}

export default RightNavigation;