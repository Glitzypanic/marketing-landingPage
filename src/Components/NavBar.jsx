import "../Styles/Components/NavBar.css";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav__container">
        <img className="main-nav__logo" src="/Logo.png" alt="Company Logo" />
        <ul className="main-nav__menu">
          <li>How it Works</li>
          <li> Our Work</li>
          <li>Pricing</li>
          <li>About Us</li>
        </ul>
        <button className="main-nav__cta">Book A Call</button>
      </div>
      <div className="main-nav__line">
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;
