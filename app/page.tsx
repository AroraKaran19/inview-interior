import CateogoriesSection from "./components/CateogoriesSection/CategoriesSection";
import CompanyInfoSection from "./components/CompanyInfoSection/CompanyInfoSection";
import EmergeFromDiv from "./components/TestingPhaseComponents/EmergeFromDiv";
import HeroSection from "./components/HeroSection/HeroSection";
import "./components/home.css";

export default function Home() {
  return (
    <>
      <div className="home-page flex gap-5 flex-col w-full overflow-hidden">
        <HeroSection />
        <CompanyInfoSection />
        <CateogoriesSection />
      </div>
    </>
  );
}
