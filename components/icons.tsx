export default function Icons (){

    return(
        <>
        <section className=" flex mb-20 space-x-10 md:pl-10 md:mt-50 lg:justify-center pt-10" >
            <div className="bg-pink rounded-xl w-fit  hidden md:flex flex-col py-10 ">
               <div className="w-90 ">
                 <img src="/icons.png" alt=".icons" />
               </div>
                <p className="w-80 md:pl-10">We've participated in events for children's education, health initiatives,
                     and disaster relief. We're dedicated to ongoing involvement and exploring new opportunities.</p>
            </div>
            <div className="flex flex-col w-fit rounded-lg items-start w-80 px-10 md:bg-white justify-center space-y-10 ">
                <h1 className="font-bold text-[25px]">Charity</h1>
                <p className="xl:w-200">Our creative agency supports charities globally, using our skills in branding, marketing, and social 
                    media to make a positive impact on local communities and raise awareness about important causes. </p>

            </div>



        </section>
        </>
    )
}