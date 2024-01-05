import Hero from "../../SharedComponents/Hero"
import WhyChooseUs from "../../SharedComponents/WhyChooseUs"
import NeedHelp from "./NeedHelp"
import ServiceList from "./ServiceList"
const Service = () => {
  const title = "Our Service"
  return (
    <>
      <Hero title={ title } />
      <ServiceList />
      <WhyChooseUs />
      <NeedHelp />
    </>
  )
}

export default Service