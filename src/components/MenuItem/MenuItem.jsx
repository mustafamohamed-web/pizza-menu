import "./MenuItem.css";
import PropTypes from "prop-types";

export const MenuItem = ({ name, ingredients, photoName, price, soldOut }) => {
  return (
    <>
      <li className="menu-item">
        <div className="img-container">
          <img src={`../../../public/assets/${name}.jpg`} className="img" />
        </div>
        <div className="menu-items">
          <h3 className="name">{name}</h3>
          <p className="ingredients">{ingredients}</p>
          <p className="price">{price}</p>
        </div>
      </li>
    </>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired, // string is required
  price: PropTypes.number,
  ingredients: PropTypes.string.isRequired,
};
