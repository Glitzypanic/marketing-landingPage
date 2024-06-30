import TestimonialCard from "./TestimonialCard";
import "../Styles/Components/Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h2 className="testimonial-title">What Our Client Said About Us</h2>
        <div className="testimonial-arrows">
          <div className="testimonial-arrow__left">
            <img src="/img/left-arrow.png" alt="" />
          </div>
          <div className="testimonial-arrow__right">
            <img src="/img/right-arrow.png" alt="" />
          </div>
        </div>
      </div>
      <div className="testimonial-cards">
        <TestimonialCard
          className={"active"}
          testimonial={{
            img: "/img/avatar1.png",
            name: "Amelia Joseph",
            position: "Chief Manager",
            text: "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
          }}
        />
        <TestimonialCard
          testimonial={{
            img: "/img/avatar2.png",
            name: "Jacob Joshua",
            position: "Backend Developer",
            text: "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
          }}
        />
        <TestimonialCard
          testimonial={{
            img: "/img/avatar3.png",
            name: "Joseph Farias",
            position: "Frontend Developer",
            text: "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
          }}
        />
      </div>
    </section>
  );
};

export default Testimonial;
