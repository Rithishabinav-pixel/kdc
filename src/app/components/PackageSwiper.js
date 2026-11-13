"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



export default function PackageSwiper({}) {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={20}
    //   slidesPerView={1.9}
      centeredSlides={true}
      initialSlide={0}
      loop={false}
      speed={1000}
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter: true,
      // }}
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

                  <p>Explore our versatile range of ready-to-select packaging solutions, designed to meet diverse product and brand requirements. Choose from established formats that combine aesthetic appeal, functionality, dispensing performance and consumer convenience, enabling faster and more efficient product launches.</p>

              </div>

              <div className="d-flex lft_cnt" data-aos="fade-right">
 
                    <p>
                    Designed for controlled dispensing, pump formats support easy handling and consistent product use across varied product types. 
                    </p>

                    <img className="line_img" src="../assets/img/blu-line.svg" alt="Right Arrow" />

              </div>

              <div className="mdl_cnt" data-aos="fade-down">

                    <p>
                    Designed for easy access, with function and form in balance. 
                    </p>

                    <img className="line_img" src="../assets/img/dw-line.svg" alt="Right Arrow" />

              </div>
               
              {/* <div className="d-flex rgt_cnt" data-aos="fade-left">

                   <img className="line_img" src="../assets/img/blu-line.svg" alt="Right Arrow" />
 
                    <p>
                    Secondary packaging protects products while adding structure and consistency to the overall presentation across retail environments.
                    </p>

              </div> */}

          </div>

          </SwiperSlide>

          <SwiperSlide>

          <div className="swipercard">

              <img src="../assets/img/package_img_two.webp" alt="" className="packing_img"/>

              <div className="packing_slider_cnt">

                  <h4><span>Customised Packaging</span> </h4>

                  <p>Tailor-made packaging solutions designed to reflect your brand’s unique identity and product requirements. From aesthetics and functionality to dispensing performance and consumer convenience, we develop packaging that combines distinctive design with practical innovation.
</p>

              </div>

          </div>

          </SwiperSlide>


      </>
    </Swiper>
  );
}