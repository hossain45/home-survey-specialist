import Hero from "../../SharedComponents/Hero";
import qnaHero from "../../assets/qna-hero.png";
import QnaCollapse from "./QnaCollapse"

const QnA = () => {
  const title = "Q & A"
  return (
    <>
      <Hero title={title} bgImage={qnaHero} />
      <QnaCollapse />
    </>
  )
}

export default QnA