import Header from "./components/header/Header";
import Hero from "./components/HeroSection/Hero";
import Contact from "./components/ContactSection/Contact";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-1 flex-col">
        <Hero /> {/* اینجا بعداً Hero اصلی سایتت را می‌نویسی */}
        <div className="mt-auto">
          <Contact />
        </div>
      </main>
    </>
  );
}
