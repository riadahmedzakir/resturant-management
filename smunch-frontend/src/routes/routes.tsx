import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import ErrorPage from "../components/Error/Error";
import Home from "../components/Home/Home";
import Product from "../components/Resturant/Product";
import Resturant from "../components/Resturant/Resturant";
import ResturantContainer from "../components/Resturant/ResturantContainer";
import Root from "../components/Root/Root";
import UserReview from "../components/UserReview/UserReview";
import { ResturantDataFacade } from "../data/services/resturant/resturant.data.facade";
import { ProductDataFacade } from "../data/services/product/product.data.facade";

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
            loader: ResturantDataFacade.getResturantList,
          },
          {
            path: "/resturants/:id",
            element: <Product />,
            errorElement: <ErrorPage />,
            loader: ProductDataFacade.getProductList
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