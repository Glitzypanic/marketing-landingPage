import WorkCard from "./WorkCard";
import "../Styles/Components/HowWorks.css";

const HowWorks = () => {
  return (
    <section className="work-container">
      <article className="work-container__info">
        <h2 className="work-container__title">How It Works</h2>
        <p className="work-container__description">
          We believe that the best way to create successful marketing campaigns
          is to work closely with our clients to understand their goals and
          challenges.
        </p>
        <img className="work-container__image" src="/work.png" alt="" />
      </article>
      <article className="work-container__cards">
        <WorkCard
          work={{
            title: "Discovery",
            description:
              "We meet with you to learn about your business, your goals, and your target audience.",
            image: "/discovery.png",
          }}
        />
        <WorkCard
          work={{
            title: "Strategy",
            description:
              "We develop a customized marketing strategy that is based on your unique needs and goals.",
            image: "/strategy.png",
          }}
        />
        <WorkCard
          work={{
            title: "Execution",
            description:
              "We execute our strategy using the latest digital marketing tools and techniques.",
            image: "/execution.png",
          }}
        />
        <WorkCard
          work={{
            title: "Measurement",
            description:
              "We track the results of our campaigns so that we can make adjustments as needed.",
            image: "/measurement.png",
          }}
        />
      </article>
    </section>
  );
};

export default HowWorks;
