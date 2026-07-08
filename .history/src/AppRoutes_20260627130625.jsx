import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import VisionMission from "./pages/VisionMission";
import LeadershipTeam from "./pages/LeadershipTeam";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import ImpactSection from "./pages/ImpactStories";
import Course from "./pages/Course";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Volunteer from "./pages/Volunteer";
import CSRPartnership from "./pages/CSRPartnership";
import Donate from "./pages/Donate";
import AnnualReports from "./pages/AnnualReports";
import Contact from "./pages/Contact";
import CSRPartnerDetails from "./pages/CSRPartnerDetails";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/vision-mission" element={<VisionMission />} />
      <Route path="/leadership-team" element={<LeadershipTeam />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/impact" element={<Impact />} />
      <Route path="/impact-stories" element={<ImpactSection />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/events" element={<Events />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/volunteer" element={<Volunteer />} />
      {/* <Route path="/internship" element={<Internship />} /> */}
      
      <Route path="/csr-partnership" element={<CSRPartnerDetails />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/annual-reports" element={<AnnualReports />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}