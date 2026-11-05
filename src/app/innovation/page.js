

import Link from "next/link";
import styles from "./innovation.module.css";
import Image from "next/image";


export default function innovation(){

    return(

        <>

        <section className={styles.innovtn_hro}>

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-sm-12 col-lg-5 col-xl-5 col-xxl-4" data-aos="fade-right">

                        <h1 className="bnr_titl">Global Beauty Thinking. Closer to India.</h1>

                        <p>Innovation at kdc/one Clarion Beauty brings together international beauty trends, advanced packaging engineering and a deep understanding of Indian consumer preferences and market needs.</p>

                        <Link href="#" className="common_btn"> <span>Contact Us</span> <Image src="/assets/img/right_arrow_icn.svg" alt="Logo" width={24} height={24} /></Link>
                    
                    </div>

                    <div className="col-lg-7 col-xl-7 col-xxl-8 d-flex justify-content-center">

                        

                    </div>

                </div>

            </div>

        </section>

        <section className={`common_spc ${styles.idea_lfe}`}>

            <div className="container">

                <div className="row justify-content-between">

                    <div className="col-sm-12 col-md-6 col-xl-4">

                        <div data-aos="fade-right">
                             
                            <h2 className="wht_cmmn_tit">Where Ideas Come to Life</h2>
                            
                            <p className="wht_txt">
                            Our Mumbai showroom serves as a collaborative space where customers can explore beauty concepts, packaging directions and formulation possibilities.<br /><br />
                            It creates an environment for brands and our teams to come together, exchange ideas and discover new opportunities across beauty and personal care.
                            </p>

                            <Link href="#" className="common_btn"> <span>Request a Showroom Visit</span> <Image src="/assets/img/right_arrow_icn.svg" alt="Logo" width={24} height={24} /></Link>

                        </div>

                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-7">

                        <div className={styles.idea_crd} data-aos="fade-up">

                            <Image className={styles.idea_crd_img} src="/assets/img/idea-img.webp" width={456} height={549} alt="" />

                            <Link href="#"> <span>Mumbai Showroom</span> <Image src="/assets/img/blu-arr.svg" alt="Logo" width={24} height={24} /></Link>

                        </div>
                        
                    </div>

                </div>

            </div>

        </section>

        <section className={`common_spc ${styles.map_section}`}>

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-sm-12 col-md-10 col-lg-8 col-xl-7">

                         <h2 className="blk_cmmn_tit text-center" data-aos="fade-up">Connected to Beauty Innovation Worldwide.</h2>

                         <p className="text-center" data-aos="fade-up">Our Mumbai showroom connects brands to HCT by kdc/one’s international network, unlocking a considered selection of packaging concepts, refined finishes, and distinctive formats.</p>

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