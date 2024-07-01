import "../Styles/Components/OurTeam.css";

const OurTeam = () => {
  return (
    <section className="team-container">
      <div className="team-left">
        <img className="team-image" src="/img/team.png" alt="Team image" />
      </div>
      <div className="team-right">
        <h2 className="team-right__title">Meet Our Team</h2>
        <p className="team-right__description">
          Discover the brilliance behind Embrace. Our team blends innovation and
          artistry to craft digital wonders that captivate
        </p>
        <button className="team-right__button">Learn More</button>
      </div>
    </section>
  );
};

export default OurTeam;
