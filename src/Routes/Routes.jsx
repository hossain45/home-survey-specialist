import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service"
import About from "../Pages/About/About"
import QnA from "../Pages/QnA/QnA"
import Contact from "../Pages/Contact/Contact"
import Error from "../Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service",
        element: <Service />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/qna",
        element: <QnA />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ],
  },
]);

export default router;
