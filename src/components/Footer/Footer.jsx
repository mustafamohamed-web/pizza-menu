import "./Footer.css";
import PropTypes from "prop-types";

export const Footer = ({ restaurantInfo }) => {
  const getTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const isOpen =
    getTime() >= restaurantInfo.openingTime &&
    getTime() <= restaurantInfo.closingTime;

  const storeMessage = () => {
    return isOpen
      ? "Welcome to our store"
      : `We are currently closed. Our store open between ${restaurantInfo.openingTime} and ${restaurantInfo.closingTime}`;
  };

  console.log(getTime());

  return (
    <div className="footer-container">
      <p className="footer-message">
        {storeMessage()}. Come visit us or order online.
      </p>
      <button>Sign up</button>
    </div>
  );
};

Footer.propTypes = {
  restaurantInfo: PropTypes.object.isRequired,
};
