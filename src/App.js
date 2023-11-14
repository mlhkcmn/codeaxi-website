import React from "react";
import { HeroSlider } from "./components/HeroSlider";
import { Features } from "./components/features";
import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Team } from "./components/Team";
import { Contact } from "./components/contact";
// import { Gallery } from "./components/gallery";
// import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import ToTopButton from "./components/ToTopButton";
import Navigation from "./components/navigation";
import Footer from "./components/Footer";
import { Why } from "./components/why";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  // const [landingPageData, setLandingPageData] = useState({});
  // useEffect(() => {
  //   setLandingPageData(JsonData);
  // }, []);

  return (
    <div>
      <Navigation />
      <HeroSlider />
      <Features />
      <About />
      <Why />
      {/* <Services /> */}
      {/* <Gallery data={landingPageData.Gallery} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <Contact />
      <ToTopButton />
      <Footer />
    </div>
  );
};

export default App;
