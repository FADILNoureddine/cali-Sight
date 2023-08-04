import Activite from "@/components/Activite";
import Experience from "@/components/Experience";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import SimpleSlider from "@/components/React-Slick";
import Trip from "@/components/Trip";

import Head from "next/head";


export default function Main() {
  const siteTitle = 'Cali sight'
  return (
    <>
    
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
       <Header />
        <main>
          {/* <SimpleSlider/> */}
          <Hero />
          <Featured autoSlide={true} />
          <Trip />
          <Experience />
          <Activite />
        </main>
        <Footer />
      </div>
    </>
  )
}
