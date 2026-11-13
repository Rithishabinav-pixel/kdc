"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


export default function PhoneInputTag() { 


    return(

        <>

            <div className="mobile_code">

            <PhoneInput
                country="in"
                enableSearch={true}
                countryCodeEditable={false}
                inputProps={{
                    name: "mobile",
                    required: true,
                    placeholder: "Mobile Number"
                }}
            />

            </div>

        </>

    )

}