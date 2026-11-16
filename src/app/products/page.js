"use client";


import Link from "next/link";
import styles from "./products.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";
import GsapTitle from "../components/GsapTitle";
import PhoneInputTag from "../components/PhoneInputTag";
import Capabilities from "../components/Capabilities";

const Skincare = [
  {
    id: 1,
    title: "Cleansers & Face Washes",
    description: " Gentle and effective cleansing solutions across gels, creams, foams and specialised formats.",
    img: "/assets/img/prd-img-3.webp",
  },
  {
    id: 2,
    title: "Moisturisers & Hydration",
    description: "Lightweight gels, nourishing creams and advanced hydration formulations.",
    img: "/assets/img/prd-img-4.webp",
  },
  {
    id: 3,
    title: "Serums & Targeted Treatments",
    description: "Innovative formulations addressing hydration, radiance, skin barrier support and visible signs of ageing.",
    img: "/assets/img/prd-img-1.webp",
  },
  {
    id: 4,
    title: "Sun Care ", 
    description: "Sun protection concepts combining performance, comfortable textures and suitability for different climates.",
    img: "/assets/img/prd-img-2.webp",
  },
  {
    id: 5,
    title: "Body Care",
    description: "Lotions, creams and specialised body care solutions balancing functionality and sensorial appeal.",
    img: "/assets/img/~prd-img-3.webp",
  },
  {
    id: 6,
    title: "Premium & Specialised Skincare",
    description: "Differentiated textures, advanced ingredient technologies and emerging global skincare innovations.",
    img: "/assets/img/prd-img-4.webp",
  },
  
]

const Haircare = [
  {
    id: 1,
    title: "Shampoos & Cleansers",
    description: " Formulations spanning everyday cleansing, scalp care, moisturising and specialised haircare needs.",
    img: "/assets/img/prd-img-3.webp",
  },
  {
    id: 2,
    title: "Conditioners & Hair Masks",
    description: "Solutions designed for nourishment, smoothness, manageability and hair repair.   ",
    img: "/assets/img/prd-img-4.webp",
  },
  {
    id: 3,
    title: "Hair Serums & Leave-in Treatments",
    description: " Lightweight formulations focused on frizz control, shine, protection and improved hair feel.",
    img: "/assets/img/prd-img-1.webp",
  },
  {
    id: 4,
    title: "Scalp Care & Targeted Solutions ", 
    description: "Innovative concepts addressing scalp hydration, comfort and evolving scalp care needs. ",
    img: "/assets/img/prd-img-2.webp",
  },
  {
    id: 5,
    title: "Hair Oils & Nourishing Treatments",
    description: "Traditional and contemporary formulations combining conditioning benefits with modern sensory preferences.",
    img: "/assets/img/~prd-img-3.webp",
  },
  {
    id: 6,
    title: "Premium & Specialised Haircare",
    description: "Advanced formulation concepts for differentiated haircare experiences and emerging consumer trends.  ",
    img: "/assets/img/prd-img-4.webp",
  },
  
]


gsap.registerPlugin(ScrollTrigger, SplitText);
 
