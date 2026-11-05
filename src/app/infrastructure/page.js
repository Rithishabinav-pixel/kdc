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

                        <h1 className={`bnr_titl ${styles.clr_wht}`}>The Future of Beauty Packaging, Built in India. </h1>

                        <p className={styles.clr_wht}>
                        Our new Greenfield facility in Bhilad, Gujarat, will bring injection moulding, metallisation and advanced decoration capabilities to India’s beauty packaging industry.<br /><br />
                        With screen printing and hot foil stamping, the facility will support premium cosmetic packaging through specialised manufacturing processes and versatile decorative finishes.
                        </p>

                        <Link href="/contact-us" className="wht_btn"> <span>Contact Us</span> <Image src="/assets/img/blu-arr.svg" alt="" width={24} height={24}/></Link>
                    
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

                       <h2 className="blk_cmmn_tit" data-aos="fade-right">A New Beauty Manufacturing Platform in India. </h2>

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
                            The new Bhilad facility strengthens India’s beauty packaging manufacturing base, adding specialised capabilities for cosmetic components and high-quality surface decoration.<br /><br />
By integrating injection moulding, metallisation, screen printing and hot foil stamping, it will support packaging manufacturers and beauty brands with local production capabilities across component manufacturing, finishing and brand application.
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

        <section className={`common_spc ecru_wht pe-0 ps-0`} id="capability">

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

                      <h2 className="blk_cmmn_tit">Building Beauty with Responsibility in Mind </h2>

                      <p>
                      As our Bhilad facility takes shape, we are building on the sustainability commitments and responsible business practices of our parent companies, kdc/one and Clarion Group. Their established approaches to environmental responsibility, governance and community development provide a foundation as we work towards defining our own priorities for responsible manufacturing and packaging. <br /> <br />

Our approach will continue to evolve as the facility develops. In the meantime, we are drawing on our parent companies’ experience to inform our approach to responsible manufacturing and packaging.
</p>

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