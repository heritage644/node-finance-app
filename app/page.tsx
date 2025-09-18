import Header from "@/components/header";
import TopSection from "@/components/topsection";
import Cards from "@/components/cards";
import AfterHero from "@/components/afterhero";
import SubTop from "@/components/subtop";
import Hero from "@/components/hero-section";
import Gallery from "@/components/gallery";
import Bottom from "@/components/bottom";
import Icons from "@/components/icons";
import Footer from "@/components/footer";
export default function Home() {
  return (
   <>
 <div className="">
    <Header/>
    <TopSection/>
    <SubTop/>
    <Hero/>
   <AfterHero/>
   <Gallery/>
   <Bottom/>
   <Cards/>
   <Icons/>
   <Footer/>
  
 </div>
   </>
  );
}
