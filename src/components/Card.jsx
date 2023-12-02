import "../Card.css"

import PropTypes from "prop-types";
function Card({
  title = "titulo por defecto",
  image = "imagen",
  url = "#",
  inf,
}) {
  return (
    <div className="nivelar">

    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
      <img src={image} alt="foto1" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h3 className="card-title">{title}</h3>
        <p className="card-text text-secondary">{inf ? inf : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eum vero aut harum, delectus ipsam. Omnis officiis sequi, at exercitationem quibusdam libero, vitae adipisci veniam odit minima, aspernatur atque ipsam." }</p>
        <a
          target="_blank"
          rel="noreferrer"
          href={url}
          className="btn btn-outline-secondary"
        >
          Go to website
        </a>
      </div>
    </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  inf: PropTypes.string,
  url: PropTypes.string,
};

export default Card;
