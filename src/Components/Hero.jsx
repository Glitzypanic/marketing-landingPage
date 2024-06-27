const Hero = () => {
  return (
    <article className="hero-container">
      <section className="hero-left">
        <h1 className="hero-title">We Take Care Of Your Brand</h1>
        <h5 className="hero-description">
          We care about our work and we care about our clients.
        </h5>
        <form className="hero-form" action="">
          <input
            className="hero-form-input"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className="hero-form-button">Lets Talk</button>
        </form>
      </section>
      <section className="hero-right">
        <img className="hero-image" src="/Hero.png" alt="" />
      </section>
    </article>
  );
};

export default Hero;
