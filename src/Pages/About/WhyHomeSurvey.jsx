
const WhyHomeSurvey = () => {
  return (
    <div className="max-w-4xl mx-auto px-2 my-10 md:my-16 lg:my-20">
      <p className="font-light text-gray-800 text-base mb-5 sm:mb-10">
        Home Surveys Specialist LTD provides an independent survey of
        residential properties in London and surrounding areas. As a member of
        the Residential Property Surveyors Association (RPSA), we are dedicated
        to provide our clients high quality professional help and reliable
        advice on their journey to purchase a property. We have extensive
        experience and use the latest technology and equipments for a completely
        thorough and accurate home buyer report and condition survey.
      </p>
      <div className="flex flex-col-reverse sm:flex-row justify-start sm:justify-between items-start gap-3">
        <div className="sm:max-w-96">
          <h2 className="text-black text-2xl  font-serif font-medium mb-3">
            Why you need a Home Survey?
          </h2>
          <p className="text-black text-base font-light">
            A home survey and report has become essential for home buyers before
            making commitments to a purchase. <br />
            It arms the buyer to have a comprehensive awareness of the true
            condition of the property and know if they are paying the right
            price. Having a survey can reveal any defects and expose any health
            and safety issues and avoid any hidden surprises and further
            regrets.
            <br />
            It can save thousands of pound repair bills and used as a leverage
            to negotiate the price. RPSA surveys are designed to help and
            support the buyer to have a peace of mind and reassurance, removing
            stress and confusion in the important decision making process.
          </p>
        </div>
        <iframe
          className="w-full aspect-video rounded-lg sm:max-w-[500px]"
          src="https://www.youtube.com/embed/sknVtLSAea4?si=hkO1V1AiXy0l0AtC"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default WhyHomeSurvey