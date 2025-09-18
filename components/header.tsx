'use client'
import { motion } from "framer-motion"
import React from "react"
import Link from "next/link"

export default function Header (){
  const[isOpen, setIsOpen] =React.useState(false)

  function clicker(){

setIsOpen(prev=>!prev)
  }
    React.useEffect(()=>{
if(isOpen) {
  document.body.classList.add('no-scroll')
}else{
  document.body.classList.remove('no-scroll')
}
return()=>{
  document.body.classList.remove('no-scroll')
}
  },[isOpen])
   function clickerClick(e:React.FormEvent){
    e.preventDefault()
   }
   
    return (
   
    <header className=" z-[999] sm:backdrop-blur-sm  sm:shadow-md sm:bg-translucent  sticky p-0 z-{1120} fixed top-0 w-full flex items-center justify-between 
    sm: sm:px-7
    lg:px-20
    xl:px-50
   
    "  >
      <section className="ml-2 z-[100]">  <div className="flex px-3 py-3 backdrop-blur-sm  shadow-md bg-translucent sm:bg-transparent sm:shadow-none sm:backdrop-blur-none space-x-2 justify-end items-center font-bold lg:text-[20px] rounded-xl  ">
            <img src="/logo.svg" alt=".logo" />
            <h1>The Creator</h1>
        </div>
</section>
        <div className="sm:hidden pr-10  " >
           
          <button className="shadow-md bg-translucent backdrop-blur-sm    flex flex-col justify-center items-center w-8 h-8 space-y-1 relative p-2  z-[9999] sm:hidden" onClick={clicker} >
  <span className={`block w-6 h-0.5 bg-pink dark:bg-white z-100 transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} ></span>
  <span className={`block w-6 h-0.5 bg-pink dark:bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
  <span className={`block w-6 h-0.5 bg-pink dark:bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
</button>
        </div>


         {isOpen && (
  <div className="fixed inset-0 bg-translucent backdrop-blur z-[1000] flex items-center justify-center dark:bg-zinc-900">
    <nav className="text-center  z-[100]   ">
      <div
      className="space-y-12  z-[100] " >
        <Link 
         href="/" 
          className="block text-[20px]   font-light text-gray-800 hover:text-gray-500 transition-colors duration-300 tracking-wide"
          onClick={() => setIsOpen(false)}
          data-aos="flip-left" data-aos-duration="1200"
        >
          Partners 
        </Link>
        <Link 
         href="/" 
          className="block text-[20px]  font-light  text-gray-800  tracking-wide"
          onClick={() => setIsOpen(false)}
          data-aos="flip-left" data-aos-duration="1200"
        >
          Review
        </Link>
         <Link 
         href="/" 
          className="block text-[20px]  font-light  text-gray-800  tracking-wide"
          onClick={() => setIsOpen(false)}
          data-aos="flip-left" data-aos-duration="1200"
        >
         How we work
        </Link>
        <Link 
         href="/" 
          className="block text-[20px]  font-light  text-gray-800  tracking-wide"
          onClick={() => setIsOpen(false)}
          data-aos="flip-left" data-aos-duration="1200"
        >
          Charity
        </Link>
          <motion.button 
         
            whileHover={{scale:1.1}}
               whileTap={{scale:0.9}}
               transition={{type:"spring", stiffness:400, damping:17 }}
       
          className="block text-[20px] bg-pink rounded-full pl-3 pr-3 font-light 
          
           text-gray-800  tracking-wide"
          onClick={() => setIsOpen(false)}
          data-aos="flip-left" data-aos-duration="1200"
        >
         Join The Creator
        </motion.button>





      </div>
    </nav>
  </div>
)}






        <div className="hidden sm:flex  space-x-5 font-semi-bold lg:text-[20px] " > 
            <h1>Partners  </h1>
            <h1>How we Work</h1>
            <h1>Charity</h1>
            <h1>Review</h1>
            
        </div>
        <div className="hidden md:flex lg:text-[20px] bg-pink rounded-full pr-5 pl-5">
            <motion.button
            onClick={clickerClick}
              whileHover={{scale:1.1}}
               whileTap={{scale:0.9}}
               transition={{type:"spring", stiffness:400, damping:17 }}
            
            >Join The Creator</motion.button>
        </div>
    
    </header>
 


    )
}