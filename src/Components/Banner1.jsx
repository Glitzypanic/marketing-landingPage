import "../Styles/Components/Banner1.css";

const Banner1 = () => {
  return (
    <section className="banner-container">
      <div className="banner">
        <div className="banner-left">
          <h2 className="banner-left__title">Elevate your brand Today!</h2>
        </div>
        <div className="banner-right">
          <p className="banner-right__description">
            Ready to transform your digital dresence? Lets create magic
            together! book our services now!
          </p>
          <button className="banner-right__button">Book Call</button>
        </div>
      </div>
    </section>
  );
};

export default Banner1;
