import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className=" flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1633078654544-61b3455b9161?q=80&w=1045&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="404 error"
          className="h-4/5 w-2/3 object-cover"
        />
      </div>
      <Link to={"/"} className="myBtn hover:myBtn">
        Go Home
      </Link>
    </div>
  );
};

export default Error;
