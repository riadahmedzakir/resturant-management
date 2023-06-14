import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error/Error";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Resturant from "../components/Resturant/Resturant";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import UserReview from "../components/UserReview/UserReview";
import ResturantContainer from "../components/Resturant/ResturantContainer";
import Product from "../components/Resturant/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/resturants",
        element: <ResturantContainer />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/resturants",
            element: <Resturant />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/resturants/:id",
            element: <Product />,
            errorElement: <ErrorPage />,
          },
        ]
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/profile",
        element: <UserReview />,
        errorElement: <ErrorPage />,
      }
    ]
  }
]);

export default router;