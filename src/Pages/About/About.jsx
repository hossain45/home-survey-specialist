import Hero from "../../SharedComponents/Hero";
import WhyChooseUs from "../../SharedComponents/WhyChooseUs";
import WhyHomeSurvey from "./WhyHomeSurvey";

const About = () => {
  const title = "About Us"
  const image =
    "https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <>
      <Hero title={title} bgImage={image} />
      <WhyHomeSurvey />
      <WhyChooseUs />
    </>
  );
};

export default About;
