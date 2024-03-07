import { MenuItem } from "../MenuItem/MenuItem";
import PropTypes from "prop-types";
import "./Menu.css";

export const Menu = ({ menu }) => {
  return (
    <>
      <ul className="menu-container">
        {menu ? (
          menu.map((item, index) => {
            const { name, ingredients, photoName, price, soldOut } = item;
            return (
              <MenuItem
                key={index}
                name={name}
                ingredients={ingredients}
                photoName={photoName}
                price={price}
                soldOut={soldOut}
              />
            );
          })
        ) : (
          <p>Loading menu...</p>
        )}
      </ul>
    </>
  );
};

Menu.propTypes = {
  menu: PropTypes.array.isRequired,
};
