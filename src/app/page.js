// import variable from "./styles/variable.module.scss";
// import AdoptionCard from "./components/AdoptionCard/AdoptionCard";
import AdoptionCardsSection from "./components/AdoptionCardsSection/AdoptionCardsSection";
import AdoptionInfo from "./components/AdoptionInfo/AdoptionInfo";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import AdoptionGalleryButton from "./components/AdoptionGalleryButton/AdoptionGalleryButton";
import ProductSection from "./components/ProductSection/ProductSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import DealSection from "./components/DealSection/DealSection";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AdoptionInfo/>
      {/* <AdoptionCard/> */}
      <AdoptionCardsSection/>
      <AdoptionGalleryButton/>
      <ProductSection/>
      <FeaturesSection/>
      <DealSection/>
    </>
  );
}
