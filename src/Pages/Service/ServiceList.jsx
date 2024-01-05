import rpsa1 from "../../assets/rpsa1.jpg"
import rpsa2 from "../../assets/rpsa2.jpg"
import rpsa3 from "../../assets/rpsa3.jpg"
import rpsa4 from "../../assets/rpsa4.jpg"
const ServiceList = () => {
  const items = [
    {
      key: 1,
      image: rpsa1,
      title: "Home Buyer/Condition Survey",
      description:
        "A survey report format designed to reflect the condition of a traditional property that is more modern, of standard construction and not too big or complicated.",
      descriptionList: [
        "Clear colour coded condition ratings for quick identification of the important issues",
        "Multiple photographs and diagrams, helping you understand your new home",
        "A jargon-free report that avoids many of the annoying caveats and exclusions often found in home buyer reports",
        "A full debrief from the surveyor who will answer any questions you may have",
      ],
    },
    {
      key: 2,
      image: rpsa2,
      title: "Building Survey",
      description:
        "Ideally suited to larger, more complex, older, extended or higher value homes.",
      descriptionList: [
        "All the benefits of the Home Buyer/Condition Survey, plus...",
        "More comprehensive descriptions of construction and defects",
        "Explanations of how to go about rectifying defects",
        "Consequences of not carrying out repairs Understanding potential defects that could be present",
      ],
    },
    {
      key: 3,
      image: rpsa3,
      title: "Buy To Let Survey",
      description:
        "The only survey of its type, designed for a traditional property that is, or will be, let to tenants. A unique product that helps landlords protect their investment while safeguarding the safety of the home for tenants.",
      descriptionList: [
        "All the benefits of the Home Condition Survey, plus...",
        "Consideration of health and safety matters that are likely to have an impact on tenants occupying the property - considers all 29 hazard profiles identified in the Housing Health & Safety Rating System (HHSRS)*",
        "Separate DASH - Decent & Safe Homes hazard review report",
        "*Does not include a full assessment of hazard scores as defined by HHSRS",
      ],
    },
    {
      key: 4,
      image: rpsa4,
      title: "New-build Snagging Survey",
      description: "A must for any newly constructed home",
      descriptionList: [
        "The ONLY survey of its type based on industry-compatible standards",
        "Identifies 'snags' in finishing quality",
        "Designed to help avoid buyer/developer conflict by impartially identifying incomplete or cosmetically unacceptable works",
        "Focus on the parts of the property you see, touch and use every day",
      ],
    },
  ];

  const dynamicClass = item => item.key % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'; 

  return (
    <div className="max-w-4xl mx-auto px-2 my-10 md:my-16 lg:my-20">
      <p className="text-black text-base font-light">
        Home Surveys Specialist provides an independent survey of residential
        properties in London and surrounding areas. As a member of the
        Residential Property Surveyors Association (RPSA), we are dedicated to
        provide our clients high quality professional help and reliable advice
        on their journey to purchase a property. We have extensive experience
        and use the latest technology and equipments for a completely thorough
        and accurate home buyer report and condition survey.
      </p>
      <div>
        {items.map((item) => (
          <div
            key={item.key}
            className={`flex flex-col ${dynamicClass(item)} gap-5 justify-start items-center my-8`}
          >
            {/* image */}
            <div className="w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover"
              />
            </div>
            {/* description */}
            <div className="sm:w-full">
              <h5 className="text-orange-400 font-bold">RPSA</h5>
              <h2 className="text-2xl font-medium font-serif ">{item.title}</h2>
              <p className="text-black text-sm font-light">
                {item.description}
              </p>
              <ul className="pl-6 pt-4 list-disc">
                {item.descriptionList.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceList