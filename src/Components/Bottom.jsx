import "../Styles/Components/Bottom.css";

const Bottom = () => {
  return (
    <footer className="bottom">
      <section className="bottom-main">
        <section className="bottom-logo-section">
          <img className="bottom-logo" src="/img/Logo.png" alt="Company logo" />
          <div className="bottom-social-icons">
            <a href="">
              <img src="/svg/instagram.svg" alt="Instagram icon" />
            </a>
            <a href="">
              <img src="/svg/twitter.svg" alt="Twitter icon" />
            </a>
            <a href="">
              <img src="/svg/facebook.svg" alt="Facebook icon" />
            </a>
          </div>
          <button className="bottom-contact-button">Contact Us</button>
        </section>
        <section className="bottom-links-section">
          <a href="#">Work With Us</a>
          <a href="#">Private Coaching</a>
          <a href="#">About us</a>
          <a href="#">Advertise With Us</a>
          <a href="#">Our Work</a>
          <a href="#">FAQs</a>
          <a href="#">Support Us</a>
          <a href="#">Our Commitment</a>
          <a href="#">Report a Bug</a>
          <a href="#">Business Advices</a>
          <a href="#">Our Team</a>
        </section>
      </section>
    </footer>
  );
};

export default Bottom;
