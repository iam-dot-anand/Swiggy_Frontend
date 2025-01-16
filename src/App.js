import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Offer from "./Pages/offer/Offer";
import Help from "./Pages/Help/Help";
import Search from "./Pages/search/Search";
import Cart from "./Pages/Cart/Cart";
import { Footer } from "./Component/Footer/Footer";
import { Home } from "./Pages/Home/Home";
import { Partner } from "./Pages/Help/section/Partner";
import { Legal } from "./Pages/Help/section/Legal";
import { FAQ } from "./Pages/Help/section/FAQ";
import { Instamart } from "./Pages/Help/section/Instamart";
import { PartnerDesc, LegalDesc, InstamartDesc, FAQDesc } from "./Pages/Help/Description";
import { Outlet } from "react-router-dom";
import User from "./Pages/User/User";
import Cuisine from "./Pages/Cuisine/Cuisine";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar className="" />
          <Home />
          <Footer />
        </div>
      ),
    },
    {
      path: "/search",
      element: (
        <div>
          <Navbar />
          <Search />
        </div>
      ),
    },
    {
      path: "/offer",
      element: (
        <div>
          {/* <Navbar/> */}
          <Offer />
          <Footer />
        </div>
      ),
    },
    {
      path: "/Help",
      element: (
        <div>
          <Navbar />
          <Help/>
        </div>
      ),
      children: [
        {
          path: "",
          element: <Partner disc={PartnerDesc}/>,
        },
        {
          path: "legal",
          element: <Legal disc={LegalDesc}/>,
        },
        {
          path: "faq",
          element: <FAQ disc={FAQDesc}/>,
        },
        {
          path: "instamart_Onboarding",
          element: <Instamart disc={InstamartDesc}/>,
        },
      ],
    },
    {
      path: "/user",
      element: (
        <div>
          <Navbar />
          <User/>
        </div>
      ),
    },
    {
      path: "/cart",
      element: (
        <div>
          <Navbar />
          <Cart />
        </div>
      ),
    },
    {
      path: "/cuisine",
      element: (
        <div>
          <Cuisine />
        </div>
      ),
    },
    {
      path: "*",
      element: (
        <div className="d-flex justify-content-center mt-5 pt-5 fs-1 text-danger">
          Error 404
        </div>
      ),
    },
  ]);

  return (
    <div className="APP ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
