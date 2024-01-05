import Device from "../assets/device1.jpg"
import House2 from "../assets/house2.jpg"
import house7 from "../assets/house7.jpg"

const WhyChooseUs = () => {

  const items = [
    {
      key: 1,
      image: Device,
      title: "Qualified Specialists",
      description:
        "Our team of friendly qualified professionals and experienced surveyors equipped with the latest technology are able to carry out a wide range of home surveys in compliance with industry best practice standards.",
    },
    {
      key: 2,
      image: House2,
      title: "Caring for your interests",
      description:
        "We strive to support you by putting your interests first! We aim to make the whole process efficient, simple and easy to understand saving you time and stress. <br/> We provide a post-survey consultation to go through the report thoroughly and help you with any questions of concern or advice you need, to give you the peace of mind that you are making the right decisions.",
    },
    {
      key: 3,
      image: house7,
      title: "Registered Member of RPSA",
      description:
        "We are members of the RPSA (Residential Property Survey Association) means that we are dedicated to provide you the highest quality, value for money and reliable services.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-2 bg-gray-50">
      <h2 className="text-2xl font-medium font-serif text-center py-6 sm:pt-10">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-start pb-8 sm:pb-10">
        {items.map((item) => (
          <div key={item.key}>
            <img src={item.image} className="object-contain" />
            <h2 className="text-2xl font-medium font-serif my-2">
              {item.title}
            </h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>      
    </div>
  );
}

export default WhyChooseUs