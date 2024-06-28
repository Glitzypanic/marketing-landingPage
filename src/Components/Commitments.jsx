import "../Styles/Components/Commitments.css";

const Commitents = () => {
  return (
    <sectioncl className="commit-container">
      <article className="commit-containerL">
        <div className="commit-top">
          <div>
            <h3>245%</h3>
            <span>More revenues for the brand</span>
          </div>
          <div>
            <h3>130K+</h3>
            <span>Audiences reached</span>
          </div>
        </div>
        <div className="commit-bottom">
          <div>
            <h3>50+</h3>
            <span>Brands trust us</span>
          </div>
          <div>
            <h3>24+</h3>
            <span>Worldwide awards</span>
          </div>
        </div>
      </article>
      <article className="commit-containerR">
        <h2>Commitments</h2>
        <p>
          We are committed to working with you collaboratively to understand
          your goals and create a strategy that will achieve them.
        </p>
        <button>Learn More</button>
      </article>
    </sectioncl>
  );
};

export default Commitents;
