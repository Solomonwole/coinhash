import Contact from "../../components/LandingPage/Contact";
import FAQ from "../../components/LandingPage/FAQ";
import Features from "../../components/LandingPage/Features";
import Hero from "../../components/LandingPage/Hero";
import ImageSection from "../../components/LandingPage/ImageSection";
import PricingSection from "../../components/LandingPage/Pricing";
import RoadmapSection from "../../components/LandingPage/Roadmap";
import Footer from "../../components/Other/Footer";
import HeaderNav from "../../components/Other/HeaderNav";
import { PageLayout } from "../../layout/PageLayout";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeaderNav />
      <PageLayout>
        <Hero />
      </PageLayout>
      <ImageSection />
      <PageLayout>
        <Features />
        <RoadmapSection />
        <PricingSection/>
        <FAQ />
        <Contact />
        <Footer />
      </PageLayout>
    </>
  );
};

export default LandingPage;
