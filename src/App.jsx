import "./App.css";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import ProdCate from "./pages/ProdCate/ProdCate"
import ErrorE from "./pages/ErrorE/ErrorE";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorE/>,
  },
  {
    path: "/about-us",
    element: <AboutUs/>,
  },
  {
    path: "/contact-us",
    element: <ContactUs/>,
  },
  {
    path: "/product-category",
    element: <ProdCate/>
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
