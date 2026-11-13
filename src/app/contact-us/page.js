
import styles from "./contactus.module.css";
import Image from "next/image";
import Link from "next/link";
import PhoneInputTag from "../components/PhoneInputTag";

export default function products(){

    return(

        <>
   
        <section className={`common_spc ${styles.cont_hro}`}>

            <div className="container"> 

                <div className="row justify-content-between">

                    <div className="col-md-12 col-lg-6 col-xl-6" data-aos="fade-right">
                        
                        
                        <h2 className="blk_cmmn_tit">Let’s Bring Your Beauty Vision To Life </h2>

                         <p>Whether you’re developing a new beauty product or refining an existing range, we bring formulation, packaging and manufacturing expertise to help move your project forward.<br /> <br />
Share your requirements with us, and our team will connect with you to explore the right solutions for your brand.</p>


                            <div className={styles.social_info}>

                                 <h3>Contact Info</h3>

                               <div className={styles.addr_txt}>

                                    <Image src="/assets/img/call.svg" alt="" width={24} height={24} />  

                                    <Link href="tel:912269360666">+91-22-6936 0666</Link>

                               </div>

                               <div className={styles.addr_txt}>

                                    <Image src="/assets/img/sms.svg" alt="" width={24} height={24} />  

                                    <Link href="mailto:marketing@kdconeclarion.com">marketing@kdconeclarion.com</Link>

                               </div> 

                               <div className={styles.addr_txt}>

                                    <Image src="/assets/img/location.svg" alt="" width={24} height={24} />  

                                    <p>801, Filix Condominium,<br />L B S Marg, Bhandup (West),<br /> Mumbai - 400 078</p>

                               </div>

                               <div className={styles.social_icn}>

                                  <ul>

                                    {/* <li><Image src="/assets/img/facebook-i.svg" width={20} height={20} alt="" /></li>
                                    <li><Image src="/assets/img/twitter-i.svg" width={14} height={12} alt=""  /></li> */}
                                    <li><Image src="/assets/img/instagram-icon-i.svg" width={18} height={18} alt=""  /></li>
                                    <li><Image src="/assets/img/Linked-in-i.svg" width={18} height={18} alt=""  /></li>

                                  </ul>

                               </div>

                            </div>

                    </div>
                    <div className="col-md-12 col-lg-5 col-xl-5" data-aos="fade-left">

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