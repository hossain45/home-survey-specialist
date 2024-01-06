import bgHs from "../../assets/bg-hs.jpg"
import menIcon from "../../assets/man-icon.png"
import houseIcon from "../../assets/house-icon.png"
import rpsaIcon from "../../assets/rpsa-icon.png"

const HomeSurvey = () => {
  const bgStyle = {
    backgroundImage: `url(${bgHs})`,
    backgroundRepeat: "repeat",
  };
  return (
    <div
      className="flex flex-col justify-center items-center py-8 sm:py-10 h-auto lg:h-[80vh]"
      style={bgStyle}
    >
      <h3 className="text-myColor uppercase text-center">
        ——{" "}
        <span className="text-white bg-slate-800 p-1 rounded-lg">
          Home Survey
        </span>{" "}
        ——
      </h3>
      <h2 className="font-bold text-2xl sm:text-4xl md:text-5xl text-white text-center py-6 sm:py-10 w-3/4">
        Need Your Home Surveyed?
      </h2>
      <div className="max-w-6xl sm:px-3 flex flex-col sm:flex-row justify-center items-center gap-1">
        {/* specialists */}
        <div className="flex flex-row sm:flex-col  justify-between items-center rounded-sm bg-myColor w-full sm:h-[250px] ">
          <div className=" sm:h-[200px] flex justify-center items-center">
            <img
              src={menIcon}
              alt="men icon"
              className="h-12 sm:h-20 w-12 sm:w-20 object-contain "
            ></img>
          </div>
          <p className="text-white font-semibold text-lg text-center p-4 sm:bg-black sm:min-h-20 w-full">
            QUALIFIED SPECIALISTS
          </p>
        </div>
        {/* caring */}
        <div className="flex flex-row sm:flex-col justify-between items-center rounded-sm bg-myColor w-full sm:h-[250px] ">
          <div className="sm:h-[200px] flex justify-center items-center">
            <img
              src={houseIcon}
              alt="men icon"
              className="h-12 sm:h-20 w-12 sm:w-20 object-contain"
            ></img>
          </div>
          <p className="text-white font-semibold text-lg text-center p-4 sm:bg-black sm:min-h-20 w-full">
            CARING FOR YOUR INTERESTS
          </p>
        </div>
        {/* 48 hour  */}
        <div className="flex flex-row sm:flex-col justify-between items-center rounded-sm bg-myColor w-full sm:h-[250px] ">
          <div className="sm:h-[200px] flex justify-center items-center">
            <div className="text-2xl sm:text-5xl font-extrabold text-white text-center p-4">
              48 HOUR
            </div>
          </div>
          <p className="text-white font-semibold text-lg text-center p-4 sm:bg-black sm:min-h-20 w-full">
            REPORT DELIVERY SERVICE
          </p>
        </div>
        {/* rpsa  */}
        <div className="flex flex-row sm:flex-col justify-between items-center rounded-sm bg-myColor w-full sm:h-[250px] ">
          <div className="sm:h-[200px] flex justify-center items-center">
            <img
              src={rpsaIcon}
              alt="men icon"
              className="h-12 w-16 sm:h-32 sm:w-32 object-contain "
            ></img>
          </div>
          <p className="text-white font-semibold text-lg text-center p-4 sm:bg-black sm:min-h-20 w-full">
            A REGISTERED MEMBER
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeSurvey