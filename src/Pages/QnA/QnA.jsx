import { Helmet } from "react-helmet";
import Hero from "../../SharedComponents/Hero";
import QnaCollapse from "./QnaCollapse"

const QnA = () => {
  const title = "Q & A"
  const image =
    "https://images.pexels.com/photos/3935346/pexels-photo-3935346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>QnA | Home Surveys Specialist</title>
      </Helmet>
      <Hero title={title} bgImage={image} />
      <QnaCollapse />
    </>
  );
}

export default QnA