import "../Styles/Components/Partners.css";

const Partners = () => {
  return (
    <article className="partners-container">
      <h2 className="partners-title">Companies We Work With</h2>
      <section className="partners-container">
        <div className="partners-top">
          <img src="/svg/Spotify.svg" alt="Spotify Logo" />
          <img src="/svg/Google.svg" alt="Google Logo" />
          <img src="/svg/uber.svg" alt="Uber Logo" />
          <img src="/svg/Microsoft.svg" alt="Microsoft Logo" />
          <img src="/svg/Shopify.svg" alt="Shopify Logo" />
        </div>
        <div className="partners-bottom">
          <img src="/svg/Evernote.svg" alt="Evernote Logo" />
          <img src="/svg/Adobe.svg" alt="Adobe Logo" />
          <img src="/svg/Paypal.svg" alt="Paypal Logo" />
          <img src="/svg/Amazon.svg" alt="Amazon Logo" />
          <img src="/svg/Asana.svg" alt="Asana Logo" />
        </div>
      </section>
    </article>
  );
};

export default Partners;
