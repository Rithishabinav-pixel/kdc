import Image from "next/image";
import Link from "next/link";

export default function Footer(){

    

   return(

    <>
    
       <footer>

            <div className="container">

                <div className="row justify-content-center br_wdth">

                    <div className="col-lg-12 col-xl-8">

                        <h2>Bring Us the Idea. We’ll Build the Path.</h2>

                        <p>Bring us the brief, formula or packaging need. We’ll help define the right path from development to production.</p>

                        <div className="ftr_btns">

                        <Link href="/contact-us" className="common_btn"> <span>Request Consultation</span> <Image src="/assets/img/right_arrow_icn.svg" alt="Logo" width={24} height={24}/></Link>

                        {/* <Link href="#" className="wht_btn"> <span>Request Consultation</span> <Image src="/assets/img/blu-arr.svg" alt="Logo" width={24} height={24}/></Link> */}

                        </div>

                    </div>

                </div>
              
                <div className="row tp_bt_spc br_wdth justify-content-between">

                   <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-2">

                      <h4>Quick Links</h4>

                       <ul className="ftr_links">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/innovation">Innovation</Link></li>
                            <li><Link href="/infrastructure">Infrastructure</Link></li>
                            {/* <li><Link href="">Insights</Link></li> */}
                            <li><Link href="/contact-us">Contact Us</Link></li>
                       </ul>
                      
                   </div>

                   <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-2">

                      <h4>Capabilities</h4>        

                        <ul className="ftr_links">
                            <li><Link href="/infrastructure">Injection Moulding</Link></li>
                            <li><Link href="/infrastructure">Metallisation</Link></li>
                            <li><Link href="/infrastructure">Screen Printing</Link></li>
                            <li><Link href="/infrastructure">Hot Foil Stamping</Link></li>
                            <li><Link href="/infrastructure">Packaging Design and Engineering</Link></li>
                            <li><Link href="/infrastructure">Formulation Innovation</Link></li>
                            <li><Link href="/infrastructure">Product Development</Link></li>
                        </ul>

                   </div>

                   {/* <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-2">

                     <h4>Solutions</h4>         
                    
                        <ul className="ftr_links">
                            <li><Link href="">Develop a New Formula</Link></li>
                            <li><Link href="">Manufacture My Formula</Link></li>
                            <li><Link href="">Create Custom Packaging</Link></li>
                            <li><Link href="">Packaging Solutions</Link></li>
                            <li><Link href="">Contract Manufacturing</Link></li>
                        </ul>

                   </div> */}

                   <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-2">

                     <h4>Products</h4>         
                     
                        <ul className="ftr_links">
                            <li><Link href="/products">Skincare</Link></li>
                            <li><Link href="/products">Haircare</Link></li>
                            <li><Link href="/products">Sun Protection</Link></li>
                        </ul>

                   </div>

                   <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-4">

                      <h4>Subscribe to Our NewsLetter</h4>
                       
                       <p className="text-start pt-0 pb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                       <div className="input_tag">
 
                           <input type="text" placeholder="Enter your email address"/>

                           <button type="submit">Submit <Image src="/assets/img/right_arrow_icn.svg" alt="" width={24} height={24}/></button>

                       </div>

                   </div>

                </div>

                <div className="row tp_bt_spc justify-content-center br_wdth">
             
                     <div className="col-xl-5">
 
                        <div className="ftr_logo text-center">

                          <Image src="/assets/img/ftr-logo.svg" alt="logo" width={379} height={105}/>

                        </div>

                     </div>

                     <div className="col-xl-8">

                        <p className="mt-3 mb-0">kdc/one Clarion Beauty Pvt. Ltd. combines global beauty innovation, formulation and packaging expertise with Indian manufacturing strength to help brands create, scale and deliver high-quality beauty and personal care solutions. </p>

                     </div>

                </div>

                <div className="row align-items-center justify-content-between mt-2">

                    <div className="col-lg-4 col-xl-4">

                        <p className="cpy_txt">kdc/one Clarion © . All rights reserved | Designed By <Link href="https://www.pixel-studios.com/" target="_blank">Pixel Studios </Link></p>

                    </div>
                    <div className="col-lg-3 col-xl-3">

                        <ul className="social_link">
                            <li><Link href="" ><Image src="/assets/img/facebook.svg" alt="" width={20} height={20}/> </Link></li>
                            <li><Link href="" ><Image src="/assets/img/twitter.svg" alt="" width={14} height={12}/> </Link></li>
                            <li><Link href="" > <Image src="/assets/img/instagram-icon.svg" alt="" width={18} height={18}/></Link></li>
                            <li><Link href="" > <Image src="/assets/img/Linked-in.svg" alt="" width={18} height={18}/></Link></li>
                        </ul>
                        
                    </div>
                    <div className="col-lg-4 col-xl-4">  

                         <ul className="ftr_links trm_con social_link">
                            <li><Link href="" >Terms of Service </Link></li>
                            <li><Link href="" >Privacy Policy</Link></li>

                        </ul>
                        
                    </div>

                </div>

            </div>

       </footer>

    </>

   )

}