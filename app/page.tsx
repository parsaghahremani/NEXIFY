import Header from "./components/header/Header";
import Hero from "./components/HeroSection/Hero";

export default function Home() {
  return (
    <>
      <Header />

      <main>
         <Hero />          {/* اینجا بعداً Hero اصلی سایتت را می‌نویسی */}
      </main>
    </>
  );
}