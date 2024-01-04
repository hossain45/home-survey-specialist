
// eslint-disable-next-line react/prop-types
const Hero = ({ title, bgImage }) => {
  const heroStyle = {
    backgroundImage: `url(${bgImage})`,
    objectFit: 'cover'
  }

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "200px",
  };
  return (
    <div className="relative">
      <div className="h-[200px] flex justify-center items-center" style={heroStyle}>
        <h1 className="absolute z-10 text-white text-center font-bold text-2xl sm:text-5xl">{title}</h1>
      </div>
      <div className="h-[200px] object-center opacity-40" style={overlayStyle}></div>
    </div>

  )
}

export default Hero