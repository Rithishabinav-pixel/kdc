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

         <section className={`common_spc ${styles.prdt_care}`}>

            <div className="container p-0">

                <div className="row">

                  <div className="col-xl-12">

                     <h2 ref={careTitle} className="blk_cmmn_tit">Precision-moulded and decorated packaging components, produced in India.</h2>

                  </div>

                </div>

                <div className="row mt-3">

                  {/* <div className="col-xl-4" data-aos="fade-up">

                    <div className={styles.care_crd}>

                         <div className={styles.care_crd_cnt}>

                              <h3>Colour Cosmetics</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                         </div>
                         <div className={styles.care_crd_img}>

                                <Image src="/assets/img/color_cosmetics_cc_img.webp" alt="" width={359} height={322}/>

                         </div>

                    </div>

                  </div> */}

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

                          <h2 className={styles.pac_for_txt} data-aos="fade-up">Packaging & Formulation</h2>

                      </div>

                </div> 
 
            </div>

         </section> 

          <section className={`common_spc ${styles.get_in_touch} pt-0`}>

            <div className="container p-0">

               <div className="row justify-content-between">

                  <div className="col-xl-6" data-aos="fade-right">
                    
                  <GsapTitle className="blk_cmmn_tit">
            
                  Let’s Create What’s Next in Beauty

                 </GsapTitle>


                      <p>If you are developing a new beauty product, exploring premium packaging, our team is ready to start the conversation.</p>

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