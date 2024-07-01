import "../Styles/Components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-container">
        <p>© 2022 Embrace, Inc. - All Rights Reserved</p>
        <div className="terms-container">
          <a href="#" className="terms">
            Terms of use
          </a>
          <a href="#" className="terms">
            Privacy policy
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
