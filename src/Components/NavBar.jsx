import "../Styles/Components/NavBar.css";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav__container">
        <img
          className="main-nav__logo"
          src="/img/Logo.png"
          alt="Company Logo"
        />
        <ul className="main-nav__menu">
          <li>
            <a href="#">How it Works</a>
          </li>
          <li>
            <a href="#">Our Work</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
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
