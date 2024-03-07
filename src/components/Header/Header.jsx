import "./Header.css";
import PropTypes from "prop-types";

export const Header = ({ menu }) => {
  return menu.length > 0 ? (
    <>
      <h1 className="heading"> - FAST REACT PIZZA CO. -</h1>
      <h3 className="subheading">OUR MENU</h3>
      <p className="description">
        {` Authentic Italian cuisine. ${menu.length} creative dishes to choose from. All from
          our stone oven, all organic, all delicious`}
      </p>
    </>
  ) : (
    <p className="description">
      We are currently out of stock. We'll be back shortly
    </p>
  );
};

Header.propTypes = {
  menu: PropTypes.array.isRequired,
};
