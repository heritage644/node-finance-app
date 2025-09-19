'use client'
import { motion } from "framer-motion"

export default function Footer (){

  function clickerClick(e: React.FormEvent){
e.preventDefault()
  }
  return(
    <section className="mt-0-auto flex flex-col space-y-10 pb-10 overflow-x-hidden">
        <div className="flex flex-col items-center space-y-3">
            <h1 className="font-bold text-[20px] text-center">
            We are waiting for you to contact us
            </h1>
            <span className="w-80 text-center text-[11px]">You can write to us at any time and get an instant response</span>
            </div>
              <div className=" flex items-center justify-center w-full mt-0">
              <form action="" className="flex w-80 items-center justify-center">
                <input className="bg-white p-3 rounded-full  focus:outline-none focus:ring-2 focus:ring-pink-300" type="text" placeholder="okjohn644@gmail.com" />
                <motion.button
                onClick={clickerClick}
                  whileHover={{scale:1.1}}
               whileTap={{scale:0.9}}
               transition={{type:"spring", stiffness:400, damping:17 }}
                
                className="bg-pink pr-5 pl-5 rounded-full " id="button">join</motion.button>
              </form>
            </div>
            <div className="flex lg:flex-row lg:space-x-20 justify-center flex-col items-center space-y-3"> 
                <span>
                    © copywrite Okechukwu 2025
                </span>
                
        <div className=" flex space-x-5 font-semi-bold lg:text-[20px] " > 
            <h1>Partners  </h1>
            <h1>How we Work</h1>
            <h1>Charity</h1>
            <h1>Review</h1>
            
        </div>
        <div>
            <img src="/frame.png" alt="" />
            
        </div>
            </div>


    </section>

    
  )
}