import Hero from "../components/Hero";
import FeatureTable from "../components/FeatureTable";
import ServicesTable from "../components/ServicesTable";
import HowItWorks from "../components/HowItWorks";
import DownloadSection from "../components/DownloadSection";
export default function Home() {
  return (
    <>
      <Hero />
      <FeatureTable />
      <ServicesTable />
      <HowItWorks />
      <DownloadSection />
    </>
  );
}
