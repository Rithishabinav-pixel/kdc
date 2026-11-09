"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function Capabilities({CapData}) {

    return (

        <Swiper
        modules={[Autoplay]} 
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
        speed={1000}
        navigation={false}
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
            slidesPerView: 4,
          },
          1900: {
            slidesPerView: 5,
          },
        }}
      >

        <>
        
        {CapData.map((datas) => (

           <SwiperSlide key={datas.id}>

            <div className="cpb_crd">

                <Image src={datas.img} width={360} height={522} alt="" />

                <div className="cpb_crd_cnt">

                    <h3>{datas.title}</h3>

                    <p>{datas.description}</p>

                </div>

            </div>


           </SwiperSlide> 
    

        ))}
        
        </>

    </Swiper>    

    );

}