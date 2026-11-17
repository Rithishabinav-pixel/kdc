"use client";

import styles from "./contactus.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import PhoneInputTag from "../components/PhoneInputTag";

export default function products(){

    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [service, setService] = useState("");

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        // Name validation
        if (!name.trim()) {
            newErrors.name = "Please enter your name";
        }
        if (!designation.trim()) {
            newErrors.designation = "Please enter your designation";
        }

        if (!service.trim()) {
            newErrors.service = "Please select your service";
        }

        // Email validation
        if (!email.trim()) {
            newErrors.email = "Please enter your email";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email";
        }

        // Mobile validation
        if (!mobile.trim()) {
            newErrors.mobile = "Please enter mobile number";
        } else if (!/^[0-9]{10}$/.test(mobile)) {
            newErrors.mobile = "Enter a valid 10-digit mobile number";
        }

        setErrors(newErrors);

        // If no errors
        if (Object.keys(newErrors).length === 0) {
            alert("Form submitted successfully!");
        }
    };


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
                                    <li><Link href="https://www.instagram.com/kdc.one" target="_blank"><Image src="/assets/img/instagram-icon-i.svg" width={18} height={18} alt=""  /></Link></li>
                                    <li><Link href="https://www.linkedin.com/company/kdc-corporate" target="_blank"><Image src="/assets/img/Linked-in-i.svg" width={18} height={18} alt=""  /></Link></li>

                                  </ul>

                               </div>

                            </div>

                    </div>
                    <div className="col-md-12 col-lg-5 col-xl-5" data-aos="fade-left">

                        <div className="form_crd">

                            <h3 className="frm_titl">Tell Us About Yourself</h3>
                            
                            <form onSubmit={handleSubmit}>

                              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className={errors.name ? "input-error" : ""} />
                            

                              {/* <input type="text" placeholder="Company Name" /> */}

                              <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="Designation" className={errors.designation ? "input-error" : ""} />

                              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className={errors.email ? "input-error" : ""} /> 
                              

                              <PhoneInputTag value={mobile} onChange={(e) => setMobile(e.target.value)} className={errors.email ? "input-error" : ""}>
                                
                              </PhoneInputTag>
                              

                              

                              <select value={service} onChange={(e) => setService(e.target.value)} className={errors.service ? "input-error" : ""}>
                                    
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