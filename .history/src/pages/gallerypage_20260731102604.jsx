import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./gallerypage.css";

// ---------- ES IMPORTS (by folder) ----------

// ---- childewelfare ----
import cw1 from "../assets/uvagai/childewelfare/.trashed-1670688497-IMG20221109202246.jpg";
import cw2 from "../assets/uvagai/childewelfare/.trashed-1673976447-IMG20221218133743.jpg";
import cw3 from "../assets/uvagai/childewelfare/.trashed-1674050894-IMG20221218134145.jpg";
import cw4 from "../assets/uvagai/childewelfare/.trashed-1674050942-IMG20221218134010.jpg";
import cw5 from "../assets/uvagai/childewelfare/.trashed-1674050946-IMG20221218133958.jpg";
import cw6 from "../assets/uvagai/childewelfare/.trashed-1674050952-IMG20221218133945.jpg";
import cw7 from "../assets/uvagai/childewelfare/.trashed-1674050956-IMG20221218133933.jpg";
import cw8 from "../assets/uvagai/childewelfare/.trashed-1674050962-IMG20221218133918.jpg";
import cw9 from "../assets/uvagai/childewelfare/.trashed-1674050966-IMG20221218133900.jpg";
import cw10 from "../assets/uvagai/childewelfare/.trashed-1674050980-IMG20221218133823.jpg";
import cw11 from "../assets/uvagai/childewelfare/.trashed-1674050985-IMG20221218133812.jpg";
import cw12 from "../assets/uvagai/childewelfare/IMG-20221109-WA0001.jpg";
import cw13 from "../assets/uvagai/childewelfare/IMG_4227.JPG";
import cw14 from "../assets/uvagai/childewelfare/IMG_4230.JPG";
import cw15 from "../assets/uvagai/childewelfare/IMG_4231.JPG";
import cw16 from "../assets/uvagai/childewelfare/PHOTO-2020-08-09-16-23-12_19.jpg";
import cw17 from "../assets/uvagai/childewelfare/PHOTO-2020-08-09-16-23-13_1.jpg";
import cw18 from "../assets/uvagai/childewelfare/PHOTO-2020-08-09-16-23-13_4.jpg";
import cw19 from "../assets/uvagai/childewelfare/WhatsApp Image 2025-03-05 at 3.13.04 PM (1).jpeg";
import cw20 from "../assets/uvagai/childewelfare/WhatsApp Image 2025-03-05 at 3.13.05 PM (1).jpeg";

// ---- community ----
import com21 from "../assets/img/pol1.jpeg";
import com22 from "../assets/img/pol2.jpeg";
import com1 from "../assets/uvagai/community/ABGS1486.JPG";
import com2 from "../assets/uvagai/community/AHGU2756.JPG";
import com3 from "../assets/uvagai/community/ARMC6200.JPG";
import com4 from "../assets/uvagai/community/BCIQ6690.JPG";
import com5 from "../assets/uvagai/community/DNPR6985.JPG";
import com6 from "../assets/uvagai/community/FPWI8543.JPG";
import com7 from "../assets/uvagai/community/IMG_4968.JPG";
import com8 from "../assets/uvagai/community/IMG_4971.JPG";
import com9 from "../assets/uvagai/community/IMG_4972.JPG";
import com10 from "../assets/uvagai/community/IMG_4973.JPG";
import com11 from "../assets/uvagai/community/IMG_5300.JPG";
import com12 from "../assets/uvagai/community/IMG_5458.JPG";
import com13 from "../assets/uvagai/community/IMG_5459.JPG";
import com14 from "../assets/uvagai/community/IMG_5462.JPG";
import com15 from "../assets/uvagai/community/IMG_5464.JPG";
import com16 from "../assets/uvagai/community/IMG_6148.JPG";
import com17 from "../assets/uvagai/community/IMG_6165.JPG";
import com18 from "../assets/uvagai/community/TBSV6252.JPG";
import com19 from "../assets/uvagai/community/WhatsApp Image 2025-04-20 at 8.01.47 PM.jpeg";
import com20 from "../assets/uvagai/community/WKFT8164.JPG";

