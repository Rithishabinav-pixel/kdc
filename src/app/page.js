"use client"; 

import Image from "next/image";
// import styles from "./page.module.css";
import CountUp from "react-countup";
import Link from "next/link";
import CommonSwiper from "./components/CommonSwiper";
import Insights from "./components/Insights";
import PackageSwiper from "./components/PackageSwiper";
import { usePathname } from "next/navigation";
import Capabilities from "./components/Capabilities";


const ProductSlides = [
  {
   id:1,
   title: "Skincare",
   img: "/assets/img/skin_care_img.webp",
  },
  {
    id:2,
    title: "Colour Cosmetics",
    img: "/assets/img/color_cosmetics_img.webp",
   },
   {
    id:3,
    title: "Haircare",
    img: "/assets/img/sun_care_img.webp",
   },
   {
    id:4,
    title: "Sun care",
    img: "/assets/img/hair_care_img.webp",
   },
   {
    id: 5,
    title: "Personal Care",
    img: "/assets/img/personnal_care_img.webp",
   }
]

const Blogdata = [
  {
    id:1,
    title:"Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque.",
    img: "/assets/img/blog_img_one.webp",
  },
  {
    id:2,
    title:"Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque.",
    img: "/assets/img/blog_img_two.webp",
  },
  {
    id:3,
    title:"Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque.",
    img: "/assets/img/blog_img_three.webp",
  }
]

const capabilitiesData = [
  {
    id: 1,
    title: "Injection Moulding",
    description: "Precision moulding capabilities planned for the production of cosmetic packaging components with consistent form, fit and finish.",
    img: "/assets/img/prd-img-1.webp",
  },
  {
    id: 2,
    title: "Metallisation", 
    description: "Metallisation capabilities are planned to support premium metallic finishes that enhance shelf appeal and elevate the overall packaging experience.",
    img: "/assets/img/prd-img-2.webp",
  },
  {
    id: 3,
    title: "Screen Printing",
    description: "Screen printing will support branding, graphics and decorative applications on cosmetic packaging components.",
    img: "/assets/img/prd-img-3.webp",
  },
  {
    id: 4,
    title: "Hot Foil Stamping",
    description: "Hot foil stamping is planned to support premium metallic branding and decorative detailing.",
    img: "/assets/img/prd-img-4.webp",
  },
  {
      id: 5,
      title: "Packaging Design & Engineering",
      description: "Through the wider kdc/one and HCT packaging ecosystem, the partnership brings access to packaging design, development and engineering expertise.",
      img: "/assets/img/prd-img-5.webp",
  },
]




