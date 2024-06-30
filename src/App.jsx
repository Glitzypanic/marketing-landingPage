import "./Styles/App.css";
import Banner1 from "./Components/Banner1";
import Commitents from "./Components/Commitments";
import Hero from "./Components/Hero";
import HowWorks from "./Components/HowWorks";
import NavBar from "./Components/NavBar";
import OurTeam from "./Components/OurTeam";
import OurWork from "./Components/OurWork";
import Partners from "./Components/Partners";
import Testimonial from "./Components/Testimonial";
import Banner2 from "./Components/Banner2";
import Help from "./Components/Help";

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
    </main>
  );
}

export default App;
