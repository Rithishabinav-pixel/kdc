

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

                        <h1 className="bnr_titl">Bringing Global Beauty Innovation Closer to India.</h1>

                        <p>Combining world-class beauty innovation, advanced formulation expertise and sophisticated packaging design with deep Asian market insights and established Indian manufacturing capabilities. Together, these strengths create new possibilities for distinctive, high-quality beauty and personal care solutions.</p>

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
            
                        Discover What's Next in Beauty.

                        </GsapTitle>
                             
                           
                            
                            <p className="wht_txt width_cstom">
                           Our Mumbai showroom offers an inspiring space to explore innovative beauty packaging solutions, showcasing sophisticated designs, premium finishes and distinctive formats tailored to evolving market trends.<br/><br/>
                           Experience our extensive packaging collection firsthand, engage with our team of experts and discover possibilities that bring together aesthetics, functionality and convenience to create a distinctive identity for your brand.

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
            
                      A Global Beauty Partner for Your Next Innovation.

                        </GsapTitle>

                         <p className="text-center" data-aos="fade-up">Our Mumbai showroom connects beauty brands with the global expertise of the kdc/one group, offering a curated selection of innovative packaging concepts, refined finishes, and distinctive formats to bring their brand vision to life.</p>

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