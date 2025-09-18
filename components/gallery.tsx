'use client'
import { motion } from "framer-motion"
import React from "react"
import "aos/dist/aos.css"
import Aos from "aos"

export default function Gallery(){
 React.useEffect(()=>{
    
    Aos.init({
      duration:800,
      once:true,
      offset:100,
    })
    
    },[])
    return(

        <>
        <section>
            <section className="flex justify-between pt-10 " >
            <div className="w-130 mx-5 text-[13px] border-t border-pink pt-10 lg:text-[22px] lg:ml-30 lg:w-150 text-start" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="font-bold " data-aos="fade-up" data-aos-duration="1000">
                    1# Research & Analysis
                </h1>
                <p className="lg:w-140" data-aos="fade-up" data-aos-duration="1000">Our agency's research-driven approach involves gathering insights into our clients' industries, competitors, and target audiences to develop tailored strategies that deliver exceptional results. This deep understanding allows us to create innovative and effective campaigns that resonate with  our clients' audiences.
</p>
            </div>
            <div className="pt-40" data-aos="fade-up" data-aos-duration="1000">
                <img src="/illustration.png" alt="" />
            </div>


            



        </section>

        {/*section1*/}


        <section className="flex justify-between pt-10 ">
             <div className="" data-aos="fade-up" data-aos-duration="1000">
                <img src="/tectgirl.png" alt=".logo" />
            </div>

           
                   <div className="w-140 mx-3 text-[13px] border-b pb-10 border-pink pt-50 lg:text-[22px] lg:ml-30 lg:w-150 text-start pr-10" >
                <h1 className="font-bold  " data-aos="fade-up" data-aos-duration="1000">
                    2# Concept development:
                </h1>
                <p className="lg:w-140" data-aos="fade-up" data-aos-duration="1000">Based on the brief and research, the agency's creative team generates ideas for the campaign. These concepts are presented to the client for feedback and refinement.
</p>
            </div>
            
           

            



        </section>
        
        {/*section1*/}


            <section className="flex justify-between pt-10 ">
            <div className="w-130 mx-5 text-[13px]  lg:text-[22px] lg:ml-30 lg:w-150 text-start">
                <h1 className="font-bold " data-aos="fade-up" data-aos-duration="1000">
                   3# Design and execution:
                </h1>
                <p className="lg:w-140" data-aos="fade-up" data-aos-duration="1000">Once the concept is approved,
the agency's designers and developers
 bring it to life. This includes creating
visual assets, writing copy,
and developing multimedia content
</p>
            </div>
            <div className="pt-40  " data-aos="fade-up" data-aos-duration="1000">
                <img src="/figma.png" alt="" />
            </div>


            



        </section>




        
        </section>
       
        
        </>
    )
}