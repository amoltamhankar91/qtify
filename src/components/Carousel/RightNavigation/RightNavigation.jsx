import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import styles from './RightNavigation.module.css';
import {ReactComponent as RightArrow} from "../../../assets/rightarrow.svg";
import 'swiper/css';

const RightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd,setisEnd]=useState(swiper.isEnd);
  useEffect(()=>{
    swiper.on("slideChange",function(){
      setisEnd(swiper.isEnd);
    })
  },[swiper]);
  return (
    <div className={styles.rightNavigation}>
    {!isEnd && <RightArrow onClick={()=>swiper.slideNext()} />}
    </div>
  )
}

export default RightNavigation; 