// ---- csr ----
import csr1 from "../assets/uvagai/csr/003A7790.jpg";
import csr2 from "../assets/uvagai/csr/003A7924.jpg";
import csr3 from "../assets/uvagai/csr/003A7926.jpg";
import csr4 from "../assets/uvagai/csr/003A8140.jpg";
import csr5 from "../assets/uvagai/csr/003A8160 (1).jpg";
import csr6 from "../assets/uvagai/csr/ANTO8549.JPG";
import csr7 from "../assets/uvagai/csr/ANTO8590.JPG";
import csr8 from "../assets/uvagai/csr/ANTO8758.JPG";
import csr9 from "../assets/uvagai/csr/ANTO8762.JPG";
import csr10 from "../assets/uvagai/csr/ANTO9183.JPG";
import csr11 from "../assets/uvagai/csr/ANTO9280.JPG";
import csr12 from "../assets/uvagai/csr/ANTO9349 (1).JPG";
import csr13 from "../assets/uvagai/csr/WhatsApp Image 2026-02-08 at 8.24.21 AM (2).jpeg";
import csr14 from "../assets/uvagai/csr/WhatsApp Image 2026-02-08 at 8.24.22 AM (8).jpeg";
import csr15 from "../assets/uvagai/csr/WhatsApp Image 2026-02-09 at 8.49.48 PM.jpeg";
import csr16 from "../assets/uvagai/csr/WhatsApp Image 2026-02-09 at 8.49.49 PM (3).jpeg";
import csr17 from "../assets/uvagai/csr/WhatsApp Image 2026-07-15 at 12.12.15 PM.jpeg";
import csr18 from "../assets/uvagai/csr/WhatsApp Image 2026-07-15 at 12.12.18 PM (1).jpeg";
import csr19 from "../assets/uvagai/csr/WhatsApp Image 2026-07-15 at 12.12.19 PM (1).jpeg";
import csr20 from "../assets/uvagai/csr/WhatsApp Image 2026-07-15 at 12.12.22 PM (2).jpeg";

// ---- education ----
import edu1 from "../assets/uvagai/education/003A7811.jpg";
import edu2 from "../assets/uvagai/education/003A8126.jpg";
import edu3 from "../assets/uvagai/education/003A8164 (1).jpg";
import edu4 from "../assets/uvagai/education/003A8330.jpg";
import edu5 from "../assets/uvagai/education/13.jpeg";
import edu6 from "../assets/uvagai/education/17.jpeg";
import edu7 from "../assets/uvagai/education/27.jpeg";
import edu8 from "../assets/uvagai/education/41.jpeg";
import edu9 from "../assets/uvagai/education/43.jpeg";
import edu10 from "../assets/uvagai/education/a.jpeg";
import edu11 from "../assets/uvagai/education/c.jpeg";
import edu12 from "../assets/uvagai/education/g.jpeg";
import edu13 from "../assets/uvagai/education/IMG_20251124_105139.jpg";
import edu14 from "../assets/uvagai/education/IMG_20251124_105340.jpg";
import edu15 from "../assets/uvagai/education/IMG_20251124_105631.jpg";
import edu16 from "../assets/uvagai/education/IMG_20251124_110418.jpg";
import edu17 from "../assets/uvagai/education/IMG_20251124_111617.jpg";
import edu18 from "../assets/uvagai/education/IMG_20251124_112751.jpg";
import edu19 from "../assets/uvagai/education/IMG_20251124_121559.jpg";
import edu20 from "../assets/uvagai/education/IMG_20251124_121951.jpg";
import edu21 from "../assets/uvagai/education/IMG_7822.JPG";
import edu22 from "../assets/uvagai/education/IMG_7824.JPG";
import edu23 from "../assets/uvagai/education/IMG_9570.JPG";
import edu24 from "../assets/uvagai/education/WhatsApp Image 2025-10-31 at 17.32.08.jpeg";
import edu25 from "../assets/uvagai/education/WhatsApp Image 2025-11-07 at 18.44.48.jpeg";
import edu26 from "../assets/uvagai/education/WhatsApp Image 2025-11-14 at .jpeg";
import edu27 from "../assets/uvagai/education/WhatsApp Image 2025-11-14 at 23.05.03.jpeg";
import edu28 from "../assets/uvagai/education/WhatsApp Image 2026-07-10 at 1.16.53 PM (4).jpeg";
import edu29 from "../assets/uvagai/education/WhatsApp Image 2026-07-10 at 1.16.53 PM (5).jpeg";
import edu30 from "../assets/uvagai/education/WhatsApp Image 2026-07-10 at 1.16.53 PM.jpeg";

