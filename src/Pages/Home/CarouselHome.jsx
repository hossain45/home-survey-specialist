import { Carousel } from "antd";
import { Link } from "react-router-dom";

const CarouselHome = () => {

  const bgImages = [
  "https://images.pexels.com/photos/7710011/pexels-photo-7710011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/816198/pexels-photo-816198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5524167/pexels-photo-5524167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  
  const settings = {
    autoplay: true, 
    autoplaySpeed: 2000, 
  };

return (
  <div className="relative ">
    <Carousel autoplay {...settings}>
      {bgImages.map((image, index) => (
        <div key={index} className="h-[60vh] bg-cover relative">
          <img
            src={image}
            alt={`slide-${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </Carousel>
    <div className="absolute w-[250px] sm:w-[350px] md:w-[400px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-44 md:-translate-x-0 text-left z-10 flex flex-col justify-start gap-2 items-start  p-4 bg-myColor">
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white">
        Survey Your Home
      </h2>
      <p className="font-normal text-white mb-4 text-sm sm:text-base">
        We provide professional and comprehensive survey services for all types
        and size residential properties.
      </p>
      <Link to={'/about'} className=" bg-gray-800 text-sm text-white rounded-lg py-2 px-4 hover:bg-[#1a8cff]">
        Find out more
      </Link>
    </div>
  </div>
);
};

export default CarouselHome;
