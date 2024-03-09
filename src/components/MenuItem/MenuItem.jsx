import "./MenuItem.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const MenuItem = ({ name, ingredients, photoName, price, soldOut }) => {
  return (
    <>
      <li className={`menu-item ${soldOut ? "soldOut" : ""}`}>
        <img
          src={`../../../public/assets/${name}.jpg`}
          className="img"
          alt={photoName}
        />

        <div className="menu-items">
          <Link to={`/MenuItem/${name}`} className="custom-link">
            <h3 className="name">{name}</h3>
          </Link>
          <p className="ingredients">{ingredients}</p>
          <p className="price">{price}</p>
          <p>{soldOut ? "Sold Out" : ""}</p>
        </div>
      </li>
    </>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  ingredients: PropTypes.string.isRequired,
  photoName: PropTypes.string.isRequired,
  soldOut: PropTypes.bool,
};
