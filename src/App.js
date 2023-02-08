import "./App.css";
import Header from "./components/header/Header";
import PhoneBanner from "./components/phoneBanner/PhoneBanner";
import Tagline from "./components/tagline/Tagline";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <PhoneBanner />
      <Tagline />
      <Homepage />
    </div>
  );
}

export default App;
