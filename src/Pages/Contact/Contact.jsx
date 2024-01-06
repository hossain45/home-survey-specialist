import { Helmet } from "react-helmet";
import Hero from "../../SharedComponents/Hero"
import ContactForm from "./ContactForm"
const Contact = () => {
  const title = "Contact Us"
  const image =
    "https://images.pexels.com/photos/8031881/pexels-photo-8031881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | Home Surveys Specialist</title>
      </Helmet>
      <Hero title={title} bgImage={image} />
      <ContactForm />
    </>
  );
}

export default Contact