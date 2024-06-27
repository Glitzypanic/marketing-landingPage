const NavBar = () => {
  return (
    <nav className="nav-container">
      <img className="nav-logo" src="/Logo.png" alt="Logo" />
      <ul className="nav-links">
        <li>How it Works</li>
        <li> Our Work</li>
        <li>Pricing</li>
        <li>About Us</li>
      </ul>
      <button className="nav-button">Book A Call</button>
    </nav>
  );
};

export default NavBar;
