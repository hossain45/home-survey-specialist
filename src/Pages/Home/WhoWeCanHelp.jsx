import { Link } from "react-router-dom";
import rpsa1 from "../../assets/rpsa1.jpg";
import rpsa2 from "../../assets/rpsa2.jpg";
import rpsa3 from "../../assets/rpsa3.jpg";
import rpsa4 from "../../assets/rpsa4.jpg";

const WhoWeCanHelp = () => {
  // content for cards
  const items = [
    {
      key: 1,
      image: rpsa1,
      title: "Home Buyer/Condition Survey",
      description:
        "A survey report format designed to reflect the condition of a traditional property that is more modern, of standard construction and not too big or complicated.",
    },
    {
      key: 2,
      image: rpsa2,
      title: "Building Survey",
      description:
        "Ideally suited to larger, more complex, older, extended or higher value homes.",
    },
    {
      key: 3,
      image: rpsa3,
      title: "Buy To Let Survey",
      description:
        "The only survey of its type, designed for a traditional property that is, or will be, let to tenants. A unique product that helps landlords protect their investment while safeguarding the safety of the home for tenants.",
    },
    {
      key: 4,
      image: rpsa4,
      title: "New-build Snagging Survey",
      description: "A must for any newly constructed home",
    },
  ];
  
  return (
    <div className="flex flex-col justify-center items-center py-5 sm:py-10 bg-gray-100">
      <h3 className="text-myColor uppercase text-center">       
        —— Who We Can Help ——
      </h3>
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-black text-center py-6 sm:py-10 w-4/5">
        Let us help you to choose the right survey for you
      </h2>
      {/* card container */}
      <div className="m-3 sm:m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 justify-items-stretch ">
        {items.map((item) => (
          <div key={item.key} className="w-full flex flex-col justify-between items-start bg-white rounded-lg shadow-lg">
            <div className="flex flex-col justify-start items-start">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full"
              />
              <div className="p-2 flex flex-col justify-start items-start">
                <h5 className="text-orange-400 font-bold">RPSA</h5>
                <h2 className="text-2xl font-medium font-serif ">{item.title}</h2>
                <p className="text-black text-sm font-light">
                  {item.description}
                </p>     
              </div>
            </div>
              <Link to={'/contact'} className="m-2 mt-4 ">
                <button className="myBtn text-base">Get QUOTE</button>
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeCanHelp;
