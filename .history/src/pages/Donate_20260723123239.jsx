import React, { useState } from "react";

import {
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";

import {
  BsArrowUpRight,
  BsStars,
} from "react-icons/bs";

import {
  InstagramEmbed,
  FacebookEmbed,
} from "react-social-media-embed";

import "./SocialWall.css";

/* =========================================================
   INSTAGRAM POSTS
========================================================= */

const instagramPosts = [
  "https://www.instagram.com/p/Bo4IFb5nUjm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/Bo7E2DTHd6p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/BrvCk-1jhSY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/BsDo5KEjTzP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
];

/* =========================================================
   FACEBOOK POSTS — replace with your real post/video URLs
========================================================= */

const facebookPosts = [
  "https://www.facebook.com/facebook/posts/10153231379946729",
  "https://www.facebook.com/facebook/posts/10153231379946729",
];

/* Merge into one list, each tagged with its platform */
const allPosts = [
  ...instagramPosts.map((url) => ({ url, platform: "instagram" })),
  ...facebookPosts.map((url) => ({ url, platform: "facebook" })),
];

/* =========================================================
   COMPONENT
========================================================= */

export default function SocialWall() {

  const [activeTab, setActiveTab] = useState("instagram");

  const posts = allPosts.filter((post) => post.platform === activeTab);

  return (

    <section className="instagramWallSection">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="socialGlow glowLeft"></div>
      <div className="socialGlow glowRight"></div>

      {/* =========================================================
          HEADER
      ========================================================== */}

      <div className="instagramWallHeader">

        {/* <div className="socialBadge">

          <BsStars />

          Live Instagram Stories

        </div> */}

        <div className="instagramHeaderGrid">

          <div className="instagramHeaderLeft">

            <h2>

             Connecting
  Every
  Space.


            </h2>

          </div>

          <div className="instagramHeaderRight">

            <p>

             Follow our latest Mobile Signal Booster
  installations, RF engineering projects,
  DAS deployments, and enterprise wireless
  connectivity solutions across India.
            </p>

          </div>

        </div>

        {/* =========================================================
            PLATFORM TABS
        ========================================================== */}

        <div className="socialTabs">

          <button
            type="button"
            className={`socialTabBtn ${activeTab === "instagram" ? "active" : ""}`}
            onClick={() => setActiveTab("instagram")}
          >
            <FaInstagram />
            Instagram
          </button>

          <button
            type="button"
            className={`socialTabBtn ${activeTab === "facebook" ? "active" : ""}`}
            onClick={() => setActiveTab("facebook")}
          >
            <FaFacebook />
            Facebook
          </button>

        </div>

      </div>

      {/* =========================================================
          RUNNING CARDS
      ========================================================== */}

      <div className="instagramMarqueeWrapper">

        <div className="instagramMarqueeTrack" key={activeTab}>

          {[...posts, ...posts].map(
            ({ url, platform }, index) => (

              <div
                className={`instagramCard ${platform === "facebook" ? "facebookCard" : ""}`}
                key={index}
              >

                {/* TOP */}

                <div className="instagramCardTop">

                  <div className="instagramProfile">

                    <div className={`instagramIcon ${platform === "facebook" ? "facebookIcon" : ""}`}>

                      {platform === "facebook" ? <FaFacebook /> : <FaInstagram />}

                    </div>

                    <div>

                      <h4>

                        futuremax

                      </h4>

                      <span>

                        {/* Social Impact Foundation */}

                      </span>

                    </div>

                  </div>

                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="visitBtn"
                  >

                    <BsArrowUpRight />

                  </a>

                </div>

                {/* EMBED */}

                <div className="instagramEmbedWrapper">

                  {platform === "facebook" ? (
                    <FacebookEmbed
                      url={url}
                      width="100%"
                    />
                  ) : (
                    <InstagramEmbed
                      url={url}
                      width="100%"
                    />
                  )}

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>

  );

}