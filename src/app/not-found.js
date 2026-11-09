import Link from "next/link";
import Image from "next/image";

export default function NotFound() {

    return (
        <section className="error-page">

           <div className="container">

              <div className="row justify-content-center">
               
                   <div className="col-xl-6">

                      <div className="text-center" data-aos="fade-up">

                            <h2>404 !</h2>

                            <h3>Page Not Found!</h3>

                            <p>
                                Sorry, the page you are looking for
                                doesn't exist.
                            </p>

                            <div className="d-flex justify-content-center text-center">

                              <Link href="/" className="common_btn"> <span>Return home</span> <Image src="/assets/img/right_arrow_icn.svg" alt="Logo" width={24} height={24} /></Link>

                            </div>

                      </div>

                   </div>

              </div>

           </div>

        </section>
    );

}
