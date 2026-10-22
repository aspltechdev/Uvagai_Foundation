import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./gallerypage.css";

/* ---------- Image imports (rename the files in src/assets/gallery to match) ---------- */
import img1_educationSupportProgram from "../assets/e.png";
import img2_scholarshipDistribution from "../assets/ed.png";
import img3_digitalLiteracyCamp from "../assets/edu.png";
import img4_schoolSupplyDrive from "../assets/educ.png";
import img5_afterSchoolTutoring from "../assets/educa.png";
import img6_librarySetupInitiative from "../assets/educat.png";
import img7_stemWorkshop from "../assets/gallery/educati.pn/////////g";
import img8_careerCounseling from "../assets/gallery/career-counseling.jpg";
import img9_creativeArtsProgram from "../assets/gallery/creative-arts-program.jpg";
import img10_readingCampaign from "../assets/gallery/reading-campaign.jpg";
import img11_teacherTraining from "../assets/gallery/teacher-training.jpg";
import img12_languageClasses from "../assets/gallery/language-classes.jpg";
import img13_scienceExhibition from "../assets/gallery/science-exhibition.jpg";
import img14_educationalFieldTrip from "../assets/gallery/educational-field-trip.jpg";
import img15_parentEngagement from "../assets/gallery/parent-engagement.jpg";
import img16_communityHealthcareCamp from "../assets/gallery/community-healthcare-camp.jpg";
import img17_freeEyeCheckup from "../assets/gallery/free-eye-checkup.jpg";
import img18_dentalHealthDrive from "../assets/gallery/dental-health-drive.jpg";
import img19_bloodDonationCamp from "../assets/gallery/blood-donation-camp.jpg";
import img20_mentalHealthWorkshop from "../assets/gallery/mental-health-workshop.jpg";
import img21_womenHealthCamp from "../assets/gallery/women-health-camp.jpg";
import img22_childVaccinationDrive from "../assets/gallery/child-vaccination-drive.jpg";
import img23_yogaWellnessCamp from "../assets/gallery/yoga-wellness-camp.jpg";
import img24_firstAidTraining from "../assets/gallery/first-aid-training.jpg";
import img25_nutritionAwareness from "../assets/gallery/nutrition-awareness.jpg";
import img26_mobileClinicService from "../assets/gallery/mobile-clinic-service.jpg";
import img27_diabetesScreening from "../assets/gallery/diabetes-screening.jpg";
import img28_seniorHealthCheckup from "../assets/gallery/senior-health-checkup.jpg";
import img29_hygieneAwarenessDrive from "../assets/gallery/hygiene-awareness-drive.jpg";
import img30_healthInsuranceHelp from "../assets/gallery/health-insurance-help.jpg";
import img31_childWelfareProgram from "../assets/gallery/child-welfare-program.jpg";
import img32_nutritionSupport from "../assets/gallery/nutrition-support.jpg";
import img33_childrenSDayEvent from "../assets/gallery/children-s-day-event.jpg";
import img34_playgroundSetup from "../assets/gallery/playground-setup.jpg";
import img35_sportsDay from "../assets/gallery/sports-day.jpg";
import img36_artCraftWorkshop from "../assets/gallery/art-craft-workshop.jpg";
import img37_childRightsAwareness from "../assets/gallery/child-rights-awareness.jpg";
import img38_summerCamp from "../assets/gallery/summer-camp.jpg";
import img39_storytellingSessions from "../assets/gallery/storytelling-sessions.jpg";
import img40_schoolEnrollment from "../assets/gallery/school-enrollment.jpg";
import img41_healthHygiene from "../assets/gallery/health-hygiene.jpg";
import img42_danceMusic from "../assets/gallery/dance-music.jpg";
import img43_personalityDevelopment from "../assets/gallery/personality-development.jpg";
import img44_environmentalEducation from "../assets/gallery/environmental-education.jpg";
import img45_giftDistribution from "../assets/gallery/gift-distribution.jpg";
import img46_youthSkillWorkshop from "../assets/gallery/youth-skill-workshop.jpg";
import img47_computerTraining from "../assets/gallery/computer-training.jpg";
import img48_vocationalTraining from "../assets/gallery/vocational-training.jpg";
import img49_entrepreneurshipProgram from "../assets/gallery/entrepreneurship-program.jpg";
import img50_softSkillsTraining from "../assets/gallery/soft-skills-training.jpg";
import img51_digitalMarketing from "../assets/gallery/digital-marketing.jpg";
import img52_tailoringDesign from "../assets/gallery/tailoring-design.jpg";
import img53_electricianTraining from "../assets/gallery/electrician-training.jpg";
import img54_webDevelopment from "../assets/gallery/web-development.jpg";
import img55_publicSpeaking from "../assets/gallery/public-speaking.jpg";
import img56_accountingBasics from "../assets/gallery/accounting-basics.jpg";
import img57_photographyWorkshop from "../assets/gallery/photography-workshop.jpg";
import img58_culinaryArts from "../assets/gallery/culinary-arts.jpg";
import img59_placementPreparation from "../assets/gallery/placement-preparation.jpg";
import img60_leadershipProgram from "../assets/gallery/leadership-program.jpg";
import img61_jobPlacementDrive from "../assets/gallery/job-placement-drive.jpg";
import img62_careerFair from "../assets/gallery/career-fair.jpg";
import img63_resumeWorkshop from "../assets/gallery/resume-workshop.jpg";
import img64_mockInterviews from "../assets/gallery/mock-interviews.jpg";
import img65_corporateConnect from "../assets/gallery/corporate-connect.jpg";
import img66_successStories from "../assets/gallery/success-stories.jpg";
import img67_recruitmentCamp from "../assets/gallery/recruitment-camp.jpg";
import img68_industryPartnership from "../assets/gallery/industry-partnership.jpg";
import img69_apprenticeshipProgram from "../assets/gallery/apprenticeship-program.jpg";
import img70_womenEmploymentDrive from "../assets/gallery/women-employment-drive.jpg";
import img71_campusRecruitment from "../assets/gallery/campus-recruitment.jpg";
import img72_skillAssessment from "../assets/gallery/skill-assessment.jpg";
import img73_jobPortalRegistration from "../assets/gallery/job-portal-registration.jpg";
import img74_networkingEvent from "../assets/gallery/networking-event.jpg";
import img75_offerDistribution from "../assets/gallery/offer-distribution.jpg";
import img76_csrPartnershipMeet from "../assets/gallery/csr-partnership-meet.jpg";
import img77_corporateVolunteerDay from "../assets/gallery/corporate-volunteer-day.jpg";
import img78_csrProjectLaunch from "../assets/gallery/csr-project-launch.jpg";
import img79_employeeEngagement from "../assets/gallery/employee-engagement.jpg";
import img80_impactAssessment from "../assets/gallery/impact-assessment.jpg";
import img81_communityDevelopment from "../assets/gallery/community-development.jpg";
import img82_csrStrategyWorkshop from "../assets/gallery/csr-strategy-workshop.jpg";
import img83_grantDistribution from "../assets/gallery/grant-distribution.jpg";
import img84_partnershipSigning from "../assets/gallery/partnership-signing.jpg";
import img85_annualCsrSummit from "../assets/gallery/annual-csr-summit.jpg";
import img86_csrReporting from "../assets/gallery/csr-reporting.jpg";
import img87_employeeGiving from "../assets/gallery/employee-giving.jpg";
import img88_ngoPartnership from "../assets/gallery/ngo-partnership.jpg";
import img89_sustainabilityInitiative from "../assets/gallery/sustainability-initiative.jpg";
import img90_csrAwards from "../assets/gallery/csr-awards.jpg";
import img91_treePlantationDrive from "../assets/gallery/tree-plantation-drive.jpg";
import img92_cleanUpCampaign from "../assets/gallery/clean-up-campaign.jpg";
import img93_recyclingWorkshop from "../assets/gallery/recycling-workshop.jpg";
import img94_natureWalk from "../assets/gallery/nature-walk.jpg";
import img95_solarEnergyCamp from "../assets/gallery/solar-energy-camp.jpg";
import img96_waterConservation from "../assets/gallery/water-conservation.jpg";
import img97_ecoFriendlyWorkshop from "../assets/gallery/eco-friendly-workshop.jpg";
import img98_gardenProject from "../assets/gallery/garden-project.jpg";
import img99_plasticFreeCampaign from "../assets/gallery/plastic-free-campaign.jpg";
import img100_climateAwareness from "../assets/gallery/climate-awareness.jpg";
import img101_seedBallMaking from "../assets/gallery/seed-ball-making.jpg";
import img102_forestConservation from "../assets/gallery/forest-conservation.jpg";
import img103_beachCleanup from "../assets/gallery/beach-cleanup.jpg";
import img104_environmentalRally from "../assets/gallery/environmental-rally.jpg";
import img105_greenSchoolProgram from "../assets/gallery/green-school-program.jpg";
import img106_foodDistribution from "../assets/gallery/food-distribution.jpg";
import img107_communityGathering from "../assets/gallery/community-gathering.jpg";
import img108_reliefDistribution from "../assets/gallery/relief-distribution.jpg";
import img109_festivalCelebration from "../assets/gallery/festival-celebration.jpg";
import img110_awarenessCampaign from "../assets/gallery/awareness-campaign.jpg";
import img111_seniorSupport from "../assets/gallery/senior-support.jpg";
import img112_womenSMeet from "../assets/gallery/women-s-meet.jpg";
import img113_infrastructureProject from "../assets/gallery/infrastructure-project.jpg";
import img114_culturalProgram from "../assets/gallery/cultural-program.jpg";
import img115_selfHelpGroup from "../assets/gallery/self-help-group.jpg";
import img116_sportsTournament from "../assets/gallery/sports-tournament.jpg";
import img117_legalAidCamp from "../assets/gallery/legal-aid-camp.jpg";
import img118_winterRelief from "../assets/gallery/winter-relief.jpg";
import img119_civicAwareness from "../assets/gallery/civic-awareness.jpg";
import img120_communityKitchen from "../assets/gallery/community-kitchen.jpg";