export default function products(){

  const careTitle = useRef(null);

  useGSAP(() => {

    // if (!careTitle.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", () => {

      gsap.fromTo(
        careTitle.current,
        { opacity: 0.05},
        {
          opacity: 1,
          scrollTrigger: {
            trigger: careTitle.current,
            start: "top 70%",
            end: "top 20%",
            scrub: true,
            // markers: true,
            // pin: true,
          }
        }
      );

    }, careTitle)

    return () => mm.revert();
    
  }, { scope: careTitle });


    return (

        <> 
        
     
         <section className={styles.prdt_hro}>

             <div className="container">

                   <div className="row align-items-center">

                       <div className="col-sm-12 col-lg-5 col-xl-5 col-xxl-4" data-aos="fade-right">

                         <h1 className="bnr_titl">Formulation. Packaging. Beauty. Connected.</h1>

                         <p>We bring together advanced formulation expertise, innovative packaging solutions and market insights to create distinctive, high-quality beauty and personal care products for brands across India and global markets.</p>

                         <Link href="/contact-us" className="common_btn"> <span>Contact Us</span> <Image src="/assets/img/right_arrow_icn.svg" alt="Logo" width={24} height={24} /></Link>
                      
                       </div>

                       {/* <div className="col-12 col-lg-7 col-xl-7 col-xxl-8 d-flex justify-content-center">

                            <div className={styles.prdt_hro_crd}>

                                <Image src="/assets/img/green-skincare-img.webp" width={248} height={305} alt="" />

                                <Link href="#"> <span>Hair Care</span> <Image src="/assets/img/blu-arr.svg" alt="Logo" width={24} height={24} /></Link>

                            </div>

                       </div> */}

                       <div className="col-12 p-0">
                        
                       <div className={styles.prdt_mb_img}>

<Image src="/assets/img/product_bnr-mb.webp" width={884} height={540} alt="" />

</div>

                       </div>

                   </div>

             </div>

             
            


         </section>

          <section className={`common_spc ${styles.mnft}`}>
     
            <div className="container p-0">

                <div className="row justify-content-between align-items-center p-0">

                     <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-5">

                        <div className={styles.mnft_img} data-aos="fade-right">

                            <Image src="/assets/img/solor_img.webp" alt="" className="img_rez mb-3" width={747} height={498} />

                        </div>

                     </div>
                     <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">

                        <div className={styles.mnft_cnt}>

                        <GsapTitle className="blk_cmmn_tit">
            
            Skincare & Haircare Formulations. Inspired by Global Innovation.


             </GsapTitle>

                          <h4>World-Class Formulation Expertise. Tailored to Your Market.</h4>

                            <p data-aos="fade-up">
                            Explore new possibilities in skincare and haircare through kdc/one's global R&D expertise, extensive formulation library and deep understanding of evolving beauty trends.<br /> <br />
Combining international innovation with Clarion's Indian market insights, we bring advanced formulation concepts, high-performance ingredients and sensorial excellence closer to Indian and Asian beauty brands.


                            </p>

                             {/* <div className={styles.mnft_cuntr}>

                                 <div className={styles.cntr_crd} data-aos="fade-up">

                                    <p> ~ <CountUp end={145000} duration={2} enableScrollSpy scrollSpyOnce={false}/> sq. ft.</p>

                                     <h3>Planned Area</h3>

                                 </div>

                                 <div className={styles.cntr_crd} data-aos="fade-up" data-aos-delay="200">

                                    <p> <CountUp end={1000} duration={2} enableScrollSpy scrollSpyOnce={false}/> +</p>

                                     <h3>Workforce strength</h3>

                                 </div>

                                 <div className={styles.cntr_crd} data-aos="fade-up" data-aos-delay="400">

                                    <p> <CountUp end={235000} duration={2} enableScrollSpy scrollSpyOnce={false}/> + MT</p>

                                    <h3>Annual production capacity</h3>

                                 </div>

                                 <div className={styles.cntr_crd} data-aos="fade-up" data-aos-delay="600">

                                    <p> <CountUp end={1001} duration={2} enableScrollSpy scrollSpyOnce={false}/> +</p>

                                    <h3>SKUs produced annually</h3>

                                 </div>

                             </div> */}
                        
                        </div>
                        
                     </div>

                </div>

            </div>

          </section>

          <section className="product_categories ecru_wht">

            <div className="container">

              <div className="row justify-content-center">

                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-7 p-0">

                  <GsapTitle className="text-center blk_cmmn_tit">

                  Innovation Across Beauty Categories

                  </GsapTitle>

                  <div className={styles.sub_cnt}>

                    <h3 className="text-center">Skincare Formulations</h3>

                    <p className="text-center width_cstom_gl">Discover a diverse range of skincare formulation possibilities designed to address evolving consumer preferences, skin concerns and product experiences.</p>


                  </div>

                </div>

              </div>

            </div>

           

            <div className="product_slider" data-aos="fade-up">
              
            <Capabilities CapData={Skincare} />

            </div>  

          </section>

          <section className="product_categories light_gray">

            <div className="container">

              <div className="row justify-content-center">

                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-7 p-0">

                  <div className={styles.sub_cnt}>

                    <h3 className="text-center">Haircare Formulations</h3>

                    <p className="text-center width_cstom_gl">Explore innovative haircare solutions combining cleansing performance, conditioning benefits, advanced ingredients and enhanced sensory experiences.</p>


                  </div>

                </div>

              </div>

            </div>

            <div className="product_slider" data-aos="fade-up">
              
            <Capabilities CapData={Haircare} />

            </div>  

          </section>

          <section className={`common_spc ${styles.cmn_section}`}>

          <div className="container p-0">

              <div className="row align-items-center justify-content-between">
 
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xxl-6" data-aos="fade-right">

                    <GsapTitle className="blk_cmmn_tit">
            
                    Innovation That Reflects Your Brand.

                    </GsapTitle>

                     

                      <p>
                      Whether exploring an established formulation, adapting a global concept or developing a distinctive product proposition, our combined expertise provides a strong foundation for beauty innovation.
Our focus is on formulation possibilities that bring together product performance, appealing textures, consumer convenience and market relevance.
</p>

                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xxl-5">

                    <div className={styles.slr_img} data-aos="fade-up">

                       <Image src="/assets/img/solor_img.webp" alt="" className="img_rez" width={620} height={620} />

                    </div>

                  </div>

              </div>

          </div>

          </section>

          <section className={styles.cta_crd} data-aos="zoom-in">

            <div className="container">

               <div className="row justify-content-center">
  
                  <div className="col-xl-9">

                     <div className={styles.call_action}>

                       <div className={styles.call_action_cnt}>

                       <h3>Let's Explore Your Next Beauty Innovation.</h3>

                        <p>Connect with our team to discover skincare and haircare formulation possibilities and explore solutions aligned with your brand's vision.</p>

                        <Link href="/contact-us" className="wht_btn"> <span>Explore Formulations</span> <Image src="/assets/img/blu-arr.svg" alt="Logo" width={24} height={24}/></Link>


                       </div>

 
                         
                     </div>

                  </div>

               </div>

            </div>

          </section>

         {/* <section className={`common_spc ${styles.prdt_care}`}>

            <div className="container p-0">

                <div className="row">

                  <div className="col-xl-12">

                     <h2 ref={careTitle} className="blk_cmmn_tit">Precision-moulded and decorated packaging components, produced in India.</h2>

                  </div>

                </div>

                <div className="row mt-3">

                

                  <div className="col-xl-6" data-aos="fade-up" data-aos-delay="100">

                    <div className={styles.care_crd}>

                         <div className={styles.care_crd_cnt}>

                              <h3>Skincare</h3>
                              <p>Packaging designed to protect formulations, support product performance and elevate the consumer experience. From jars and droppers to pumps and bottles, each format is developed with functionality, compatibility and premium presentation in mind.</p>

                         </div>
                         <div className={styles.care_crd_img}>

                                <Image src="/assets/img/skin-care-img.webp" alt="" width={398} height={544}/>

                         </div>

                    </div>

                  </div>

                  <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">

                    <div className={`${styles.top_cc_spc} ${styles.care_crd}`}>

                         <div className={styles.care_crd_cnt}>

                              <h3>Hair Care</h3>
                              <p>Packaging designed for everyday performance across shampoos, conditioners, treatments and serums. Practical dispensing formats, durable decoration and brand-led finishes help create products that are easy to use, consistent and visually distinctive.</p>

                         </div>
                         <div className={styles.care_crd_img}>

                                <Image src="/assets/img/hair-care-img.webp" alt="" width={423} height={373}/>

                         </div>

                    </div>

                  </div>

                </div>

                <div className="row justifu-content-center">

                      <div className="col-xl-12">

                          <h2 className={styles.pac_for_txt} data-aos="fade-up">Formulation & Packaging</h2>

                      </div>

                </div> 
 
            </div>

         </section>  */}

          <section className={`common_spc ${styles.get_in_touch}`}>

            <div className="container p-0">

               <div className="row justify-content-between">

                  <div className="col-xl-6" data-aos="fade-right">
                    
                  <GsapTitle className="blk_cmmn_tit">
            
                  Let’s Create What’s Next in Beauty

                 </GsapTitle>


                      <p>Whether you are developing a new beauty product or exploring premium packaging, our team is ready to start the conversation.</p>

                  </div>
                  <div className="col-xl-5" data-aos="fade-left">

                      <div className="form_crd">

                            <h3 className="frm_titl">Tell Us About Yourself</h3>
                          
                          <form>

                              <input type="text" placeholder="Full Name" />

                              {/* <input type="text" placeholder="Company Name" /> */}

                              <input type="text" placeholder="Designation" />

                              <input type="text" placeholder="Email Address" /> 

                              <PhoneInputTag>

                              </PhoneInputTag>

                              

                              <select>
                                    
                                    <option>Service Required</option>
                                    <option value="Formulation">Formulation</option>
                                    <option value="Packaging">Packaging</option>

                                </select>

                              <input type="text" placeholder="Country / Location" />

                              <textarea placeholder="Tell us about your project" />

                                <div className="input_tag">
 
                                    {/* <input type="text" placeholder="Enter your email address"/> */}

                                    <button type="submit">Submit <Image src="/assets/img/right_arrow_icn.svg" alt="" width={24} height={24}/></button>

                                </div>

                          </form>
 
                      </div>

                  </div>

               </div>

            </div>

          </section>
        
        </>

    )

}