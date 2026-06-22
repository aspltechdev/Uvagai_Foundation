



import "./Home.css";
import AboutUs from "./AboutUs";
import Hero from "../components/home/Hero/Hero";
import ImpactStats from "../components/home/ImpactStats/ImpactStats";
import AboutSection from "../components/home/AboutSection/AboutSection";
import Programs from "../components/home/Programs/Programs";
import ImpactSection from "./ImpactStories";
import Events from "./Events";
import CSRPartnership from "./CSRPartnership";
import Volunteer from "../components/home/Volunteer/Volunteer";
import Gallery from "./Gallery";
import Donate from "./Donate";
import VisionMission from "./VisionMission";

export default function Home() {
  return (
    <main className="home-page">

      {/* Hero Banner */}
      <Hero/>

      {/* Impact Numbers */}
      <ImpactStats />
<AboutSection/>

      {/* Programs */}
      <Programs />
      <VisionMission/>

      {/* Success Stories */}
      {/* <ImpactSection /> */}

      {/* Events */}
      <Events />

      {/* CSR Partnership */}
      <CSRPartnership />

      {/* Volunteer Section */}
      <Volunteer />

      {/* Gallery */}
      <Gallery />
    

      {/* Testimonials */}
      {/* <Testimoansl /> */}

      {/* Donate CTA */}
      <Donate/>

    </main>
  );
}


