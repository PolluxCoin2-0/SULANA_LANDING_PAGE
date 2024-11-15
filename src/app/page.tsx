import DeveloperPreview from "../app/HomeComponent/DeveloperPreview/page";
import BuildInternet from "../app/HomeComponent/BuildInternet/page";
import Features from "../app/HomeComponent/Features/page";
import IntegrateLens from "../app/HomeComponent/IntegrateLens/page";
import LoveIt from "../app/HomeComponent/LoveIt/page";
import Roadmap from "../app/HomeComponent/Roadmap/page";
import Contact from "../app/HomeComponent/Contact/page";

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen pt-0 md:pt-24 mx-auto w-full md:w-[60%]">
      <DeveloperPreview />
      <BuildInternet />
      <Features />
      <IntegrateLens />
      <LoveIt />
      <Roadmap />
      <Contact />
    </div>
  );
}
