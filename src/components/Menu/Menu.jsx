import { MenuItem } from "../MenuItem/MenuItem";
import { pizzaData } from "../../Data";
import "./Menu.css";

export const Menu = () => {
  return (
    <>
      <ul className="menu-container">
        {pizzaData.map((item, index) => {
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
        })}
      </ul>
    </>
  );
};