/* ---------- Video imports (place mp4 + poster jpg in src/assets/gallery/videos) ---------- */
import vid1_educationImpactStory from "../assets/gallery/videos/education-impact-story.mp4";
import vid1_educationImpactStoryPoster from "../assets/gallery/videos/education-impact-story-poster.jpg";
import vid2_healthcareCampHighlights from "../assets/gallery/videos/healthcare-camp-highlights.mp4";
import vid2_healthcareCampHighlightsPoster from "../assets/gallery/videos/healthcare-camp-highlights-poster.jpg";
import vid3_childWelfareJourney from "../assets/gallery/videos/child-welfare-journey.mp4";
import vid3_childWelfareJourneyPoster from "../assets/gallery/videos/child-welfare-journey-poster.jpg";
import vid4_skillTrainingShowcase from "../assets/gallery/videos/skill-training-showcase.mp4";
import vid4_skillTrainingShowcasePoster from "../assets/gallery/videos/skill-training-showcase-poster.jpg";
import vid5_placementSuccessReel from "../assets/gallery/videos/placement-success-reel.mp4";
import vid5_placementSuccessReelPoster from "../assets/gallery/videos/placement-success-reel-poster.jpg";
import vid6_csrPartnershipFilm from "../assets/gallery/videos/csr-partnership-film.mp4";
import vid6_csrPartnershipFilmPoster from "../assets/gallery/videos/csr-partnership-film-poster.jpg";
import vid7_environmentDriveRecap from "../assets/gallery/videos/environment-drive-recap.mp4";
import vid7_environmentDriveRecapPoster from "../assets/gallery/videos/environment-drive-recap-poster.jpg";
import vid8_communityVoices from "../assets/gallery/videos/community-voices.mp4";
import vid8_communityVoicesPoster from "../assets/gallery/videos/community-voices-poster.jpg";

export default function GalleryPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const galleryItems = [
    /* ===== Images ===== */
    { image: img1_educationSupportProgram, title: "Education Support Program", category: "Education", description: "Supporting students through learning resources and mentorship.", accent: "red", type: "image" },
    { image: img2_scholarshipDistribution, title: "Scholarship Distribution", category: "Education", description: "Financial support for deserving students.", accent: "red", type: "image" },
    { image: img3_digitalLiteracyCamp, title: "Digital Literacy Camp", category: "Education", description: "Computer skills for underprivileged students.", accent: "red", type: "image" },
    { image: img4_schoolSupplyDrive, title: "School Supply Drive", category: "Education", description: "Books, bags, and stationery distribution.", accent: "red", type: "image" },
    { image: img5_afterSchoolTutoring, title: "After-School Tutoring", category: "Education", description: "Extra academic support for students.", accent: "red", type: "image" },
    { image: img6_librarySetupInitiative, title: "Library Setup Initiative", category: "Education", description: "Setting up libraries in rural schools.", accent: "red", type: "image" },
    { image: img7_stemWorkshop, title: "STEM Workshop", category: "Education", description: "Science and technology for young minds.", accent: "red", type: "image" },
    { image: img8_careerCounseling, title: "Career Counseling", category: "Education", description: "Guiding students toward brighter careers.", accent: "red", type: "image" },
    { image: img9_creativeArtsProgram, title: "Creative Arts Program", category: "Education", description: "Art and craft workshops for creativity.", accent: "red", type: "image" },
    { image: img10_readingCampaign, title: "Reading Campaign", category: "Education", description: "Promoting reading in rural areas.", accent: "red", type: "image" },
    { image: img11_teacherTraining, title: "Teacher Training", category: "Education", description: "Modern teaching methodologies for educators.", accent: "red", type: "image" },
    { image: img12_languageClasses, title: "Language Classes", category: "Education", description: "English and language learning programs.", accent: "red", type: "image" },
    { image: img13_scienceExhibition, title: "Science Exhibition", category: "Education", description: "Showcasing student innovations.", accent: "red", type: "image" },
    { image: img14_educationalFieldTrip, title: "Educational Field Trip", category: "Education", description: "Visits to museums and science labs.", accent: "red", type: "image" },
    { image: img15_parentEngagement, title: "Parent Engagement", category: "Education", description: "Involving parents in education journey.", accent: "red", type: "image" },
    { image: img16_communityHealthcareCamp, title: "Community Healthcare Camp", category: "Healthcare", description: "Medical consultations and health screenings.", accent: "green", type: "image" },
    { image: img17_freeEyeCheckup, title: "Free Eye Checkup", category: "Healthcare", description: "Vision screenings and free glasses.", accent: "green", type: "image" },
    { image: img18_dentalHealthDrive, title: "Dental Health Drive", category: "Healthcare", description: "Dental checkups and oral hygiene.", accent: "green", type: "image" },
    { image: img19_bloodDonationCamp, title: "Blood Donation Camp", category: "Healthcare", description: "Organizing blood donation drives.", accent: "green", type: "image" },
    { image: img20_mentalHealthWorkshop, title: "Mental Health Workshop", category: "Healthcare", description: "Mental health awareness programs.", accent: "green", type: "image" },
    { image: img21_womenHealthCamp, title: "Women Health Camp", category: "Healthcare", description: "Specialized checkups for women.", accent: "green", type: "image" },
    { image: img22_childVaccinationDrive, title: "Child Vaccination Drive", category: "Healthcare", description: "Essential vaccinations for children.", accent: "green", type: "image" },
    { image: img23_yogaWellnessCamp, title: "Yoga & Wellness Camp", category: "Healthcare", description: "Physical and mental wellness programs.", accent: "green", type: "image" },
    { image: img24_firstAidTraining, title: "First Aid Training", category: "Healthcare", description: "Basic first aid for community members.", accent: "green", type: "image" },
    { image: img25_nutritionAwareness, title: "Nutrition Awareness", category: "Healthcare", description: "Healthy eating education programs.", accent: "green", type: "image" },
    { image: img26_mobileClinicService, title: "Mobile Clinic Service", category: "Healthcare", description: "Healthcare in remote villages.", accent: "green", type: "image" },
    { image: img27_diabetesScreening, title: "Diabetes Screening", category: "Healthcare", description: "Free diabetes testing and counseling.", accent: "green", type: "image" },
    { image: img28_seniorHealthCheckup, title: "Senior Health Checkup", category: "Healthcare", description: "Health screenings for elderly.", accent: "green", type: "image" },
    { image: img29_hygieneAwarenessDrive, title: "Hygiene Awareness Drive", category: "Healthcare", description: "Teaching proper hygiene practices.", accent: "green", type: "image" },
    { image: img30_healthInsuranceHelp, title: "Health Insurance Help", category: "Healthcare", description: "Enrolling families in health schemes.", accent: "green", type: "image" },
    { image: img31_childWelfareProgram, title: "Child Welfare Program", category: "Child Welfare", description: "Education, nutrition, and development.", accent: "blue", type: "image" },
    { image: img32_nutritionSupport, title: "Nutrition Support", category: "Child Welfare", description: "Nutritious meals for children.", accent: "blue", type: "image" },
    { image: img33_childrenSDayEvent, title: "Children's Day Event", category: "Child Welfare", description: "Fun events for children.", accent: "blue", type: "image" },
    { image: img34_playgroundSetup, title: "Playground Setup", category: "Child Welfare", description: "Safe play areas for kids.", accent: "blue", type: "image" },
    { image: img35_sportsDay, title: "Sports Day", category: "Child Welfare", description: "Physical activity through sports.", accent: "blue", type: "image" },
    { image: img36_artCraftWorkshop, title: "Art & Craft Workshop", category: "Child Welfare", description: "Nurturing creativity in children.", accent: "blue", type: "image" },
    { image: img37_childRightsAwareness, title: "Child Rights Awareness", category: "Child Welfare", description: "Educating about child rights.", accent: "blue", type: "image" },
    { image: img38_summerCamp, title: "Summer Camp", category: "Child Welfare", description: "Fun and learning during summer.", accent: "blue", type: "image" },
    { image: img39_storytellingSessions, title: "Storytelling Sessions", category: "Child Welfare", description: "Inspiring imagination through stories.", accent: "blue", type: "image" },
    { image: img40_schoolEnrollment, title: "School Enrollment", category: "Child Welfare", description: "Getting children into schools.", accent: "blue", type: "image" },
    { image: img41_healthHygiene, title: "Health & Hygiene", category: "Child Welfare", description: "Teaching hygiene to children.", accent: "blue", type: "image" },
    { image: img42_danceMusic, title: "Dance & Music", category: "Child Welfare", description: "Introducing performing arts.", accent: "blue", type: "image" },
    { image: img43_personalityDevelopment, title: "Personality Development", category: "Child Welfare", description: "Building confidence in children.", accent: "blue", type: "image" },
    { image: img44_environmentalEducation, title: "Environmental Education", category: "Child Welfare", description: "Teaching about nature conservation.", accent: "blue", type: "image" },
    { image: img45_giftDistribution, title: "Gift Distribution", category: "Child Welfare", description: "Spreading joy during festivals.", accent: "blue", type: "image" },
    { image: img46_youthSkillWorkshop, title: "Youth Skill Workshop", category: "Skill Development", description: "Career guidance and employability.", accent: "red", type: "image" },
    { image: img47_computerTraining, title: "Computer Training", category: "Skill Development", description: "Basic to advanced computer skills.", accent: "red", type: "image" },
    { image: img48_vocationalTraining, title: "Vocational Training", category: "Skill Development", description: "Hands-on vocational skills.", accent: "red", type: "image" },
    { image: img49_entrepreneurshipProgram, title: "Entrepreneurship Program", category: "Skill Development", description: "Business skills for entrepreneurs.", accent: "red", type: "image" },
    { image: img50_softSkillsTraining, title: "Soft Skills Training", category: "Skill Development", description: "Communication and interpersonal skills.", accent: "red", type: "image" },
    { image: img51_digitalMarketing, title: "Digital Marketing", category: "Skill Development", description: "Modern marketing techniques.", accent: "red", type: "image" },
    { image: img52_tailoringDesign, title: "Tailoring & Design", category: "Skill Development", description: "Fashion design skills for women.", accent: "red", type: "image" },
    { image: img53_electricianTraining, title: "Electrician Training", category: "Skill Development", description: "Certified electrician programs.", accent: "red", type: "image" },
    { image: img54_webDevelopment, title: "Web Development", category: "Skill Development", description: "Coding and web development skills.", accent: "red", type: "image" },
    { image: img55_publicSpeaking, title: "Public Speaking", category: "Skill Development", description: "Building confidence through speaking.", accent: "red", type: "image" },
    { image: img56_accountingBasics, title: "Accounting Basics", category: "Skill Development", description: "Financial literacy training.", accent: "red", type: "image" },
    { image: img57_photographyWorkshop, title: "Photography Workshop", category: "Skill Development", description: "Professional photography skills.", accent: "red", type: "image" },
    { image: img58_culinaryArts, title: "Culinary Arts", category: "Skill Development", description: "Professional cooking training.", accent: "red", type: "image" },
    { image: img59_placementPreparation, title: "Placement Preparation", category: "Skill Development", description: "Interview and job preparation.", accent: "red", type: "image" },
    { image: img60_leadershipProgram, title: "Leadership Program", category: "Skill Development", description: "Building leadership qualities.", accent: "red", type: "image" },
    { image: img61_jobPlacementDrive, title: "Job Placement Drive", category: "Placement", description: "Connecting skills with jobs.", accent: "green", type: "image" },
    { image: img62_careerFair, title: "Career Fair", category: "Placement", description: "Multiple employer events.", accent: "green", type: "image" },
    { image: img63_resumeWorkshop, title: "Resume Workshop", category: "Placement", description: "Professional resume building.", accent: "green", type: "image" },
    { image: img64_mockInterviews, title: "Mock Interviews", category: "Placement", description: "Interview practice sessions.", accent: "green", type: "image" },
    { image: img65_corporateConnect, title: "Corporate Connect", category: "Placement", description: "Bridging job seekers and employers.", accent: "green", type: "image" },
    { image: img66_successStories, title: "Success Stories", category: "Placement", description: "Celebrating job placements.", accent: "green", type: "image" },
    { image: img67_recruitmentCamp, title: "Recruitment Camp", category: "Placement", description: "On-the-spot recruitment drives.", accent: "green", type: "image" },
    { image: img68_industryPartnership, title: "Industry Partnership", category: "Placement", description: "Building company partnerships.", accent: "green", type: "image" },
    { image: img69_apprenticeshipProgram, title: "Apprenticeship Program", category: "Placement", description: "Hands-on work experience.", accent: "green", type: "image" },
    { image: img70_womenEmploymentDrive, title: "Women Employment Drive", category: "Placement", description: "Special placement for women.", accent: "green", type: "image" },
    { image: img71_campusRecruitment, title: "Campus Recruitment", category: "Placement", description: "College placement drives.", accent: "green", type: "image" },
    { image: img72_skillAssessment, title: "Skill Assessment", category: "Placement", description: "Matching skills with jobs.", accent: "green", type: "image" },
    { image: img73_jobPortalRegistration, title: "Job Portal Registration", category: "Placement", description: "Online job portal assistance.", accent: "green", type: "image" },
    { image: img74_networkingEvent, title: "Networking Event", category: "Placement", description: "Professional networking opportunities.", accent: "green", type: "image" },
    { image: img75_offerDistribution, title: "Offer Distribution", category: "Placement", description: "Celebrating job offer letters.", accent: "green", type: "image" },
    { image: img76_csrPartnershipMeet, title: "CSR Partnership Meet", category: "CSR", description: "Corporate collaborations for impact.", accent: "blue", type: "image" },
    { image: img77_corporateVolunteerDay, title: "Corporate Volunteer Day", category: "CSR", description: "Employees volunteering for causes.", accent: "blue", type: "image" },
    { image: img78_csrProjectLaunch, title: "CSR Project Launch", category: "CSR", description: "Launching new CSR initiatives.", accent: "blue", type: "image" },
    { image: img79_employeeEngagement, title: "Employee Engagement", category: "CSR", description: "Staff in social initiatives.", accent: "blue", type: "image" },
    { image: img80_impactAssessment, title: "Impact Assessment", category: "CSR", description: "Reviewing CSR project outcomes.", accent: "blue", type: "image" },
    { image: img81_communityDevelopment, title: "Community Development", category: "CSR", description: "CSR-funded infrastructure projects.", accent: "blue", type: "image" },
    { image: img82_csrStrategyWorkshop, title: "CSR Strategy Workshop", category: "CSR", description: "Planning with corporate partners.", accent: "blue", type: "image" },
    { image: img83_grantDistribution, title: "Grant Distribution", category: "CSR", description: "CSR grants for community projects.", accent: "blue", type: "image" },
    { image: img84_partnershipSigning, title: "Partnership Signing", category: "CSR", description: "Formalizing CSR partnerships.", accent: "blue", type: "image" },
    { image: img85_annualCsrSummit, title: "Annual CSR Summit", category: "CSR", description: "CSR leaders knowledge sharing.", accent: "blue", type: "image" },
    { image: img86_csrReporting, title: "CSR Reporting", category: "CSR", description: "Compliance and reporting training.", accent: "blue", type: "image" },
    { image: img87_employeeGiving, title: "Employee Giving", category: "CSR", description: "Mobilizing employee contributions.", accent: "blue", type: "image" },
    { image: img88_ngoPartnership, title: "NGO Partnership", category: "CSR", description: "Connecting NGOs with CSR programs.", accent: "blue", type: "image" },
    { image: img89_sustainabilityInitiative, title: "Sustainability Initiative", category: "CSR", description: "Environmental CSR projects.", accent: "blue", type: "image" },
    { image: img90_csrAwards, title: "CSR Awards", category: "CSR", description: "Recognizing CSR contributions.", accent: "blue", type: "image" },
    { image: img91_treePlantationDrive, title: "Tree Plantation Drive", category: "Environment", description: "Green initiatives for sustainability.", accent: "red", type: "image" },
    { image: img92_cleanUpCampaign, title: "Clean-up Campaign", category: "Environment", description: "Community cleanliness drives.", accent: "red", type: "image" },
    { image: img93_recyclingWorkshop, title: "Recycling Workshop", category: "Environment", description: "Teaching recycling practices.", accent: "red", type: "image" },
    { image: img94_natureWalk, title: "Nature Walk", category: "Environment", description: "Connecting with nature events.", accent: "red", type: "image" },
    { image: img95_solarEnergyCamp, title: "Solar Energy Camp", category: "Environment", description: "Renewable energy awareness.", accent: "red", type: "image" },
    { image: img96_waterConservation, title: "Water Conservation", category: "Environment", description: "Saving water initiatives.", accent: "red", type: "image" },
    { image: img97_ecoFriendlyWorkshop, title: "Eco-Friendly Workshop", category: "Environment", description: "Sustainable living practices.", accent: "red", type: "image" },
    { image: img98_gardenProject, title: "Garden Project", category: "Environment", description: "Community gardening initiatives.", accent: "red", type: "image" },
    { image: img99_plasticFreeCampaign, title: "Plastic-Free Campaign", category: "Environment", description: "Reducing plastic usage.", accent: "red", type: "image" },
    { image: img100_climateAwareness, title: "Climate Awareness", category: "Environment", description: "Climate change education.", accent: "red", type: "image" },
    { image: img101_seedBallMaking, title: "Seed Ball Making", category: "Environment", description: "Seed ball distribution drives.", accent: "red", type: "image" },
    { image: img102_forestConservation, title: "Forest Conservation", category: "Environment", description: "Protecting forest areas.", accent: "red", type: "image" },
    { image: img103_beachCleanup, title: "Beach Cleanup", category: "Environment", description: "Coastal area cleaning drives.", accent: "red", type: "image" },
    { image: img104_environmentalRally, title: "Environmental Rally", category: "Environment", description: "Awareness marches and rallies.", accent: "red", type: "image" },
    { image: img105_greenSchoolProgram, title: "Green School Program", category: "Environment", description: "Eco-education in schools.", accent: "red", type: "image" },
    { image: img106_foodDistribution, title: "Food Distribution", category: "Community", description: "Food assistance for families.", accent: "green", type: "image" },
    { image: img107_communityGathering, title: "Community Gathering", category: "Community", description: "Bringing communities together.", accent: "green", type: "image" },
    { image: img108_reliefDistribution, title: "Relief Distribution", category: "Community", description: "Emergency relief support.", accent: "green", type: "image" },
    { image: img109_festivalCelebration, title: "Festival Celebration", category: "Community", description: "Celebrating festivals together.", accent: "green", type: "image" },
    { image: img110_awarenessCampaign, title: "Awareness Campaign", category: "Community", description: "Social awareness programs.", accent: "green", type: "image" },
    { image: img111_seniorSupport, title: "Senior Support", category: "Community", description: "Elderly care in communities.", accent: "green", type: "image" },
    { image: img112_womenSMeet, title: "Women's Meet", category: "Community", description: "Women empowerment gatherings.", accent: "green", type: "image" },
    { image: img113_infrastructureProject, title: "Infrastructure Project", category: "Community", description: "Building community facilities.", accent: "green", type: "image" },
    { image: img114_culturalProgram, title: "Cultural Program", category: "Community", description: "Preserving cultural heritage.", accent: "green", type: "image" },
    { image: img115_selfHelpGroup, title: "Self-Help Group", category: "Community", description: "Community savings groups.", accent: "green", type: "image" },
    { image: img116_sportsTournament, title: "Sports Tournament", category: "Community", description: "Community sports events.", accent: "green", type: "image" },
    { image: img117_legalAidCamp, title: "Legal Aid Camp", category: "Community", description: "Free legal assistance.", accent: "green", type: "image" },
    { image: img118_winterRelief, title: "Winter Relief", category: "Community", description: "Blanket and warm clothes distribution.", accent: "green", type: "image" },
    { image: img119_civicAwareness, title: "Civic Awareness", category: "Community", description: "Voter and civic education.", accent: "green", type: "image" },
    { image: img120_communityKitchen, title: "Community Kitchen", category: "Community", description: "Feeding the hungry programs.", accent: "green", type: "image" },

    /* ===== Videos ===== */
    { video: vid1_educationImpactStory, poster: vid1_educationImpactStoryPoster, title: "Education Impact Story", category: "Education", description: "A short film on how our education programs change lives.", accent: "red", type: "video" },
    { video: vid2_healthcareCampHighlights, poster: vid2_healthcareCampHighlightsPoster, title: "Healthcare Camp Highlights", category: "Healthcare", description: "Highlights from our latest community healthcare camp.", accent: "green", type: "video" },
    { video: vid3_childWelfareJourney, poster: vid3_childWelfareJourneyPoster, title: "Child Welfare Journey", category: "Child Welfare", description: "Following a child welfare program from start to finish.", accent: "blue", type: "video" },
    { video: vid4_skillTrainingShowcase, poster: vid4_skillTrainingShowcasePoster, title: "Skill Training Showcase", category: "Skill Development", description: "Trainees demonstrate skills learned in our programs.", accent: "red", type: "video" },
    { video: vid5_placementSuccessReel, poster: vid5_placementSuccessReelPoster, title: "Placement Success Reel", category: "Placement", description: "Celebrating placements and success stories.", accent: "green", type: "video" },
    { video: vid6_csrPartnershipFilm, poster: vid6_csrPartnershipFilmPoster, title: "CSR Partnership Film", category: "CSR", description: "A look inside our corporate partnership initiatives.", accent: "blue", type: "video" },
    { video: vid7_environmentDriveRecap, poster: vid7_environmentDriveRecapPoster, title: "Environment Drive Recap", category: "Environment", description: "Recap of our tree plantation and cleanup drives.", accent: "red", type: "video" },
    { video: vid8_communityVoices, poster: vid8_communityVoicesPoster, title: "Community Voices", category: "Community", description: "Community members share their experiences in their own words.", accent: "green", type: "video" },
  ];

  const categories = ["All", "Education", "Healthcare", "Child Welfare", "Skill Development", "Placement", "CSR", "Environment", "Community"];

  const filteredItems = filter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  const handleFilterChange = (category) => {
    setFilter(category);
    setVisibleCount(12);
  };

  return (
    <div className="glp-page" ref={sectionRef}>
      <section className="glp-hero">
        <div className="glp-hero-bg" />
        <div className="glp-hero-glow glp-hero-glow-1" />
        <div className="glp-hero-glow glp-hero-glow-2" />
        <div className="glp-container">
          <motion.div className="glp-hero-content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="glp-hero-tag">
              <span className="glp-hero-tag-line" />
              <span className="glp-hero-tag-text">Gallery</span>
            </div>
            <h1 className="glp-hero-headline">Capturing Moments Of <span className="glp-hero-accent">Impact</span></h1>
            <p className="glp-hero-desc">Explore the journey of Uvagai Foundation through our initiatives and social impact projects.</p>
          </motion.div>
        </div>
      </section>

      <section className="glp-filter-section">
        <div className="glp-container">
          <motion.div className="glp-filters" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            {categories.map((category) => (
              <motion.button key={category} className={`glp-filter-btn ${filter === category ? 'glp-filter-active' : ''}`} onClick={() => handleFilterChange(category)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{category}</motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="glp-grid-section">
        <div className="glp-container">
          <motion.div className="glp-grid" layout>
            <AnimatePresence mode="popLayout">
              {displayedItems.map((item, index) => (
                <motion.div
                  className={`glp-card glp-card-${item.accent}`}
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.02 }}
                  layout
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="glp-card-media">
                    {item.type === "video" ? (
                      <video
                        src={item.video}
                        poster={item.poster}
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                      />
                    ) : (
                      <img src={item.image} alt={item.title} loading="lazy" />
                    )}
                    <div className="glp-card-shade" />
                    <div className="glp-card-badge">
                      <span className={`glp-card-dot glp-dot-${item.accent}`} />
                      <span className="glp-card-badge-text">{item.category}</span>
                    </div>
                    <div className="glp-card-view">
                      {item.type === "video" ? (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M7 5.5L13 9L7 12.5V5.5Z" fill="currentColor"/>
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M1 9C3 4.5 6 2 9 2C12 2 15 4.5 17 9C15 13.5 12 16 9 16C6 16 3 13.5 1 9Z" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="glp-card-body">
                    <h3 className="glp-card-title">{item.title}</h3>
                    <p className="glp-card-text">{item.description}</p>
                  </div>
                  <div className={`glp-card-line glp-line-${item.accent}`} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {hasMore && (
            <motion.div className="glp-load-more" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <button className="glp-load-btn" onClick={handleLoadMore}>View More </button>
            </motion.div>
          )}
          {filteredItems.length === 0 && (
            <motion.div className="glp-empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p>No images found in this category.</p>
              <button onClick={() => handleFilterChange("All")}>View All Images</button>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div className="glp-lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)}>
            <motion.div className="glp-lightbox-dialog" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
              <button className="glp-lightbox-close" onClick={() => setSelectedImage(null)}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
              <div className="glp-lightbox-image">
                {selectedImage.type === "video" ? (
                  <video src={selectedImage.video} poster={selectedImage.poster} controls autoPlay style={{ width: "100%", height: "100%" }} />
                ) : (
                  <img src={selectedImage.image} alt={selectedImage.title} />
                )}
              </div>
              <div className="glp-lightbox-info">
                <span className={`glp-lightbox-cat glp-cat-${selectedImage.accent}`}>{selectedImage.category}</span>
                <h3 className="glp-lightbox-title">{selectedImage.title}</h3>
                <p className="glp-lightbox-desc">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}