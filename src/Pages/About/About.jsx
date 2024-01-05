import Hero from "../../SharedComponents/Hero";
import WhyChooseUs from "../../SharedComponents/WhyChooseUs";
import aboutHero from "../../assets/about-hero1.jpg";
import WhyHomeSurvey from "./WhyHomeSurvey";

const About = () => {
  const title = "About Us"

  return (
    <>
      <Hero title={title} bgImage={aboutHero} />
      <WhyHomeSurvey />
      <WhyChooseUs />
    </>
  );
};

export default About;
