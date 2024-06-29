import "./Styles/App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Partners from "./Components/Partners";
import Commitents from "./Components/Commitments";
import HowWorks from "./Components/HowWorks";
import OurWork from "./Components/OurWork";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Partners />
      <Commitents />
      <HowWorks />
      <OurWork />
    </main>
  );
}

export default App;
