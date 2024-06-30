import "../Styles/Components/WorkCard.css";

const WorkCard = ({ work }) => {
  return (
    <article className="work-card__container">
      <img className="work-card__image" src={work.image} alt={work.title} />
      <div className="work-card__info">
        <h3 className="work-card__title">{work.title}</h3>
        <p className="work-card__description">{work.description}</p>
      </div>
    </article>
  );
};

export default WorkCard;
