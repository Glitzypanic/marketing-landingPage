import "../Styles/Components/OurWork.css";

const OurWork = () => {
  return (
    <section className="our-work">
      <h2 className="our-work__title">Our Work</h2>
      <span className="our-work__subtitle">A glimpse of our portfolio</span>
      <article className="our-work__portfolio">
        <div className="our-work__item">
          <img src="/img/apple.png" alt="Macbook image" />
          <h3 className="our-work__name">Apple</h3>
        </div>
        <div className="our-work__item">
          <img src="/img/cocacola.png" alt="Coca-cola image" />
          <h3 className="our-work__name">Coca-Cola</h3>
        </div>
        <div className="our-work__item">
          <img src="/img/nike.png" alt="Nike shoes image" />
          <h3 className="our-work__name">Nike</h3>
        </div>
      </article>
      <button className="our-work__button">See More</button>
    </section>
  );
};

export default OurWork;