// ---- elder ---- (renamed display category to "Senior Citizen Care")
import eld1 from "../assets/uvagai/elder/IMG-20190506-WA0001.jpg";
import eld2 from "../assets/uvagai/elder/IMG-20190506-WA0002.jpg";
import eld3 from "../assets/uvagai/elder/IMG-20190506-WA0007.jpg";
import eld4 from "../assets/uvagai/elder/IMG_5090.JPG";
import eld5 from "../assets/uvagai/elder/IMG_5098.JPG";
import eld6 from "../assets/uvagai/elder/IMG_5103.JPG";
import eld7 from "../assets/uvagai/elder/IMG_6391.JPG";
import eld8 from "../assets/uvagai/elder/IMG_6394.JPG";
import eld9 from "../assets/uvagai/elder/IMG_6399.JPG";
import eld10 from "../assets/uvagai/elder/IMG_6407.JPG";
import eld11 from "../assets/uvagai/elder/IMG_6423.JPG";
import eld12 from "../assets/uvagai/elder/IMG_6433.JPG";
import eld13 from "../assets/uvagai/elder/IMG_6439.JPG";
import eld14 from "../assets/uvagai/elder/IMG_E6307.JPG";
import eld15 from "../assets/uvagai/elder/IMG_E6317.JPG";
import eld16 from "../assets/uvagai/elder/IMG_E6410.JPG";
import eld17 from "../assets/uvagai/elder/IMG_E6412.JPG";
import eld18 from "../assets/uvagai/elder/IMG_E6413.JPG";
import eld19 from "../assets/uvagai/elder/WhatsApp Image 2025-03-11 at 3.12.32 PM (1).jpeg";
import eld20 from "../assets/uvagai/elder/WhatsApp Image 2025-03-11 at 3.13.45 PM (1).jpeg";

