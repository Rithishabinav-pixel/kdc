"use client";

import Link from "next/link";
import styles from "./about.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";
import GsapTitle from "../components/GsapTitle";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function About() {

  const scrollTitleOne = useRef(null);

  const scrollTitleTwo = useRef(null);

  // const title = useRef(null);
  
  // const [state,setState] = useState("rajesh");


  // useGSAP(() => {
  //   gsap.from(title.current, {
  //     y: 300,
  //     opacity: 1,
  //     duration: 2,
  //   });
  // }, []);


   useGSAP(() => {

    const split = new SplitText(scrollTitleOne.current, {
      type: "words",
    });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", () => {

      gsap.fromTo(
        // scrollTitleOne.current,
        split.words,
        { opacity: 0.05},
        {
          opacity: 1,
          stagger: 0.3,
          duration: 1,
          scrollTrigger: {
            trigger: scrollTitleOne.current,
            start: "top 70%",
            end: "top 40%",
            scrub: true,
            // markers: true,
            // pin: true,
          }
        }
      );

    })

    return () => mm.revert();
    
  }, []);

  useGSAP(() => {

    const mm = gsap.matchMedia();

    gsap.registerPlugin(ScrollTrigger, SplitText);

    const split = new SplitText(scrollTitleTwo.current, {
      type: "words",
    });

    mm.add("(min-width: 1200px)", () => {

      gsap.fromTo(

        split.words,
        {
          opacity:0.05
        },
        {
          opacity: 1,
          stagger: 0.3,
          duration: 1,
          scrollTrigger: {
            trigger: scrollTitleTwo.current,
            start: "top 70%",
            end: "top 20%",
            scrub: true,
          }
        }
  
        
      )

    })

    return () => mm.revert();


  }, []);



  // useEffect(()=>{
  //   console.log("inital")
  // },[state])

  // useEffect(() => {

  //   console.log("component Loaded")

  // }, [])

 
    return (

    <>  
      
    

      <section className={styles.abt_hero}>

        <div className="container relative">

          <div className="row align-items-center">

              <div className="col-xl-6">

                <div className={styles.hero_cnt} data-aos="fade-right">

                    <h1 className={`bnr_titl ${styles.clr_wht}`}>

                    Two Legacies. One Future in Beauty.

                    </h1>
                    

                    <p className="txt mt-3 width_cstom">

                    kdc/one and Clarion have joined forces, combining global innovation and packaging expertise with decades of Indian manufacturing excellence. <br /> <br />
                    Built on complementary strengths in formulation, product development, packaging design and manufacturing, this partnership aims to create new possibilities for beauty and personal care brands through innovative solutions, uncompromising quality and scalable capabilities.

                    </p>

                    {/* <Link href="/contact-us" className="common_btn mt-4"> <span>Contact Us</span> <Image src="/assets/img/right_arrow_icn.svg" alt="" width={24} height={24}/></Link> */}

                </div>

              

              </div>
              <div className="col-xl-6">

                <div className={styles.abt_bnr_img} data-aos="fade-left">

                  <Image src="/assets/img/abt_hero_img.svg" width={896} height={748} alt="" />

                </div>
                
              </div>

          </div>

        </div>

      </section>

      <section className={`common_spc ${styles.strgt}`}>

         <div className="container p-0">

             <div className="row p-0">
 
                <div className="col-lg-12 col-xl-6">

                <GsapTitle className="blk_cmmn_tit">
            
                   {/* Two Strengths. <br />One Beauty Partner. */}

                   Complementary Strengths. Shared Vision.

                </GsapTitle>

                   <p className={styles.strgt_txt}>
                  
                   Bringing world-class beauty innovation and packaging expertise together with Asian manufacturing capabilities to create premium, Made in India solutions for beauty brands.

                   </p>

                </div>

             </div>

             <div className={`row ${styles.top_mrgn}`} >

                <div className="col-xl-3">

                   <div className={`${styles.spc_tp_th} ${styles.strgt_crd}`} data-aos="fade-right">

                     <h3>
                     kdc/one – Global Innovation and Beauty Expertise
                     </h3>

                     <p>
                     kdc/one brings world-class expertise in beauty innovation, formulation development, packaging design and engineering, supported by an extensive global formulation library and advanced R&D capabilities. Its integrated approach combines technical excellence, creative innovation and deep category knowledge to deliver differentiated solutions for beauty and personal care brands worldwide.
                     </p>

                   </div>

                </div>
                <div className="col-xl-6">

                  <div data-aos="fade-up">
 
                    <Image src="/assets/img/strgt-img.webp" width={924} height={857} alt="" />

                  </div>
                  
                </div>
                <div className="col-xl-3">

                    <div className={`${styles.spc_tp_h} ${styles.strgt_crd}`} data-aos="fade-left">

                        <h3>
                        Clarion – Indian Manufacturing Excellence and Market Expertise
                        </h3>

                        <p>
                        Clarion Group brings over three decades of manufacturing experience, with established capabilities across beauty and personal care categories, serving leading Indian and multinational brands. Its deep understanding of the Indian market, formulation expertise and proven manufacturing capabilities provide a strong foundation for quality, flexibility and scalable production.
                        </p>

                    </div>

                </div>

             </div>

         </div>

      </section>

      <section className={`common_spc ${styles.cametgthr}`}>

          <div className="container p-0">

            <div className="row p-0">

              <div className="col-lg-12 col-xl-6" data-aos="fade-up">

              <GsapTitle className="wht_cmmn_tit">
            
                Why Beauty Brands Partner With Us.

              </GsapTitle>


                  <p className={`wht_txt ${styles.wht_txt}`}>
                
                  Beauty brands need more than individual capabilities; they need the right expertise working in sync. This partnership brings formulation, packaging and manufacturing closer together, helping turn promising ideas into distinctive beauty products made in India.


                  </p>

              </div>

            </div>

            <div className="row mt-5">

               <div className="col-12 col-sm-6 col-lg-4 col-xl-4" data-aos="fade-up">

                  <div className={styles.come_crd}>

                     <Image src="/assets/img/global-icn.png" alt="" width={80} height={80} />

                     <h4>Global Expertise in Packaging Design and Engineering
</h4>

                  </div>

               </div>
               <div className="col-12 col-sm-6 col-lg-4 col-xl-4" data-aos="fade-up" data-aos-delay="100">
                   
                  <div className={styles.come_crd}>

                      <Image src="/assets/img/high-touch-icn.svg" alt="" width={80} height={80} />

                      <h4>World-Class Skincare and Haircare Formulation Capabilities</h4>

                   </div>
 
               </div>
               <div className="col-12 col-sm-6 col-lg-4 col-xl-4" data-aos="fade-up" data-aos-delay="200">

                  <div className={styles.come_crd}>

                      <Image src="/assets/img/skin-care-icn.svg" alt="" width={80} height={80} />

                      <h4>Established Indian Manufacturing, Blending and Filling Expertise
</h4>

                   </div>

               </div>
               <div className="col-12 col-sm-6 col-lg-4 col-xl-4" data-aos="fade-up" data-aos-delay="300">

                   <div className={styles.come_crd}>

                      <Image src="/assets/img/local-icn.svg" alt="" width={80} height={80} />

                      <h4>Solutions Tailored to Indian and Asian Market Needs
</h4>

                    </div>

               </div>
               <div className="col-12 col-sm-6 col-lg-4 col-xl-4" data-aos="fade-up" data-aos-delay="400">

                <div className={styles.come_crd}>

                    <Image src="/assets/img/solution-icn.svg" alt="" width={80} height={80} />

                    <h4>Premium Beauty Packaging Capabilities Being Developed in India
</h4>

                </div>

               </div>
               {/* <div className="col-12 col-sm-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="500">

                 <div className={styles.come_crd}>

                  <Image src="/assets/img/premium-icn.svg" alt="" width={80} height={80} />

                  <h4>Premium beauty packaging developed and manufactured in India</h4>

                 </div>

               </div> */}

            </div>

          </div>  

      </section>

      <section className={`common_spc ${styles.vision_mission}`}>

        <div className="container">

           <div className="row">

               <div className="col-xl-12 p-0">
 
                  <p className={styles.small_txt}>Our Vision</p>

                  <h2 ref={scrollTitleTwo}>To shape the future of beauty and personal care in India through globally inspired innovation rooted in local insight.</h2>

               </div>

               <div className="col-xl-6 p-0">

                  <div className={styles.top_vs_spc}>

                       <p className={styles.small_txt}>Our Mission</p>

                       <h2 ref={scrollTitleOne} className={styles.scroll_title}>To empower brands with globally informed, locally relevant beauty solutions spanning formulation, packaging development and scalable manufacturing.</h2>

                  </div>
 
                  
               </div>

           </div>

        </div>

      </section>
      
      {/* <section className={`common_spc ${styles.idea_section} ${styles.gry_wht_bg}`}>
   
         <div className="container p-0">

            <div className="row justify-content-center">

               <div className="col-sm-12 col-md-10 col-lg-7 col-xl-7">

               <GsapTitle className="blk_cmmn_tit text-center">
            
               Turning Ideas Into Market Ready Beauty.
 
                </GsapTitle>

               </div>

            </div>

         </div>
       
         <div className={styles.idea_prds}>

              <div className={styles.idea_lst} data-aos="fade-left" data-aos-delay="1000">

               </div>
               <div className={styles.idea_lst} data-aos="fade-left" data-aos-delay="800">

               </div>
               <div className={styles.idea_lst} data-aos="fade-left" data-aos-delay="600">

               </div>
               <div className={styles.idea_lst} data-aos="fade-left" data-aos-delay="400">

               </div>
               <div className={styles.idea_lst} data-aos="fade-left" data-aos-delay="200">

               </div>
               <div className={styles.idea_lst} data-aos="fade-left">

              </div>

         </div>

         <div className={styles.lne_cd}>

           <div className="container">

              <div className="row">

                 <div className="col-sm-2 col-md-2 col-xl-2">

                     <div className={styles.lne_lst}>

                         <Image src="/assets/img/dot-icn.svg" alt="" data-aos="zoom-in" width={20} height={20} />
                          
                         <p data-aos="fade-up">Idea</p>  

                     </div>

                 </div>
                 <div className="col-sm-2 col-md-2 col-xl-2">

                    <div className={styles.lne_lst} >

                      <Image src="/assets/img/dot-icn.svg" alt="" data-aos="zoom-in" data-aos-delay="200" width={20} height={20} />
                      
                      <p data-aos="fade-up" data-aos-delay="200">Development</p>  

                      </div>

                 </div>
                 <div className="col-sm-2 col-md-2 col-xl-2">

                    <div className={styles.lne_lst} >

                      <Image src="/assets/img/dot-icn.svg" alt="" data-aos="zoom-in" data-aos-delay="400" width={20} height={20} />
                      
                      <p data-aos="fade-up" data-aos-delay="400">Customization</p>  

                      </div>

                 </div>
                 <div className="col-sm-2 col-md-2 col-xl-2">

                     <div className={styles.lne_lst} >

                         <Image src="/assets/img/dot-icn.svg" alt="" data-aos="zoom-in" data-aos-delay="600" width={20} height={20} />
                          
                         <p data-aos="fade-up" data-aos-delay="600">Manufacturing</p>  

                     </div>

                 </div>
                 <div className="col-sm-2 col-md-2 col-xl-2">

                    <div className={styles.lne_lst} >

                      <Image src="/assets/img/dot-icn.svg" alt="" data-aos="zoom-in" data-aos-delay="800" width={20} height={20} />
                      
                      <p data-aos="fade-up" data-aos-delay="800">Packaging</p>  

                      </div>

                 </div>
                 <div className="col-sm-2 col-md-2 col-xl-2">

                    <div className={styles.lne_lst} >

                      <Image src="/assets/img/dot-icn.svg" alt="" data-aos="zoom-in" data-aos-delay="1000" width={20} height={20} />
                      
                      <p data-aos="fade-up" data-aos-delay="1000">Market</p>  

                    </div>

                 </div>

              </div>

           </div>

         </div>


      </section> */}

      
    
    </>

      

      
    );
}