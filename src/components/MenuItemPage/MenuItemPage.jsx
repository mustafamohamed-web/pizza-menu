import { menu } from "../../Data";
import { useParams } from "react-router-dom";
import "./MenuItemPage.css";

export const MenuItemPage = () => {
  const params = useParams();
  const selectedItem = menu.pizzaData.find((item) => item.name === params.name);
  console.log(selectedItem);

  return (
    <div className="app">
      <div className="content">
        <img
          src={`../../../public/assets/${selectedItem.name}.jpg`}
          className="menu-img"
          alt={selectedItem.photoName}
        />
        <div className="info">
          <h1>{selectedItem.name}</h1>
          <p className="ingredients">{selectedItem.ingredients}</p>
          <p className="price">{selectedItem.price}</p>
          <p>{selectedItem.soldOut ? "Sold Out" : ""}</p>
        </div>

        <div className="cta">
          <button>Add to cart</button>
          <div className="drop-down">
            <label htmlFor="pizzaSize">Choose a pizza size:</label>
            <select>
              <option value="" disabled>
                Select Size
              </option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
