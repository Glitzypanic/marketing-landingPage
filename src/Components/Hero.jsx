import "../Styles/Components/Hero.css";

const Hero = () => {
  return (
    <article className="brand-care">
      <section className="brand-care__content">
        <h1 className="brand-care__title">We Take Care Of Your Brand</h1>
        <h5 className="brand-care__tagline">
          We care about our work and we care about our clients.
        </h5>
        <form className="brand-care__contact-form" action="">
          <input
            className="brand-care__email-input"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className="brand-care__submit-btn">Lets Talk</button>
        </form>
      </section>
      <section className="brand-care__visual">
        <img
          className="brand-care__image"
          src="/img/Hero.png"
          alt="Brand Ilustration"
        />
      </section>
    </article>
  );
};

export default Hero;
