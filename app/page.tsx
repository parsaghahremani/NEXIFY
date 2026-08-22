import Header from "./components/header/Header";
import Hero from "./components/HeroSection/Hero";
import Service from "./components/Services/Service";
import Projects from "./components/FeaturedProjects/FeaturedProjects";
import Process from "./components/Workflow/Workflow"; 
import WhyChooseUs from "./components/WhyChooseNexify/WhyChooseNexify";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-1 flex-col">
        <Hero />
        
        {/* بخش خدمات */}
        <Service />
        
        {/* بخش پروژه‌های منتخب */}
        <Projects />

        {/* بخش مراحل انجام پروژه */}
        <Process /> 

        {/* بخش چرا ما را انتخاب کنید */}
        <WhyChooseUs />

        {/* ۲. اضافه کردن بخش سوالات متداول */}
        <Faq />
      </main>
       <Footer />
    </>
  );
}
