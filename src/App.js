import Toolbar from "./components/toolbar/Toolbar";
import Homepage from "./pages/homepage/Homepage";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
import ServicesPage from "./pages/servicesPage/ServicesPage";
import ContactPage from "./pages/contactPage/ContactPage";
import PhoneBanner from "./components/phoneBanner/PhoneBanner";
import Footer from "./components/footer/Footer";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  //Method handles setting the side drawer state
  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(true);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <div className="App">
      {/* Always show components */}
      <Toolbar
        drawerClickHandler={drawerToggleClickHandler}
        setSideDrawerOpen={setSideDrawerOpen}
        showSideNav={sideDrawerOpen}
        closeSideNav={backdropClickHandler}
      />
      <PhoneBanner />
      {/* Only show components below if on specific path in url */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
