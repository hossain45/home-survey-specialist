import { Helmet } from "react-helmet"
import Hero from "../../SharedComponents/Hero"
import WhyChooseUs from "../../SharedComponents/WhyChooseUs"
import NeedHelp from "./NeedHelp"
import ServiceList from "./ServiceList"
const Service = () => {
  const title = "Our Service"
  const image = 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Services | Home Surveys Specialist</title>
      </Helmet>
      <Hero title={title} bgImage={image} />
      <ServiceList />
      <WhyChooseUs />
      <NeedHelp />
    </>
  );
}

export default Service