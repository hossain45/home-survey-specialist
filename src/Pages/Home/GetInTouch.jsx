import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <div className=" flex flex-col justify-center items-center py-5 sm:py-16 bg-gray-300">
      <p className="font-medium text-gray-600 text-base mb-5 w-2/3 text-center">
        If you need any help or advice on surveys and valuations, please don’t
        hesitate to call or email us, alternatively book now and request a
        survey and we will call you back.
      </p>
      <Link to={"/contact"}>
        <button className="myBtn">Get in touch</button>
      </Link>
    </div>
  );
}

export default GetInTouch