// ---- healthcare ----
import hc1 from "../assets/uvagai/healthcare/IMG_6566.JPG";
import hc2 from "../assets/uvagai/healthcare/IMG_6573.JPG";
import hc3 from "../assets/uvagai/healthcare/WhatsApp Image 2023-12-30 at 3.38.17 PM (2).jpeg";
import hc4 from "../assets/uvagai/healthcare/WhatsApp Image 2023-12-30 at 3.38.19 PM.jpeg";
import hc5 from "../assets/uvagai/healthcare/WhatsApp Image 2023-12-30 at 3.38.25 PM (1).jpeg";
import hc6 from "../assets/uvagai/healthcare/WhatsApp Image 2023-12-30 at 4.10.17 PM.jpeg";
import hc7 from "../assets/uvagai/healthcare/WhatsApp Image 2023-12-31 at 1.41.06 PM (1).jpeg";
import hc8 from "../assets/uvagai/healthcare/WhatsApp Image 2024-01-01 at 7.13.46 PM (3).jpeg";
import hc9 from "../assets/uvagai/healthcare/WhatsApp Image 2024-01-01 at 7.13.49 PM (1).jpeg";
import hc10 from "../assets/uvagai/healthcare/WhatsApp Image 2024-01-01 at 7.13.49 PM (2).jpeg";
import hc11 from "../assets/uvagai/healthcare/WhatsApp Image 2024-01-01 at 7.13.50 PM (1).jpeg";
import hc12 from "../assets/uvagai/healthcare/WhatsApp Image 2024-01-01 at 7.13.50 PM (2).jpeg";
import hc13 from "../assets/uvagai/healthcare/WhatsApp Image 2024-01-01 at 7.13.51 PM (1).jpeg";
import hc14 from "../assets/uvagai/healthcare/WhatsApp Image 2024-01-01 at 7.13.52 PM.jpeg";
import hc15 from "../assets/uvagai/healthcare/WhatsApp Image 2024-04-09 at 1.02.35 PM.jpeg";
import hc16 from "../assets/uvagai/healthcare/WhatsApp Image 2024-04-09 at 1.02.37 PM.jpeg";
import hc17 from "../assets/uvagai/healthcare/WhatsApp Image 2024-04-09 at 1.02.39 PM (1).jpeg";
import hc18 from "../assets/uvagai/healthcare/WhatsApp Image 2025-10-11 at 7.36.33 PM.jpeg";
import hc19 from "../assets/uvagai/healthcare/WhatsApp Image 2025-10-11 at 7.37.42 PM (1).jpeg";
import hc20 from "../assets/uvagai/healthcare/WhatsApp Image 2025-10-11 at 7.37.42 PM.jpeg";

// ---- placement ----
import pl1 from "../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.52.57 PM.jpeg";
import pl2 from "../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.53.06 PM.jpeg";
import pl3 from "../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.53.59 PM.jpeg";
import pl4 from "../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.54.02 PM.jpeg";
import pl5 from "../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.54.04 PM.jpeg";
import pl6 from "../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.54.08 PM.jpeg";
import pl7 from "../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.54.16 PM.jpeg";
import pl8 from "../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.54.18 PM.jpeg";
import pl9 from "../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.54.19 PM.jpeg";
import pl10 from "../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.54.21 PM.jpeg";
import pl11 from "../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.54.23 PM.jpeg";

// ---- skilldevelopment ----
import sd1 from "../assets/uvagai/skilldevelopment/BLEP5955.JPG";
import sd2 from "../assets/uvagai/skilldevelopment/BNUW8073.JPG";
import sd3 from "../assets/uvagai/skilldevelopment/HUQT7200.JPG";
import sd4 from "../assets/uvagai/skilldevelopment/IMG_0285.JPG";
import sd5 from "../assets/uvagai/skilldevelopment/IMG_0287.JPG";
import sd6 from "../assets/uvagai/skilldevelopment/IMG_0294.JPG";
import sd7 from "../assets/uvagai/skilldevelopment/IMG_0301.JPG";
import sd8 from "../assets/uvagai/skilldevelopment/IMG_2342.JPG";
import sd9 from "../assets/uvagai/skilldevelopment/IMG_2828.JPG";
import sd10 from "../assets/uvagai/skilldevelopment/IMG_2831.JPG";
import sd11 from "../assets/uvagai/skilldevelopment/IMG_2991.JPG";
import sd12 from "../assets/uvagai/skilldevelopment/WhatsApp Image 2023-01-15 at 2.38.32 PM.jpeg";

// ---------- BUILD GALLERY ITEMS ----------
const galleryItems = [
  // childewelfare
  { image: cw1, category: "childewelfare", accent: "blue" },
  { image: cw2, category: "childewelfare", accent: "blue" },
  { image: cw3, category: "childewelfare", accent: "blue" },
  { image: cw4, category: "childewelfare", accent: "blue" },
  { image: cw5, category: "childewelfare", accent: "blue" },
  { image: cw6, category: "childewelfare", accent: "blue" },
  { image: cw7, category: "childewelfare", accent: "blue" },
  { image: cw8, category: "childewelfare", accent: "blue" },
  { image: cw9, category: "childewelfare", accent: "blue" },
  { image: cw10, category: "childewelfare", accent: "blue" },
  { image: cw11, category: "childewelfare", accent: "blue" },
  { image: cw12, category: "childewelfare", accent: "blue" },
  { image: cw13, category: "childewelfare", accent: "blue" },
  { image: cw14, category: "childewelfare", accent: "blue" },
  { image: cw15, category: "childewelfare", accent: "blue" },
  { image: cw16, category: "childewelfare", accent: "blue" },
  { image: cw17, category: "childewelfare", accent: "blue" },
  { image: cw18, category: "childewelfare", accent: "blue" },
  { image: cw19, category: "childewelfare", accent: "blue" },
  { image: cw20, category: "childewelfare", accent: "blue" },

  // community
  { image: com21, category: "community", accent: "green" },
  { image: com22, category: "community", accent: "green" },
  { image: com1, category: "community", accent: "green" },
  { image: com2, category: "community", accent: "green" },
  { image: com3, category: "community", accent: "green" },
  { image: com4, category: "community", accent: "green" },
  { image: com5, category: "community", accent: "green" },
  { image: com6, category: "community", accent: "green" },
  { image: com7, category: "community", accent: "green" },
  { image: com8, category: "community", accent: "green" },
  { image: com9, category: "community", accent: "green" },
  { image: com10, category: "community", accent: "green" },
  { image: com11, category: "community", accent: "green" },
  { image: com12, category: "community", accent: "green" },
  { image: com13, category: "community", accent: "green" },
  { image: com14, category: "community", accent: "green" },
  { image: com15, category: "community", accent: "green" },
  { image: com16, category: "community", accent: "green" },
  { image: com17, category: "community", accent: "green" },
  { image: com18, category: "community", accent: "green" },
  { image: com19, category: "community", accent: "green" },
  { image: com20, category: "community", accent: "green" },

  // csr
  { image: csr1, category: "csr", accent: "blue" },
  { image: csr2, category: "csr", accent: "blue" },
  { image: csr3, category: "csr", accent: "blue" },
  { image: csr4, category: "csr", accent: "blue" },
  { image: csr5, category: "csr", accent: "blue" },
  { image: csr6, category: "csr", accent: "blue" },
  { image: csr7, category: "csr", accent: "blue" },
  { image: csr8, category: "csr", accent: "blue" },
  { image: csr9, category: "csr", accent: "blue" },
  { image: csr10, category: "csr", accent: "blue" },
  { image: csr11, category: "csr", accent: "blue" },
  { image: csr12, category: "csr", accent: "blue" },
  { image: csr13, category: "csr", accent: "blue" },
  { image: csr14, category: "csr", accent: "blue" },
  { image: csr15, category: "csr", accent: "blue" },
  { image: csr16, category: "csr", accent: "blue" },
  { image: csr17, category: "csr", accent: "blue" },
  { image: csr18, category: "csr", accent: "blue" },
  { image: csr19, category: "csr", accent: "blue" },
  { image: csr20, category: "csr", accent: "blue" },

  // education
  { image: edu1, category: "education", accent: "red" },
  { image: edu2, category: "education", accent: "red" },
  { image: edu3, category: "education", accent: "red" },
  { image: edu4, category: "education", accent: "red" },
  { image: edu5, category: "education", accent: "red" },
  { image: edu6, category: "education", accent: "red" },
  { image: edu7, category: "education", accent: "red" },
  { image: edu8, category: "education", accent: "red" },
  { image: edu9, category: "education", accent: "red" },
  { image: edu10, category: "education", accent: "red" },
  { image: edu11, category: "education", accent: "red" },
  { image: edu12, category: "education", accent: "red" },
  { image: edu13, category: "education", accent: "red" },
  { image: edu14, category: "education", accent: "red" },
  { image: edu15, category: "education", accent: "red" },
  { image: edu16, category: "education", accent: "red" },
  { image: edu17, category: "education", accent: "red" },
  { image: edu18, category: "education", accent: "red" },
  { image: edu19, category: "education", accent: "red" },
  { image: edu20, category: "education", accent: "red" },
  { image: edu21, category: "education", accent: "red" },
  { image: edu22, category: "education", accent: "red" },
  { image: edu23, category: "education", accent: "red" },
  { image: edu24, category: "education", accent: "red" },
  { image: edu25, category: "education", accent: "red" },
  { image: edu26, category: "education", accent: "red" },
  { image: edu27, category: "education", accent: "red" },
  { image: edu28, category: "education", accent: "red" },
  { image: edu29, category: "education", accent: "red" },
  { image: edu30, category: "education", accent: "red" },

  // elder → display as "Senior Citizen Care"
  { image: eld1, category: "Senior Citizen Care", accent: "green" },
  { image: eld2, category: "Senior Citizen Care", accent: "green" },
  { image: eld3, category: "Senior Citizen Care", accent: "green" },
  { image: eld4, category: "Senior Citizen Care", accent: "green" },
  { image: eld5, category: "Senior Citizen Care", accent: "green" },
  { image: eld6, category: "Senior Citizen Care", accent: "green" },
  { image: eld7, category: "Senior Citizen Care", accent: "green" },
  { image: eld8, category: "Senior Citizen Care", accent: "green" },
  { image: eld9, category: "Senior Citizen Care", accent: "green" },
  { image: eld10, category: "Senior Citizen Care", accent: "green" },
  { image: eld11, category: "Senior Citizen Care", accent: "green" },
  { image: eld12, category: "Senior Citizen Care", accent: "green" },
  { image: eld13, category: "Senior Citizen Care", accent: "green" },
  { image: eld14, category: "Senior Citizen Care", accent: "green" },
  { image: eld15, category: "Senior Citizen Care", accent: "green" },
  { image: eld16, category: "Senior Citizen Care", accent: "green" },
  { image: eld17, category: "Senior Citizen Care", accent: "green" },
  { image: eld18, category: "Senior Citizen Care", accent: "green" },
  { image: eld19, category: "Senior Citizen Care", accent: "green" },
  { image: eld20, category: "Senior Citizen Care", accent: "green" },

  // healthcare
  { image: hc1, category: "healthcare", accent: "green" },
  { image: hc2, category: "healthcare", accent: "green" },
  { image: hc3, category: "healthcare", accent: "green" },
  { image: hc4, category: "healthcare", accent: "green" },
  { image: hc5, category: "healthcare", accent: "green" },
  { image: hc6, category: "healthcare", accent: "green" },
  { image: hc7, category: "healthcare", accent: "green" },
  { image: hc8, category: "healthcare", accent: "green" },
  { image: hc9, category: "healthcare", accent: "green" },
  { image: hc10, category: "healthcare", accent: "green" },
  { image: hc11, category: "healthcare", accent: "green" },
  { image: hc12, category: "healthcare", accent: "green" },
  { image: hc13, category: "healthcare", accent: "green" },
  { image: hc14, category: "healthcare", accent: "green" },
  { image: hc15, category: "healthcare", accent: "green" },
  { image: hc16, category: "healthcare", accent: "green" },
  { image: hc17, category: "healthcare", accent: "green" },
  { image: hc18, category: "healthcare", accent: "green" },
  { image: hc19, category: "healthcare", accent: "green" },
  { image: hc20, category: "healthcare", accent: "green" },

  // placement
  { image: pl1, category: "placement", accent: "orange" },
  { image: pl2, category: "placement", accent: "orange" },
  { image: pl3, category: "placement", accent: "orange" },
  { image: pl4, category: "placement", accent: "orange" },
  { image: pl5, category: "placement", accent: "orange" },
  { image: pl6, category: "placement", accent: "orange" },
  { image: pl7, category: "placement", accent: "orange" },
  { image: pl8, category: "placement", accent: "orange" },
  { image: pl9, category: "placement", accent: "orange" },
  { image: pl10, category: "placement", accent: "orange" },
  { image: pl11, category: "placement", accent: "orange" },

  // skilldevelopment
  { image: sd1, category: "skilldevelopment", accent: "red" },
  { image: sd2, category: "skilldevelopment", accent: "red" },
  { image: sd3, category: "skilldevelopment", accent: "red" },
  { image: sd4, category: "skilldevelopment", accent: "red" },
  { image: sd5, category: "skilldevelopment", accent: "red" },
  { image: sd6, category: "skilldevelopment", accent: "red" },
  { image: sd7, category: "skilldevelopment", accent: "red" },
  { image: sd8, category: "skilldevelopment", accent: "red" },
  { image: sd9, category: "skilldevelopment", accent: "red" },
  { image: sd10, category: "skilldevelopment", accent: "red" },
  { image: sd11, category: "skilldevelopment", accent: "red" },
  { image: sd12, category: "skilldevelopment", accent: "red" },
];

