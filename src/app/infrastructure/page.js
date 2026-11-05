"use client";


import Link from "next/link";
import styles from "./infrastructure.module.css";
import Image from "next/image";
import CountUp from "react-countup";
import Capabilities from "../components/Capabilities";

const capabilitiesData = [
    {
      id: 1,
      title: "Injection Moulding",
      description: "Precision moulding capabilities planned for the production of cosmetic packaging components with consistent form, fit and finish.",
      img: "/assets/img/skin_care_img.webp",
    },
    {
      id: 2,
      title: "Metallisation", 
      description: "Metallisation capabilities are planned to support premium metallic finishes that enhance shelf appeal and elevate the overall packaging experience.",
      img: "/assets/img/color_cosmetics_img.webp",
    },
    {
      id: 3,
      title: "Screen Printing",
      description: "Screen printing will support branding, graphics and decorative applications on cosmetic packaging components.",
      img: "/assets/img/sun_care_img.webp",
    },
    {
      id: 4,
      title: "Hot Foil Stamping",
      description: "Hot foil stamping is planned to support premium metallic branding and decorative detailing.",
      img: "/assets/img/hair_care_img.webp",
    },
    {
        id: 5,
        title: "Packaging Design & Engineering",
        description: "Through the wider kdc/one and HCT packaging ecosystem, the partnership brings access to packaging design, development and engineering expertise.",
        img: "/assets/img/personnal_care_img.webp",
    },
]

export default function infrastructure() { 

    return (

        <>
        
        <section className={styles.infrst_hro}>

            <div className="container">

                <div className="row align-items-center justify-content-between">

                    <div className="col-sm-12 col-lg-5 col-xl-5 col-xxl-5" data-aos="fade-right">

                        <h1 className={`bnr_titl ${styles.clr_wht}`}>Building the Future of Beauty Packaging in India.</h1>

                        <p className={styles.clr_wht}>
                           kdc/one Clarion Beauty is developing a new greenfield manufacturing facility in Bhilad, Gujarat, created to bring premium beauty packaging capabilities closer to brands in India.<br /><br />
                           Designed around advanced packaging technologies, global engineering expertise and local manufacturing strength, the facility represents the next step in our vision to create world-class beauty solutions from India.
                        </p>

                        <Link href="#" className="wht_btn"> <span>Contact Us</span> <Image src="/assets/img/blu-arr.svg" alt="" width={24} height={24}/></Link>
                    
                    </div>

                    <div className="col-sm-12 col-lg-5 col-xxl-5">

                       <div className={styles.infrst_hro_img} data-aos="fade-left">

                             <Image src="/assets/img/infrastructure_img.webp" alt="" width={767} height={669} />

                       </div>

                    </div>

                </div>

            </div>

        </section>

        <section className={`common_spc ${styles.mnft}`}>
     
            <div className="container p-0">

                <div className="row p-0">

                   <div className="col-xxl-6">

                       <h2 className="blk_cmmn_tit" data-aos="fade-right">A New <br /> Manufacturing Platform for Beauty</h2>

                   </div>

                </div>

                <div className="row justify-content-between align-items-center p-0">

                     <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">

                        <div className={styles.mnft_img} data-aos="fade-right">

                            <Image src="/assets/img/mnft-img.webp" alt="" width={747} height={498} />

                        </div>

                     </div>
                     <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-5">

                        <div className={styles.mnft_cnt}>

                            <p data-aos="fade-up">
                                The Bhilad facility is being developed as a dedicated beauty packaging manufacturing unit with a focus on premium cosmetic and personal care packaging.<br /><br />
                                The new unit is planned to support advanced manufacturing and decoration processes while drawing on the packaging design and engineering expertise of the wider kdc/one and HCT ecosystem.
                            </p>

                             <div className={styles.mnft_cuntr}>

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

                             </div>
                        
                        </div>
                        
                     </div>

                </div>

            </div>

        </section>

        <section className={`common_spc ecru_wht pe-0 ps-0`}>

           <div className="container">

              <div className="row justify-content-center">

                 <div className="col-sm-10 col-md-10 col-lg-10 col-xxl-7">
  
                     <h2 className="blk_cmmn_tit text-center" data-aos="fade-up">Core Manufacturing Capabilities</h2>

                 </div>
                 
              </div>

           </div>

           <div className="container-fluid p-0">

             <Capabilities CapData={capabilitiesData} />

           </div>

        </section>

        <section className={`common_spc ${styles.cmn_section}`}>

          <div className="container">

              <div className="row align-items-center justify-content-between">
 
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xxl-6">

                      <h2 className="blk_cmmn_tit">Lorem ipsum dolor<br /> sit consectetur</h2>

                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.<br /><br />
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.</p>

                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xxl-5">

                    <div className={styles.slr_img}>

                       <Image src="/assets/img/solor_img.webp" alt="" width={620} height={620} />

                    </div>

                  </div>

              </div>

          </div>

        </section>

        
        </>

    )

}