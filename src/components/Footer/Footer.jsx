import "./Footer.css";
export const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;

  const storeMessage = () => {
    return isOpen
      ? "Welcome to our store"
      : `We are currently closed. Our store open between ${openHour} and ${closeHour}`;
  };

  console.log(storeMessage);

  return (
    <div className="footer-container">
      <p className="footer-message">
        {storeMessage()} Come visit us or order online.
      </p>
      <button>Sign up</button>
    </div>
  );
};
