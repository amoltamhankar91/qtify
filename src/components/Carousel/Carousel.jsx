import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import LeftNavigation from './LeftNavigation/LeftNavigation';
import RightNavigation from './RightNavigation/RightNavigation';
import { SwiperSlide } from 'swiper/react';


const Carousel = (props) => {

  const{data,renderComponent}=props;
  
  const Controls=(props)=>{
    const {data}=props;
    //const swiper=useSwiper();

    useEffect(()=>{
      //swiper.slideTo(0);
    },[data]);

}   

return (
    <div>
        <Swiper
            modules={[Navigation]}
            slidesPerView={"auto"}
            spaceBetween={50}>

          <Controls data ={data} />
          <LeftNavigation />
          <RightNavigation />
          <SwiperSlide>
          </SwiperSlide>
        </Swiper>

    </div>
  )
}

export default Carousel;