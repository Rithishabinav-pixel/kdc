

import Link from "next/link";
import styles from "./innovation.module.css";
import Image from "next/image";
import GsapTitle from "../components/GsapTitle";


export default function innovation(){

    return(

        <>

        <section className={styles.innovtn_hro}>

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-sm-12 col-lg-5 col-xl-5 col-xxl-4" data-aos="fade-right">

                        <h1 className="bnr_titl">Bringing World Beauty Innovation Closer.</h1>

                        <p>Global beauty advancement, shaped by Asian insight. We bring together advanced formulations, elevated aesthetics, and precision manufacturing to create beauty products that embody quality and distinction.</p>

                        {/* <Link href="/contact-us" className="common_btn"> <span>Contact Us</span> <Image src="/assets/img/right_arrow_icn.svg" alt="Logo" width={24} height={24} /></Link> */}
                    
                    </div>

                    <div className="col-lg-7 col-xl-7 col-xxl-8 d-flex justify-content-center">

                        <div className={styles.innovation_mb_img}>

                             <Image src="/assets/img/innovation_bnr-mb.webp" width={884} height={540} alt=""/> 

                        </div>

                    </div>

                </div>

            </div>

        </section>

        <section className={`common_spc ${styles.idea_lfe}`}>

            <div className="container p-0">

                <div className="row justify-content-between">

                    <div className="col-sm-12 col-md-6 col-xl-5">

                        <div data-aos="fade-right">

                        <GsapTitle className="wht_cmmn_tit">
            
                        Where Brands Explore What’s Next in Beauty.

                        </GsapTitle>
                             
                           
                            
                            <p className="wht_txt width_cstom">
                            Our Mumbai showroom serves as a space for beauty discovery, showcasing refined packaging concepts, elevated finishes, and distinctive formats for your next launch.<br /><br />
Experience our collection firsthand, explore refined packaging possibilities with our team, and shape your next beauty launch with a distinct sense of identity.
                            </p>

                            

                        </div>

                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-7">

                      <Link href="#" className={styles.idea_main_crd} data-aos="fade-up"> 

                        <div className={styles.idea_crd}>

                            <div className={styles.idea_crd_img}>
                         
                               <Image src="/assets/img/idea-img.webp" width={456} height={549} alt="" />

                            </div>

                            <span>Mumbai Showroom <Image src="/assets/img/blu-arr.svg" alt="Logo" width={24} height={24} /></span> 

                        </div>

                        </Link>
                        
                    </div>

                </div>

            </div>

        </section>

        <section className={`common_spc ${styles.map_section}`}>

            <div className="container p-0">

                <div className="row justify-content-center">

                    <div className="col-sm-12 col-md-10 col-lg-8 col-xl-7">

                      <GsapTitle className="blk_cmmn_tit text-center" data-aos="fade-up">
            
                      Connected to Beauty Innovation Worldwide.

                        </GsapTitle>

                         <p className="text-center" data-aos="fade-up">Our Mumbai showroom connects brands to HCT packaging is the group of kdc/one’s international network, unlocking a considered selection of packaging concepts, refined finishes, and distinctive formats.</p>

                    </div>

                    <div className="col-lg-12">

                         <div className={styles.map_crd} data-aos="fade-up">

                              <Image src="/assets/img/map.svg" alt="" width={1538} height={753} />

                         </div>

                    </div>

                </div>

            </div>

        </section>
        
        </>
 
    )

}