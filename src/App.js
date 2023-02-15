import Toolbar from "./components/toolbar/Toolbar";
import Homepage from "./pages/homepage/Homepage";
import SideDrawer from "./components/sideDrawer/SideDrawer";
import Backdrop from "./components/backdrop/Backdrop";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
import ServicesPage from "./pages/servicesPage/ServicesPage";
import ContactPage from "./pages/contactPage/ContactPage";
import PhoneBanner from "./components/phoneBanner/PhoneBanner";

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
      <PhoneBanner />
      {/* Only show components below if on specific path in url */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* Always show components */}
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen && <Backdrop click={backdropClickHandler} />}
    </div>
  );
}

export default App;
