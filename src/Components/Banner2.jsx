import "../Styles/Components/Banner2.css";

const Banner2 = () => {
  return (
    <section className="banner-section">
      <section className="banner-section__container">
        <div>
          <h2 className="banner-title">Start Your Journey With Us Now</h2>
          <button className="start-button">Start Now</button>
        </div>
        <div className="banner-images">
          <img className="banner-vector1" src="/img/Vector1.png" alt="" />
          <img className="banner-vector2" src="/img/Vector2.png" alt="" />
        </div>
      </section>
    </section>
  );
};

export default Banner2;
