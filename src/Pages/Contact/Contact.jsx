import Hero from "../../SharedComponents/Hero"
import ContactForm from "./ContactForm"
import contactHero from "../../assets/contact-hero.jpeg"
const Contact = () => {
  const title = "Contact Us"
  return (
    <>
      <Hero title={title} bgImage={contactHero} />
      <ContactForm />
    </>
  );
}

export default Contact