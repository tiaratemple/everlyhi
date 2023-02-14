import Toolbar from "./components/toolbar/Toolbar";
import PhoneBanner from "./components/phoneBanner/PhoneBanner";
import Tagline from "./components/tagline/Tagline";
import Homepage from "./pages/homepage/Homepage";
import SideDrawer from "./components/sideDrawer/SideDrawer";
import Backdrop from "./components/backdrop/Backdrop";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
import ServicesPage from "./pages/servicesPage/ServicesPage";
import ContactPage from "./pages/contactPage/ContactPage";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  //Method handles setting the side drawer state
  const drawerToggleClickHandler = () => {
    console.log("method");
    setSideDrawerOpen(true);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <div className="App" style={{ height: "100%" }}>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen && <Backdrop click={backdropClickHandler} />}
      <PhoneBanner />
      <Tagline />
      <Homepage />
      <Routes>
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
