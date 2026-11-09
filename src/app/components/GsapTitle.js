"use client"; 

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function GsapTitle({ children, className = "" }) { 

      const gsaptitle = useRef(null)

      useGSAP(() => {

        const split = new SplitText(gsaptitle.current, {
          type: "words",
        });
    
        const mm = gsap.matchMedia();
    
        mm.add("(min-width: 1200px)", () => {
    
          gsap.fromTo(
            // scrollTitleOne.current,
            split.words,
            { opacity: 0.05},
            {
              opacity: 1,
              stagger: 0.5,
              duration: 2,
              scrollTrigger: {
                trigger: gsaptitle.current,
                start: "top 70%",
                end: "top 40%",
                scrub: true,
                // markers: true,
                // pin: true,
              }
            }
          );
    
        })
    
        return () => mm.revert();
        
      }, []);

    return (

        <>
        
        <h2 ref={gsaptitle} className={className}>

            {children}

        </h2>

        </>

    )


}