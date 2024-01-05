import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-gray-800 text-gray-100">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        {/* brand logo  */}
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400"></div>
            <span className="self-center text-2xl font-semibold">
              Brand name
            </span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start text-sm gap-x-3 gap-y-8 lg:w-2/3 ">
          {/* useful links  */}
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:text-gray-50">useful links</h3>
            <ul className="space-y-1">
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/service"}>Services</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/qna"}>Q & A</Link>
              </li>
              <li>
                <a href="https://www.rpsa.org.uk/">RPSA</a>
              </li>
              <li>
                <a href="https://epcgasspecialist.co.uk/">EPC Services</a>
              </li>
            </ul>
          </div>

          {/* social media */}
          <div className="space-y-3">
            <div className="uppercase dark:text-gray-50">Social media</div>
            <div className="flex justify-start space-x-3 text-xl">
              <FaFacebook />
              <FaXTwitter />
              <IoLogoWhatsapp />
            </div>
          </div>

          {/* contact us  */}
          <div className="space-y-3">
            <h3 className="uppercase text-gray-50">Contact</h3>
            <ul className="space-y-1 flex flex-col justify-start items-start">
              <div className="flex justify-center items-center gap-2 text-gray-50 text-base">
                <IoCall />
                <div>07898232710</div>
              </div>
              <div className="flex justify-center items-center gap-2 text-gray-50 text-base">
                <MdEmail />
                <div>info@homesurveysspecialist.co.uk</div>
              </div>
              <div className="flex justify-center items-center gap-2 text-gray-50 text-base">
                <FaLocationDot />
                <div>16 Titan Court, Laporte Way, Luton, England, LU4 8EF </div>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="py-6 text-sm text-center text-gray-400">
        © 2023 Copyright:{" "}
        <Link to={"/"} className="font-bold text-gray-100">
          Home Surveys Specialist LTD
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