// Add title & description – capitalise first letter except for "Senior Citizen Care"
galleryItems.forEach((item) => {
  if (item.category === "Senior Citizen Care") {
    item.title = "Senior Citizen Care";
    item.description = "Images from Senior Citizen Care activities.";
  } else {
    const displayName = item.category.charAt(0).toUpperCase() + item.category.slice(1);
    item.title = displayName;
    item.description = `Images from ${displayName} activities.`;
  }
});

// ---------- EXTRACT UNIQUE CATEGORIES ----------
const categorySet = new Set(galleryItems.map((item) => item.category));
const categories = ["All", ...Array.from(categorySet)];

export default function GalleryPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  return (
    <div className="glp-page" ref={sectionRef}>
      <section className="glp-hero">
        <div className="glp-hero-bg" />
        <div className="glp-hero-glow glp-hero-glow-1" />
        <div className="glp-hero-glow glp-hero-glow-2" />
        <div className="glp-container">
          <motion.div
            className="glp-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="glp-hero-tag">
              <span className="glp-hero-tag-line" />
              <span className="glp-hero-tag-text">Gallery</span>
            </div>
            <h1 className="glp-hero-headline">
              Capturing Moments Of <span className="glp-hero-accent">Impact</span>
            </h1>
            <p className="glp-hero-desc">
              Explore the journey of Uvagai Foundation through our initiatives
              and social impact projects.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="glp-filter-section">
        <div className="glp-container">
          <motion.div
            className="glp-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`glp-filter-btn ${filter === category ? "glp-filter-active" : ""}`}
                onClick={() => {
                  setFilter(category);
                  setVisibleCount(12);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
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
                  key={`${item.category}-${index}`}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.02 }}
                  layout
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="glp-card-media">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="glp-card-shade" />
                    <div className="glp-card-badge">
                      <span className={`glp-card-dot glp-dot-${item.accent}`} />
                      <span className="glp-card-badge-text">{item.category}</span>
                    </div>
                    <div className="glp-card-view">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M1 9C3 4.5 6 2 9 2C12 2 15 4.5 17 9C15 13.5 12 16 9 16C6 16 3 13.5 1 9Z" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="glp-card-body">
                    <h3 className="glp-card-title">{item.title}</h3>
                    <p className="glp-card-text">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {hasMore && (
            <motion.div className="glp-load-more" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <button className="glp-load-btn" onClick={() => setVisibleCount((prev) => prev + 12)}>
                View More
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="glp-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="glp-lightbox-dialog"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="glp-lightbox-close" onClick={() => setSelectedImage(null)}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <div className="glp-lightbox-image">
                <img src={selectedImage.image} alt={selectedImage.title} />
              </div>
              <div className="glp-lightbox-info">
                <span className={`glp-lightbox-cat glp-cat-${selectedImage.accent}`}>
                  {selectedImage.category}
                </span>
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