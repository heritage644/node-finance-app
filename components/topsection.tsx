export default function TopSection(){

    return(
        <>
        
       <section className="pt-20 " >
         <section className="w-full flex flex-col items-center space-y-10 mb-10 " id="topSection">
         <div className="flex items-center w-full items-start justify-center  "> 
              <p className="text-center w-70 pt-2 pl-4 text-[30px] sm:text-[37px] sm:w-100 sm:pt-0 md:text-[44px]
              lg:text-[75px] lg:pt-30 lg:w-180 lg:pl-15 font-bold
              ">Spark your brand's imaginative <strong id="slong">flaire</strong> with us</p>
              </div>
            <p className="w-90 text-center lg:w-150">Our team combines strategy, design, and technology to breathe life into your brand.
               Collaborate with us to leave a lasting impression on your audience. </p>
             <div className=" flex items-center justify-center w-full mt-0">
              <form action="" className="flex w-80 items-center justify-center">
                <input className="bg-white p-3 rounded-full  focus:outline-none focus:ring-2 focus:ring-pink-300" type="text" placeholder="okjohn644@gmail.com" />
                <button  className="bg-pink pr-5 pl-5 rounded-full " id="button">join</button>
              </form>
            </div>
            </section>
           
       </section>
       </>
    )
}