import Hero from "../components/Hero";
import KindWord from "../components/KindWord";

import OurPartners from "../components/OurPartners";
import OurWork from "../components/OurWork";
import Satisfied from "../components/Satisfied";
import Welcome from "../components/Welcome";
import WhyUs from "../components/WhyUs";
import Contact from "../components/Contact";
import Description from "./Description";

const Home = () => {
  return (
    <div>
      <Hero />
      <Description />
      <Welcome />
      <OurPartners />
      <WhyUs />
      <OurWork />
      <Satisfied />
      <KindWord />
      <Contact/>
    </div>
  );
};

export default Home;
