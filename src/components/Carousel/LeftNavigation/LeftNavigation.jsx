import React, { useEffect, useState } from 'react';
import { useSwiper,useSwiperSlide } from 'swiper/react';
import styles from './LeftNavigation.module.css';
import {ReactComponent as LeftArrow} from "../../../assets/leftarrow.svg";
import 'swiper/css';

const LeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning,setisBeginning]=useState(swiper.isBeginning);
  useEffect(()=>{
    swiper.on("slideChange",function(){
      setisBeginning(swiper.isBeginning);
    })
  },[swiper]);
  return (
    <div className={styles.leftNavigation}>
     {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()} />}
    </div>
  )
}

export default LeftNavigation;