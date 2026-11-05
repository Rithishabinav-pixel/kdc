"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const tranparentNav = [
   "/about",
   "/infrastructure"
]


export default function Header(){

   const pathname = usePathname();

   const [isopen, setIsopen] = useState(false);

  

    return (


      <>
    
       <header className={tranparentNav.includes(pathname)?"transparent":""}>

         {/* <div className="marquee_ln">

            <marquee>

               <p> <span>New Gujarat manufacturing facility / Event / Innovation announcement <a href="#"> Learn More <i className="bi bi-arrow-right"></i></a> <Image className="line_img" src="assets/img/line-icn.svg" alt="Next.js logo" width={2} height={22}/> </span> <span>New Gujarat manufacturing facility / Event / Innovation announcement <a href="#"> Learn More <i className="bi bi-arrow-right"></i></a> <Image className="line_img" src="assets/img/line-icn.svg" alt="Next.js logo" width={2} height={22}/> </span> <span>New Gujarat manufacturing facility / Event / Innovation announcement <a href="#"> Learn More <i className="bi bi-arrow-right"></i></a> <Image className="line_img" src="assets/img/line-icn.svg" alt="Next.js logo" width={2} height={22}/> </span> <span>New Gujarat manufacturing facility / Event / Innovation announcement <a href="#"> Learn More <i className="bi bi-arrow-right"></i></a> </span> </p>

            </marquee>

            <div className="marquee">

               <div className="marquee_inner">
 
               <p> <span>New Gujarat manufacturing facility / Event / Innovation announcement <a href="#"> Learn More <i className="bi bi-arrow-right"></i></a> <Image className="line_img" src="assets/img/line-icn.svg" alt="Next.js logo" width={2} height={22}/> </span> <span>New Gujarat manufacturing facility / Event / Innovation announcement <a href="#"> Learn More <i className="bi bi-arrow-right"></i></a> <Image className="line_img" src="assets/img/line-icn.svg" alt="Next.js logo" width={2} height={22}/> </span> <span>New Gujarat manufacturing facility / Event / Innovation announcement <a href="#"> Learn More <i className="bi bi-arrow-right"></i></a> <Image className="line_img" src="assets/img/line-icn.svg" alt="Next.js logo" width={2} height={22}/> </span> <span>New Gujarat manufacturing facility / Event / Innovation announcement <a href="#"> Learn More <i className="bi bi-arrow-right"></i></a> <Image className="line_img" src="assets/img/line-icn.svg" alt="Next.js logo" width={2} height={22}/>  </span> <span>New Gujarat manufacturing facility / Event / Innovation announcement <a href="#"> Learn More <i className="bi bi-arrow-right"></i></a> <Image className="line_img" src="assets/img/line-icn.svg" alt="Next.js logo" width={2} height={22}/> </span> <span>New Gujarat manufacturing facility / Event / Innovation announcement <a href="#"> Learn More <i className="bi bi-arrow-right"></i></a> <Image className="line_img" src="assets/img/line-icn.svg" alt="Next.js logo" width={2} height={22}/> </span> <span>New Gujarat manufacturing facility / Event / Innovation announcement <a href="#"> Learn More <i className="bi bi-arrow-right"></i></a> <Image className="line_img" src="assets/img/line-icn.svg" alt="Next.js logo" width={2} height={22}/> </span> <span>New Gujarat manufacturing facility / Event / Innovation announcement <a href="#"> Learn More <i className="bi bi-arrow-right"></i></a> <Image className="line_img" src="assets/img/line-icn.svg" alt="Next.js logo" width={2} height={22}/>  </span> <span>New Gujarat manufacturing facility / Event / Innovation announcement <a href="#"> Learn More <i className="bi bi-arrow-right"></i></a> <Image className="line_img" src="assets/img/line-icn.svg" alt="Next.js logo" width={2} height={22}/>  </span></p>

               </div>

            </div>

         </div> */}

         <nav>

            <div className="container">

            <div className="row align-items-center justify-content-between">
               
               <div className="col-2 col-md-2 col-lg-3">

                  <div className="nav_menu_btn" onClick={() => setIsopen(true)}>

                  <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <line y1="0.5" x2="32" y2="0.5" stroke="#2C20D1"/>
                     <line y1="7.5" x2="32" y2="7.5" stroke="#2C20D1"/>
                  </svg>

                  <p>Menu</p>

                  </div>

               </div>
               <div className="col-5 col-md-4 col-lg-6 p-0">
                
                   <div className="logo_img text-center">

                     <Link href="/">

                       <Image src="/assets/img/main_logo.svg" className="main_logo" alt="Logo" width={360} height={101}/>

                     </Link>

                   </div>

               </div>
               <div className="col-4 col-md-3 col-lg-3 p-0">

                  <div className="d-flex justify-content-end">

                   <Link href="/contact-us" className="common_btn"> <span>Contact Us</span> <Image src="/assets/img/right_arrow_icn.svg" alt="Logo" width={24} height={24} /></Link>

                  </div>

               </div>

            </div>

            </div>

         </nav>

       </header>

    

         <div className={`mobile_menu ${isopen ? "active_popup" : ""}`}>

                  
            <div className="mobile_nav_links">


                  {/* <div className="mobile_menu_logo">


                     <Image src="/assets/img/main_logo.svg" alt="Logo" width={360} height={101}/>


                  </div> */}

                     
                  <ul>

                     <li><Link href="/" onClick={() => setIsopen(false)}>Home</Link></li>
                     <li><Link href="/about" onClick={() => setIsopen(false)}>About Us</Link></li>
                     <li><Link href="/innovation" onClick={() => setIsopen(false)}>Innovation</Link></li>
                     <li><Link href="/products" onClick={() => setIsopen(false)}>Products</Link></li>
                     <li><Link href="/infrastructure" onClick={() => setIsopen(false)}>Infrastructure</Link></li>
                     <li><Link href="/contact-us" onClick={() => setIsopen(false)}>Contact Us</Link></li>

                  </ul>

                  <div className="menu_close_btn" onClick={() => {
                   
                   setIsopen(false);

                  }}>

                     <Image src="/assets/img/close_icn.png" width={30} height={30} alt=""/>

                  </div>


            </div>


         </div>
         


       

       </>


    );

} 