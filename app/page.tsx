import HomeHeroSection from "./components/HomeHeroSection";
import HomeSection2 from "./components/HomeSection2";
import HomeSection3 from "./components/HomeSection3";
import "./HomePage.css";

export default function Home() {
  return (
    <div className="home-page flex flex-col min-h-screen max-w-screen">
      <HomeHeroSection />
      <HomeSection2 />
      <HomeSection3 />
    </div>
  );
}
