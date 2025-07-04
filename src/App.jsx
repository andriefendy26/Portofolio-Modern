import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout";
import Hero from "./Layout/Hero";
import Home from "./Pages/Home";
import Galery from "./Pages/Galery";
import ProjectPage from "./Pages/Project";
// import AboutUs from "./Pages/AboutMe";
import ContactSection from "./Layout/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/project",
          element: <ProjectPage></ProjectPage>,
        },
        {
          path: "/galery",
          element: <Galery></Galery>,
        },
        {
          path: "/contact",
          element: <ContactSection/>,
        },
        // {
        //   path: "/about",
        //   element: <AboutUs></AboutUs>,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
