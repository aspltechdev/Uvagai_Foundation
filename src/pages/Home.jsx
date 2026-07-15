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
import VisionMissionHome from "../components/home/Vision/MissionVision";
import EventsHome from "../components/home/Events/Events";
import CSRPartnersHome from "./CSRPartners";
import VolunteerHome from "./Volunteer";
import TestimonialsHome from "./Testimonials";
import HomeCourse from "./HomeCourse";

import Socialwall from "../components/home/Socialwall";
import DonateHome from "./DonateHome";
import FinalCTA from "./FinalCTA";


export default function Home() {
  return (
    <main className="home-page">

      {/* Hero Banner */}
      <Hero/>
<AboutSection/>
      {/* Impact Numbers */}
      <ImpactStats />

      {/* Programs */}
      <Programs />


      <VisionMissionHome/>
      <HomeCourse/>
      {/* <VisionMission/> */}

      {/* Success Stories */}
      {/* <ImpactSection /> */}

      {/* <Events /> */}
      <EventsHome/>

      {/* CSR Partnership */}
      <CSRPartnersHome/>
      {/* <CSRPartnership /> */}

      {/* Volunteer Section */}
      {/* <Volunteer /> */}
  <VolunteerHome/>

      {/* Gallery */}
      <Gallery />

      {/* Social Wall */}
      <Socialwall />

      <TestimonialsHome />

  
      <DonateHome/>
      <FinalCTA/>


    </main>
  );
}