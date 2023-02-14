import Toolbar from "./components/toolbar/Toolbar";
import PhoneBanner from "./components/phoneBanner/PhoneBanner";
import Tagline from "./components/tagline/Tagline";
import Homepage from "./pages/homepage/Homepage";
import SideDrawer from "./components/sideDrawer/SideDrawer";
import Backdrop from "./components/backdrop/Backdrop";
import { useState } from "react";

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
    <div style={{ height: "100%" }}>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen && <Backdrop click={backdropClickHandler} />}
      <PhoneBanner />
      <Tagline />
      <Homepage />
    </div>
  );
}

export default App;
