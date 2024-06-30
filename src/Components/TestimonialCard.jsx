import "../Styles/Components/TestimonialCard.css";

const TestimonialCard = ({ testimonial, className }) => {
  return (
    <div className={`testimonial-card ${className || ""}`}>
      <section className="testimonial-card__section">
        <div>
          <img
            className="testimonial-card__image"
            src={testimonial.img}
            alt={testimonial.name}
          />
        </div>
        <div className="testimonial-card__info">
          <h3 className="testimonial-card__name">{testimonial.name}</h3>
          <span className="testimonial-card__position">
            {testimonial.position}
          </span>
        </div>
      </section>
      <p className="testimonial-card__text">{testimonial.text}</p>
    </div>
  );
};

export default TestimonialCard;
