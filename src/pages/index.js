import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="JAlcocerT Portfolio" />
      {/* <Page useSplashScreenAnimation> */}
      <Page>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        
        {/* <InterestsSection sectionId="details" heading="Details" /> */}
        <ProjectsSection sectionId="Projects" heading="Projects" />
        {/* <ContactSection sectionId="github" heading="Issues?" /> */}

        <AboutSection sectionId="about" heading="About Me" />
      </Page>
    </>
  );
}
