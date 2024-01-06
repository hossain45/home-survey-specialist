import CarouselHome from "./CarouselHome"
import HomeSurvey from "./HomeSurvey"
import WhoWeAre from "./WhoWeAre"
import WhoWeCanHelp from "./WhoWeCanHelp"
import GetInTouch from "./GetInTouch"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Surveys Specialist</title>
      </Helmet>
      <CarouselHome />
      <HomeSurvey />
      <WhoWeAre />
      <WhoWeCanHelp />
      <GetInTouch />
    </>
  );
}

export default Home