export default function Home() {


  return (

    <>


    <section className="slider_section">

      <div className="container">

        <div className="row justify-content-between align-items-end">

           <div className="col-sm-12 col-lg-6 col-xl-6 col-xxl-4">
  
                <div id="home_slider" className="carousel slide" data-bs-ride="carousel" data-aos="fade-up">

                  {/* Indicators */}

                  {/* <div className="carousel-indicators">

                    <button type="button" data-bs-target="#home_slider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>

                    <button type="button" data-bs-target="#home_slider" data-bs-slide-to="1" aria-label="Slide 2"></button>

                    <button type="button" data-bs-target="#home_slider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div> */}

                  {/* Slides */}

                  <div className="carousel-inner">

                    <div className="carousel-item active">

                       <h2 className="slider_caption">Beauty Innovation, Brought Closer to India. </h2>

                       <p>kdc/one’s global beauty expertise comes together with Clarion’s Indian manufacturing strength to bring beauty ideas closer to the market in India.</p>

                       <a href="#" className="common_btn"> <span>Start a Project</span> <Image src="/assets/img/right_arrow_icn.svg" alt="Arrow" width={24} height={24}/></a>

                    </div>

                    <div className="carousel-item">

                         <h2 className="slider_caption">Beauty Innovation, Brought Closer to India. </h2>

                         <p>kdc/one’s global beauty expertise comes together with Clarion’s Indian manufacturing strength to bring beauty ideas closer to the market in India.</p>

                         <a href="#" className="common_btn"> <span>Start a Project</span> <Image src="/assets/img/right_arrow_icn.svg" alt="Arrow" width={24} height={24}/></a>

                    </div>

                    <div className="carousel-item">

                          <h2 className="slider_caption">Beauty Innovation, Brought Closer to India. </h2>

                           <p>kdc/one’s global beauty expertise comes together with Clarion’s Indian manufacturing strength to bring beauty ideas closer to the market in India.</p>
 
                           <a href="#" className="common_btn"> <span>Start a Project</span> <Image src="/assets/img/right_arrow_icn.svg" alt="Arrow" width={24} height={24}/></a>

                    </div>

                  </div>

                  <button className="carousel-control-prev" type="button" data-bs-target="#home_slider" data-bs-slide="prev">

                  <Image src="/assets/img/left-arrw-icn.svg" alt="Arrow" width={24} height={24}/>

                  </button>

                  <button className="carousel-control-next" type="button" data-bs-target="#home_slider" data-bs-slide="next">
                   
                  <Image src="/assets/img/right-arrw-icn.svg" alt="Arrow" width={24} height={24}/>

                  </button>

                </div>

           </div>

           <div className="col-sm-12 col-lg-6 col-xl-6 col-xxl-7">
  
                <div className="slider_bnr">

                <Image src="/assets/img/hero-bnr-img.webp" alt="" width={800} height={834}/>

                </div>

           </div>

        </div>

      </div>      

    </section>

    {/* <section className="blue_marquee">

         <div className="marquee">

            <div className="marquee_inner">

               <p> <span> Indian Market Intelligence <Image src="/assets/img/clarion-fav.svg" alt="Logo" width={38} height={20}/> </span> <span> Formulation Expertise <Image src="/assets/img/clarion-fav.svg" alt="Logo" width={38} height={20}/> </span> <span> Advanced Packaging <Image src="/assets/img/clarion-fav.svg" alt="Logo" width={38} height={20}/> </span> <span> Scalable Manufacturing <Image src="/assets/img/clarion-fav.svg" alt="Logo" width={38} height={20}/> </span> <span> Quality-Led Delivery <Image src="/assets/img/clarion-fav.svg" alt="Logo" width={38} height={20}/> </span> <span> Scalable Manufacturing Quality-Led Delivery  <Image src="/assets/img/clarion-fav.svg" alt="Logo" width={38} height={20}/> </span> <span> Indian Market Intelligence <Image src="/assets/img/clarion-fav.svg" alt="Logo" width={38} height={20}/> </span> <span> Formulation Expertise <Image src="/assets/img/clarion-fav.svg" alt="Logo" width={38} height={20}/> </span> <span> Advanced Packaging <Image src="/assets/img/clarion-fav.svg" alt="Logo" width={38} height={20}/> </span> <span> Scalable Manufacturing <Image src="/assets/img/clarion-fav.svg" alt="Logo" width={38} height={20}/> </span> <span> Quality-Led Delivery <Image src="/assets/img/clarion-fav.svg" alt="Logo" width={38} height={20}/> </span> <span> Scalable Manufacturing Quality-Led Delivery  <Image src="/assets/img/clarion-fav.svg" alt="Logo" width={38} height={20}/> </span></p>

            </div>

          </div>

    </section> */}

    <section className="international_Expertise">

         <div className="container">

            <div className="row justify-content-between">

               <div className="col-lg-5">

                 <div data-aos="fade-up">
  
                       <h2 className="wht_cmmn_tit">International Expertise.<br /> Deep Indian Market Insight.</h2>

                       <a href="#" className="common_btn"> <span>Discover Our Partnership</span> <Image src="/assets/img/right_arrow_icn.svg" alt="Arrow" width={24} height={24}/></a>

                 </div>

               </div>

               <div className="col-lg-3">

                  <div className="cmmn_cnt mrg_tp_spc_one rltv" data-aos="fade-up"  data-aos-delay="100">

                     <Image src="/assets/img/arrow-one.svg" className="arrw_one" alt="Arrow" width={270} height={30}/>
                        
                      <p>From initial brief to final formula, we combine global formulation expertise with Indian market insight to create products shaped for performance, sensory experience, consistency and scale.</p>

                  </div>
                  
               </div>

               <div className="col-lg-3">

                   <div className="cmmn_cnt mrg_tp_spc_two rltv" data-aos="fade-left"  data-aos-delay="200">

                   <Image src="/assets/img/arrow-one.svg" className="arrw_two" alt="Arrow" width={270} height={30}/>
                        
                      <p>From first sketch to finished pack, kdc/one Clarion Beauty transforms ideas into high-impact packaging. Combining global expertise with advanced Indian manufacturing, we bring design, engineering, moulding, metallisation and decoration together under one roof. The result is packaging that protects every formula, elevates every brand and performs beautifully at scale.</p>

                  </div>

               </div>

            </div>


         </div>

    </section>

    <section className="counterSection common_spc" >

     <div className="container">

       <div className="row justify-content-center" data-aos="fade-up">

          <div className="col-sm-12 col-md-10 col-lg-8">

              <h2 className="blk_cmmn_tit text-center">The Scale Behind What We Make Possible.</h2>

          </div>

       </div>

       <div className="row justify-content-center" data-aos="fade-up">

         <div className="col-lg-10">

            <div className="posble_img">

            <Image src="/assets/img/possible_img.webp" alt="Arrow" width={1030} height={358}/>

            </div>

         </div>

       </div>

       <div className="row mt-3">

         <div className="col-6 col-md-6 col-lg-3 p-0" data-aos="fade-up">
          
         <h3>
            
            <CountUp end={65} duration={2} enableScrollSpy scrollSpyOnce={false}/> +

         </h3>

         <p>Combined Years of Expertise</p>      

         </div>

         <div className="col-6 col-md-6 col-lg-3 p-0" data-aos="fade-up" data-aos-delay="100">
          
         <h3>
            
            <CountUp  end={1000} duration={2} enableScrollSpy scrollSpyOnce={false}/> +

         </h3>

         <p>Global Brands Served</p>      

         </div>

         <div className="col-6 col-md-6 col-lg-3 p-0" data-aos="fade-up" data-aos-delay="200">
          
         <h3>
            
            <CountUp  end={10} duration={2} enableScrollSpy scrollSpyOnce={false}/> +

         </h3>

         <p>Clarion Manufacturing Locations</p>      

         </div>

         <div className="col-6 col-md-6 col-lg-3 p-0" data-aos="fade-up" data-aos-delay="300">
          
         <h3>
            
            <CountUp  end={2.5} duration={2} enableScrollSpy scrollSpyOnce={false}/> M+

         </h3>

         <p>Annual Capacity in Tonnes</p>      

         </div>
  
       </div>

     </div>
        

    </section>

    <section className="product_categories ecru_wht">

      <div className="row justify-content-center" data-aos="fade-up">

          <div className="col-sm-12 col-md-10 col-lg-7">

              <h2 className="blk_cmmn_tit text-center">Capabilities That Bring Beauty Packaging to Life.</h2>

          </div>

       </div>

       <div className="product_slider" data-aos="fade-up">
        
       <Capabilities CapData={capabilitiesData} />

      </div>  

    </section>

    {/* <section className="prtn">

      <div className="container">

        <div className="row justify-content-between">

            <div className="col-md-12 col-lg-5 col-xl-4">

              <div className="">

                <div data-aos="fade-up">

                      <h2 className="wht_cmmn_tit">What Would You Like to Create Next?</h2>

                      <a href="#" className="common_btn"> <span>Discover Our Partnership</span> <Image src="/assets/img/right_arrow_icn.svg" alt="Arrow" width={24} height={24}/></a>

                </div>
 
              </div>

            </div>

            <div className="col-md-12 col-lg-5 col-xl-4">

               <div className="prnt_marquee">

                   <div className="prnt_marquee_crd">

                        <div className="mrque_img">

                            <Image src="/assets/img/develop-img.svg" alt="" width={120} height={120}/>

                        </div>
                        <div className="mrque_cnt">
                          
                            <h4>Develop a New Formula</h4>

                            <p>Turn a product idea into a market-ready formulation through development support shaped around performance, sensorial experience and brand requirements.</p>

                             <Link href="#"> Learn more <Image src="/assets/img/blue-arr.svg" alt="" width={24} height={24}/></Link>

                        </div>

                   </div>

                   <div className="prnt_marquee_crd">

                        <div className="mrque_img">

                            <Image src="/assets/img/manufacture.svg" alt="" width={120} height={120}/>

                        </div>
                        <div className="mrque_cnt">
                          
                            <h4>Manufacture My Formula</h4>

                            <p>Bring an existing formula into production with validation, scale-up and manufacturing support focused on consistency, quality and repeatable performance.</p>

                            <Link href="#"> Learn more <Image src="/assets/img/blue-arr.svg" alt="" width={24} height={24}/></Link>

                        </div>

                    </div>

                    <div className="prnt_marquee_crd">

                        <div className="mrque_img">

                            <Image src="/assets/img/develop-img.svg" alt="" width={120} height={120}/>

                        </div>
                        <div className="mrque_cnt">
                          
                            <h4>Develop a New Formula</h4>

                            <p>Turn a product idea into a market-ready formulation through development support shaped around performance, sensorial experience and brand requirements.</p>

                             <Link href="#"> Learn more <Image src="/assets/img/blue-arr.svg" alt="" width={24} height={24}/></Link>

                        </div>

                    </div>

                     <div className="prnt_marquee_crd">

                          <div className="mrque_img">

                              <Image src="/assets/img/manufacture.svg" alt="" width={120} height={120}/>

                          </div>
                          <div className="mrque_cnt">
                            
                              <h4>Manufacture My Formula</h4>

                              <p>Bring an existing formula into production with validation, scale-up and manufacturing support focused on consistency, quality and repeatable performance.</p>

                              <Link href="#"> Learn more <Image src="/assets/img/blue-arr.svg" alt="" width={24} height={24}/></Link>

                          </div>

                     </div>

                     <div className="prnt_marquee_crd">

                        <div className="mrque_img">

                            <Image src="/assets/img/develop-img.svg" alt="" width={120} height={120}/>

                        </div>
                        <div className="mrque_cnt">
                          
                            <h4>Develop a New Formula</h4>

                            <p>Turn a product idea into a market-ready formulation through development support shaped around performance, sensorial experience and brand requirements.</p>

                             <Link href="#"> Learn more <Image src="/assets/img/blue-arr.svg" alt="" width={24} height={24}/></Link>

                        </div>

                    </div>
                    

               </div>

            </div>

        </div>


      </div>

    </section> */}

    <section className="global_thinking common_spc">

     <div className="container p-0">

          <div className="row justify-content-between">

            <div className="col-lg-5 col-xl-4">

              <div data-aos="fade-up">

                    <h2 className="blk_cmmn_tit">R&D That Brings Global Thinking Closer to India.</h2>

                    <Link href="#" className="common_btn"> <span>Discover Our Partnership</span> <Image src="/assets/img/right_arrow_icn.svg" alt="Arrow" width={24} height={24}/></Link>

              </div>

            </div>

            <div className="col-lg-4 d-flex flex-column-reverse">

              <div className="gt_spc_top" data-aos="fade-up" data-aos-delay="100">

                <p className="cmmn_txt"> Beauty products perform best when development begins with a clear understanding of the people and markets they are created for. By bringing global R&D and formulation knowledge together with insight into Indian consumers, climate and evolving preferences, we approach development with relevance from the start. From product performance and sensorial experience to formulation requirements and market readiness, innovation is considered with both local context and wider beauty standards in mind.</p>

              </div>

            </div>
        
          </div>

     </div>

    </section>

    <section className="product_categories ecru_wht">

      <div className="container p-0">

          <div className="row justify-content-center" data-aos="fade-up">

              <div className="col-sm-12 col-md-10 col-lg-8 p-0">

                  <h2 className="blk_cmmn_tit text-center">Beauty Across Categories, Made With Purpose.</h2>

              </div>

          </div>

          <div className="product_slider">

          <CommonSwiper slides={ProductSlides} />

          </div>  

      </div>

      

    </section>

    <section className="packaging_sliding" data-aos="fade-up">

      <div className="container p-0">

          <div className="row justify-content-center">

    <div className="col-sm-12 col-md-10 col-lg-7">

        <h2 className="blk_cmmn_tit text-center">Packaging That Performs Beyond First Impressions.</h2>

        <div className="two_btns">

            <a href="#" className="common_btn"> <span>Discover Our Partnership</span> <Image src="/assets/img/right_arrow_icn.svg" alt="Arrow" width={24} height={24}/></a>

            <a href="#" className="wht_btn"> <span>Discover Our Partnership</span> <Image src="/assets/img/blu-arr.svg" alt="Arrow" width={24} height={24}/></a>

        </div>

    </div>

          </div>

          <div className="row">

            <div className="col-lg-12">

              <div className="package_sliders">

                <PackageSwiper />

                </div>

            </div>

          </div>

      </div>

    </section>

    <section className="manufacturing_section">

         <div className="container p-0">

            <div className="row justify-content-between">

               <div className="col-md-10 col-lg-8 col-xl-4">

                 <div data-aos="fade-up">
  
                       <h2 className="wht_cmmn_tit">Manufacturing That Makes Progress Possible.</h2>

                        <p className="wht_txt">
                          
                          Our manufacturing approach brings quality, process control and scale into one connected setup. The Gujarat facility is designed to strengthen local packaging through injection moulding, metallisation, screen printing and hot-foil stamping. With a focus on consistency, control and reliable output, the infrastructure supports brands closer to market. <br /> <br />

                          It helps teams move from product development to commercial production with speed, confidence and flexibility, while keeping quality and repeatability at the centre of each stage, from first run to scale.
                          
                        </p>    

                        <Link href="#" className="common_btn"> <span>Discover Our Partnership</span> <Image src="/assets/img/right_arrow_icn.svg" alt="Arrow" width={24} height={24}/></Link>

                  </div>

               </div>

            </div>


         </div>

    </section>

    <section className="global_thiking common_spc">
 
       <div className="container p-0">

          <div className="row justify-content-center" data-aos="fade-up">

              <div className="col-lg-7">

                 <h2 className="blk_cmmn_tit text-center">Where Global Thinking Meets Local Execution.</h2>

                 <div className="d-flex justify-content-center">

                 <Link href="#" className="common_btn"> <span>Why Partner With Us</span> <Image src="/assets/img/right_arrow_icn.svg" alt="Arrow" width={24} height={24}/></Link>

                 </div>

              </div>

          </div>

          <div className="row mt-5 justify-content-between align-items-end">

            <div className="col-lg-12 col-xl-3" data-aos="fade-right">

                <div className="mbl_vw">

                    <div className="d-flex gap-4 mbl_revr tps_spc">

                      <div className="glb_crd_cnt">

                          <h4>Global Insight. <br /> Local Relevance.</h4>

                          <p>Global beauty knowledge meets Indian market understanding to shape products with stronger local relevance.</p>

                      </div>
                      <div className="glb_crd_img">

                        <Image src="/assets/img/dot.svg" alt="Arrow" width={24} height={24}/>

                      </div>

                    </div>

                    <div className="d-flex gap-4 mbl_revr tps_spc">

                    <div className="glb_crd_cnt">

                        <h4>Connected from <br /> Formula to Pack.</h4>

                        <p>Formulation, packaging and manufacturing connect to give brands a clearer path from idea to scale.</p>

                    </div>
                    <div className="glb_crd_img">

                      <Image src="/assets/img/dot.svg" alt="Arrow" width={24} height={24}/>

                    </div>

                    </div>

                </div>

                 
               
            </div>

            <div className="col-lg-12 col-xl-5" data-aos="fade-up">
              
              <div className="cnt_img">

               <Image src="/assets/img/ell-img-nw.webp" alt="Arrow" width={670} height={583}/>    

              </div>

            </div>

            <div className="col-lg-12 col-xl-3" data-aos="fade-left">

              <div className="mbl_vw">


                  <div className="d-flex flex-row-reverse gap-4 tps_spc">

                        <div className="glb_crd_cnt">

                            <h4>Closer to the <br /> Market.</h4>

                            <p>Indian manufacturing brings production closer to market, supporting greater speed, flexibility and supply resilience.</p>

                        </div>
                        <div className="glb_crd_img">

                          <Image src="/assets/img/dot.svg" alt="Arrow" width={24} height={24}/>
                        
                        </div>

                   </div>

                  <div className="d-flex flex-row-reverse gap-4 tps_spc">

                  <div className="glb_crd_cnt">

                      <h4>Quality That Holds <br />at Scale.</h4>

                      <p>Quality, process control and scalable production help brands maintain consistency as volumes and markets grow.</p>

                  </div>
                  <div className="glb_crd_img">

                    <Image src="/assets/img/dot.svg" alt="Arrow" width={24} height={24}/>
                  
                  </div>

                  </div>

              </div>

            </div>

          </div>

       </div>

    </section>

    {/* <section className="insights_section common_spc ecru_wht">
   
      <div className="container p-0">

          <div className="row justify-content-center" data-aos="fade-up">

                  <div className="col-sm-12 col-md-12 col-lg-7">

                    <h2 className="blk_cmmn_tit text-center">Stories, Insights and Work Behind Better Products.</h2>

                  </div>

          </div>

          <div className="row">

           <Insights datas={Blogdata} />

          </div>

      </div>

    </section> */}

    {/* <section className="faq common_spc">
 
        <div className="container">

          <div className="row justify-content-center" data-aos="fade-up">

              <div className="col-sm-12 col-md-12 col-lg-12">

                <h2 className="blk_cmmn_tit text-center">Frequently asked questions</h2>

              </div>

              <div className="col-xl-8 p-0 mt-3">

                  <div className="faq_tabs">

                    
                      <ul className="nav nav-tabs" id="myTab" role="tablist">

                        <li className="nav-item" role="presentation">

                          <button className="nav-link active" id="clarion-tab" data-bs-toggle="tab" data-bs-target="#Clarion" type="button" role="tab">
                            kdc/one Clarion
                          </button>

                        </li>

                        <li className="nav-item" role="presentation">

                          <button className="nav-link" id="formula-tab" data-bs-toggle="tab" data-bs-target="#Formula" type="button" role="tab">
                            Formula
                          </button>

                        </li>

                        <li className="nav-item" role="presentation">

                          <button className="nav-link" id="specifications-tab" data-bs-toggle="tab" data-bs-target="#Specifications" type="button" role="tab">
                          Specifications
                          </button>

                        </li>

                        <li className="nav-item" role="presentation">

                          <button className="nav-link" id="location-tab" data-bs-toggle="tab" data-bs-target="#Location" type="button" role="tab">
                          Location
                          </button>

                        </li>

                      </ul>

                      
                      <div className="tab-content mt-3">

                        <div className="tab-pane fade show active" id="Clarion" role="tabpanel">
                          
                              <div className="accordion" id="myAccordion">

                                    
                                    <div className="accordion-item">

                                      <h2 className="accordion-header" id="headingOne">

                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?  
                                        </button>

                                      </h2>

                                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#myAccordion">

                                        <div className="accordion-body">
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                        </div>

                                      </div>

                                    </div>

                                    
                                    <div className="accordion-item">

                                      <h2 className="accordion-header" id="headingTwo">

                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          Ut labore et dolore magna aliqua. Ut enim?
                                        </button>

                                      </h2>

                                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#myAccordion">

                                        <div className="accordion-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                        </div>

                                      </div>

                                    </div>

                                    
                                    <div className="accordion-item">

                                      <h2 className="accordion-header" id="headingThree">

                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex?
                                        </button>

                                      </h2>

                                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#myAccordion">

                                        <div className="accordion-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                        </div>

                                      </div>

                                    </div>

                              </div>

                        </div>

                        <div className="tab-pane fade" id="Formula" role="tabpanel">

                          <h3>Formula</h3>
                  
                        </div>

                        <div className="tab-pane fade" id="Specifications" role="tabpanel">

                          <h3>Specifications</h3>
                         
                        </div>

                        <div className="tab-pane fade" id="Location" role="tabpanel">

                          <h3>Location</h3>
                          
                        </div>

                      </div>

                  </div>

              </div>

          </div>

          

        </div>

    </section> */}

  
</>
    
    
  );
}
