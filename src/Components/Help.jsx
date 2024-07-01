import "../Styles/Components/Help.css";

const Help = () => {
  return (
    <section className="help-section">
      <div className="help-container">
        <span className="help-line"></span>
        <div className="help-item">
          <h3 className="help-question">How do I sign up for the project?</h3>
          <img src="/svg/plusIcon.svg" alt="icon" />
        </div>
        <div className="help-item">
          <h3 className="help-question">
            What things should I prepare before starting?
          </h3>
          <img src="/svg/plusIcon.svg" alt="icon" />
        </div>
        <div className="help-item">
          <h3 className="help-question">
            Does my company need help for marketing advice?
          </h3>
          <img src="/svg/plusIcon.svg" alt="icon" />
        </div>
      </div>
      <div className="help-info">
        <h2 className="help-title">How We Can Help You?</h2>
        <p className="help-description">
          Follow our newsletter. We will regularly update our latest projects
          and availability.
        </p>
        <form className="help-form" action="">
          <input
            className="help-input"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className="help-button">Let&lsquo;s Talk</button>
        </form>
        <a href="#" className="help-link">
          More FAQ <img src="/svg/arrow.svg" alt="Arrow icon" />
        </a>
      </div>
    </section>
  );
};

export default Help;
