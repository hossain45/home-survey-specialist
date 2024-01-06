
const WhoWeAre = () => {
  // parallax effect 
  const bgStyle = {
    backgroundImage:
      'url("https://images.pexels.com/photos/3707673/pexels-photo-3707673.jpeg?auto=compress&cs=tinysrgb&w=300")',
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    minHeight: "500px",
  };

  // overlay for background
  const overlayStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div className="relative">
      <div  style={bgStyle}>
        <div className="flex flex-col justify-center items-center absolute z-10 w-full mx-auto h-full my-auto">
          <h3 className="text-myColor uppercase text-center">
            —— Who We Can Help ——
          </h3>
          <h2 className="font-bold text-2xl sm:text-4xl md:text-5xl text-black text-center py-6 sm:py-10 w-3/4">
            Let us help you to choose the right survey for you
          </h2>
          <p className="font-semibold text-gray-900 text-base w-4/5 max-w-4xl text-center mx-auto mb-3">
            Covering London and surrounding areas
          </p>
          <p className="font-semibold text-black text-xl mb-5 w-4/5 max-w-4xl text-center mx-auto">
            If you need any help or advice on surveys and valuations, please don’t
            hesitate to call or email us, alternatively book now and request a
            survey and we will call you back.
          </p>
        </div>
      </div>
      <div className=" object-center opacity-80" style={overlayStyle}></div>
    </div>
  );
}

export default WhoWeAre