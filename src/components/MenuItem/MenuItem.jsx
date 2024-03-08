import "./MenuItem.css";
import PropTypes from "prop-types";

export const MenuItem = ({
  name,
  ingredients,
  photoName,
  price,
  soldOut,
  category,
}) => {
  return (
    <>
      <li className={`menu-item ${soldOut ? "soldOut" : ""}`}>
        <img
          src={`../../../public/assets/${name}.jpg`}
          className="img"
          alt={photoName}
        />

        <div className="menu-items">
          <h3 className="name">{name}</h3>
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
  category: PropTypes.string.isRequired,
};
