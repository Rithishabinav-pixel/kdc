"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



export default function CommonSwiper({slides}) {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]} 
      spaceBetween={20}
      // slidesPerView={4.5}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      breakpoints={{
        527: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 3,
        },
        1900: {
          slidesPerView: 3,
        },
      }} 
    >

      <>
        {slides.map((slide) => (

          <SwiperSlide key={slide.id}>
            
          <div className="swipercard">

              <img src={slide.img} alt={slide.title} width="100%"/>

              <h4><span>{slide.title}</span>  <img className="line_img" src="../../assets/img/right_arrow_icn.svg" alt="Right Arrow" /></h4>

          </div>

          </SwiperSlide>

        
        ))}

      </>

    </Swiper>
    
  );
}