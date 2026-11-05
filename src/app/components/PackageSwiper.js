"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



export default function PackageSwiper({}) {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={20}
    //   slidesPerView={1.9}
      centeredSlides={true}
      initialSlide={0}
      loop={false}
      speed={1000}
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
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1600: {
          slidesPerView: 1.9,
        },
        1900: {
          slidesPerView: 1.9,
        },
      }}
    >

      <>

          <SwiperSlide>
            
          <div className="swipercard">

              <img src="../assets/img/package_img_1.webp" alt="" className="packing_img"/>

              <div className="packing_slider_cnt">

                  <h4><span>Stock Packaging</span> </h4>

                  <p>Ready-to-select packaging helps brands move faster, with versatile formats suited to product types, dispensing needs, brand requirements and launch priorities.</p>

              </div>

              <div className="d-flex lft_cnt" data-aos="fade-right">
 
                    <p>
                       Pump formats offer controlled dispensing, easy handling and clean presentation across a range of products.
                    </p>

                    <img className="line_img" src="../assets/img/blu-line.svg" alt="Right Arrow" />

              </div>

              <div className="mdl_cnt" data-aos="fade-down">

                    <p>
                      Jar formats balance easy access, function and presence.
                    </p>

                    <img className="line_img" src="../assets/img/dw-line.svg" alt="Right Arrow" />

              </div>
               
              <div className="d-flex rgt_cnt" data-aos="fade-left">

                   <img className="line_img" src="../assets/img/blu-line.svg" alt="Right Arrow" />
 
                    <p>
                       Pump formats offer controlled dispensing, easy handling and clean presentation across a range of products.
                    </p>

              </div>

          </div>

          </SwiperSlide>

          <SwiperSlide>

          <div className="swipercard">

              <img src="../assets/img/package_img_two.webp" alt="" className="packing_img"/>

              <div className="packing_slider_cnt">

                  <h4><span>Packaging</span> </h4>

                  <p>Ready-to-select packaging helps brands move faster, with versatile formats suited to product types, dispensing needs, brand requirements and launch priorities.</p>

              </div>

          </div>

          </SwiperSlide>


      </>
    </Swiper>
  );
}