import "./Styles/App.css";

import Banner1 from "./Components/Banner1";
import Banner2 from "./Components/Banner2";
import Bottom from "./Components/Bottom";
import Commitents from "./Components/Commitments";
import Footer from "./Components/Footer";
import Help from "./Components/Help";
import Hero from "./Components/Hero";
import HowWorks from "./Components/HowWorks";
import NavBar from "./Components/NavBar";
import OurTeam from "./Components/OurTeam";
import OurWork from "./Components/OurWork";
import Partners from "./Components/Partners";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <main>
      <header className="header-main">
        <NavBar />
        <Hero />
      </header>
      <article>
        <Partners />
      </article>
      <section className="work-main">
        <Commitents />
        <HowWorks />
        <OurWork />
        <Banner1 />
        <OurTeam />
        <section className="testimonial-main">
          <Testimonial />
        </section>
        <Banner2 />
        <Help />
      </section>
      <footer>
        <Bottom />
        <Footer />
      </footer>
    </main>
  );
}

export default App;
