import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const ContactForm = () => {
  return (
    <div className="max-w-7xl mx-2 sm:mx-4 lg:mx-0 my-10 md:my-16 lg:my-20 flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-start gap-1">
      <form className="flex flex-col justify-start items-start gap-5 w-full">
        <h1 className="text-2xl font-normal text-left mb-2">
          LET&apos;S GET IN TOUCH
        </h1>
        {/* name  */}
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-base">Full Name</h4>
          <input
            type="name"
            name="name"
            required
            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200  placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#991e14]  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 duration-200 focus:placeholder-shown:pl-2 focus:placeholder-shown:opacity-100"
            placeholder="John Doe"
          />
        </div>
        {/* phone number  */}
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-base">Phone Number</h4>
          <input
            type="text"
            name="number"
            required
            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200  placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#991e14]  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 duration-200 focus:placeholder-shown:pl-2 focus:placeholder-shown:opacity-100"
            placeholder="07898232710"
          />
        </div>
        {/* email  */}
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-base">Email</h4>
          <input
            type="email"
            name="email"
            required
            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200  placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#991e14]  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 duration-200 focus:placeholder-shown:pl-2 focus:placeholder-shown:opacity-100"
            placeholder="homesurvey@example.com"
          />
        </div>
        {/* message  */}
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-base">Message</h4>
          <textarea
            type="text"
            name="message"
            required
            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200  placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#991e14]  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 duration-200 focus:placeholder-shown:pl-2 focus:placeholder-shown:opacity-100"
            placeholder="Message..."
          />
        </div>
        <button className="myBtn">Send</button>
      </form>
      <div className="flex flex-col justify-start items-start gap-3 w-full">
        <h1 className="text-2xl font-normal text-left mb-3 sm:mb-8 mt-6 sm:mt-0">
          CONTACT US
        </h1>
        <div className="flex justify-center items-center gap-4 pl-3">
          <IoCall className="text-[#991e14] text-xl" />
          <div className="text-2xl font-bold">07898232710</div>
        </div>
        <div className="flex justify-center items-center gap-4 pl-3">
          <MdEmail className="text-[#991e14] text-xl" />
          <div className="text-base font-light">
            info@homesurveysspecialist.co.uk
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 pl-3">
          <FaLocationDot className="text-[#991e14] text-xl" />
          <div className="text-base font-light">
            16 Titan Court, Laporte Way, Luton, England, LU4 8EF{" "}
          </div>
        </div>
        <h1 className="text-2xl font-normal text-left m-3">SOCIAL MEDIA</h1>
        <div className="flex justify-center items-start gap-3 text-2xl text-[#991e14] pl-3">
          <FaFacebook />
          <FaXTwitter />
          <IoLogoWhatsapp />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
