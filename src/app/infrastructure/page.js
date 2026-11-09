"use client";


import Link from "next/link";
import styles from "./infrastructure.module.css";
import Image from "next/image";
import CountUp from "react-countup";
import Capabilities from "../components/Capabilities";
import GsapTitle from "../components/GsapTitle";

const capabilitiesData = [
    {
        id: 1,
        title: "Injection Moulding",
        description: "Precision-engineered packaging components designed to meet the functional and aesthetic requirements of beauty and personal care products.",
        img: "/assets/img/prd-img-1.webp", 
      },
      {
        id: 2,
        title: "Metallisation", 
        description: "Premium metallic finishes that enhance packaging appeal, adding depth, visual distinction and a refined look to beauty products.",
        img: "/assets/img/prd-img-2.webp",
      },
      {
        id: 3,
        title: "Screen Printing",
        description: "Packaging decoration that brings brand identities to life through clear graphics, precise detailing and consistent visual presentation.",
        img: "/assets/img/prd-img-3.webp",
      },
      {
        id: 4,
        title: "Hot Foil Stamping",
        description: "Distinctive foil accents that add a premium finish to cosmetic packaging, enhancing visual appeal through refined metallic detailing.",
        img: "/assets/img/prd-img-4.webp",
      },
      {
          id: 5,
          title: "Packaging Design and Engineering",
          description: "Global design expertise and engineering knowledge come together to develop packaging that balances aesthetics, functionality and manufacturing requirements.",
          img: "/assets/img/prd-img-5.webp",
      },
      {
        id: 6,
        title: "Formulation Innovation",
        description: "Formulation expertise and research capabilities support the development of skincare and haircare products shaped around evolving brand needs and consumer expectations.",
        img: "/assets/img/prd-img-3.webp",
      },
      {
        id: 7,
        title: "Product Development",
        description: "A connected approach to formulation and packaging helps brands translate product concepts into considered solutions, ready to progress towards manufacturing.",
        img: "/assets/img/prd-img-4.webp",
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

                        {/* <Link href="/contact-us" className="wht_btn"> <span>Contact Us</span> <Image src="/assets/img/blu-arr.svg" alt="" width={24} height={24}/></Link> */}
                    
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

                   <GsapTitle className="blk_cmmn_tit">
            
                   A New Beauty Manufacturing Platform in India. 

                    </GsapTitle>

                     

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

        {/* <section className={`common_spc ecru_wht pe-0 ps-0`} id="capability">

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

        </section> */}

        <section className={`common_spc pt-0 ${styles.cmn_section}`}>

          <div className="container p-0">

              <div className="row align-items-center justify-content-between">
 
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xxl-6" data-aos="fade-right">

                    <GsapTitle className="blk_cmmn_tit">
            
                    Building Beauty with Responsibility in Mind

                    </GsapTitle>

                     

                      <p>
                      As our Bhilad facility takes shape, we are building on the sustainability commitments and responsible business practices of our parent companies, kdc/one and Clarion Group. Their established approaches to environmental responsibility, governance and community development provide a foundation as we work towards defining our own priorities for responsible manufacturing and packaging. <br /> <br />

Our approach will continue to evolve as the facility develops. In the meantime, we are drawing on our parent companies’ experience to inform our approach to responsible manufacturing and packaging.
</p>

                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xxl-5">

                    <div className={styles.slr_img} data-aos="fade-up">

                       <Image src="/assets/img/solor_img.webp" alt="" width={620} height={620} />

                    </div>

                  </div>

              </div>

          </div>

        </section>

        
        </>

    )

}