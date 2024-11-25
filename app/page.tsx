import HeroSection from "./components/home/HomeSection/HeroSection";
import "./components/home/home.css";

export default function Home() {
  return (
    <>
      <div className="home-page flex gap-5 flex-col w-full">
        <HeroSection />
      </div>
    </>
  );
}
