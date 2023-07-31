import React, { useEffect } from 'react'
import styles from "./Carousel.module.css";
import {Swiper,SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import {Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import LeftNavigation from "./LeftNavigation/LeftNavigation";
import RightNavigation from "./RightNavigation/RightNavigation";

const Controls = ({data})=>{
    
  const swiper=useSwiper();

    useEffect(()=>{
        swiper.slideTo(0,1000);
    },[data,swiper]);
}

const Carousel = ({data,component}) => {
  return (
    <div className={styles.wrapper}>

    <Swiper style={{padding: "0px 20px"}} initialSlide={0} modules={[Navigation]} 
    slidesPerView={"6"} spaceBetween={40} allowTouchMove >

        <Controls data={data} />
    
       <LeftNavigation />
       <RightNavigation /> 
  
        {data.map(item=>{
          return(
            <SwiperSlide>{component(item)}</SwiperSlide>
          )
        })}
  
        </Swiper>
    
    </div>
  )
}

export default Carousel;