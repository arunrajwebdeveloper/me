import FooterSection from "../components/FooterSection";
import GallerySection from "../components/GallerySection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ScrollToTop from "../components/ScrollToTop";
import WorksSection from "../components/WorksSection";
import Wrapper from "../components/Wrapper";

const HomePage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <HeroSection />
        <WorksSection />
        <GallerySection />
        <FooterSection />
        <ScrollToTop />
      </Wrapper>
    </>
  );
};

export default HomePage;
