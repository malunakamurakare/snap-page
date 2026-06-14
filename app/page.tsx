import HeroSection from "./components/HeroSection";
import QuienesSomos from "./components/QuienesSomos";
import ComoFunciona from "./components/ComoFunciona";
import PlanesPreview from "./components/PlanesPreview";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <QuienesSomos />
      <ComoFunciona />
      <PlanesPreview />
    </main>
  );
}
