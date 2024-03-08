import "./index.css";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { Footer } from "./components/Footer/Footer";
import { menu } from "./Data";

const App = () => {
  return (
    <>
      <div className={`app ${menu.pizzaData.length < 1 ? "app-closed" : ""} `}>
        <Header menu={menu.pizzaData} />
        <Menu menu={menu.pizzaData} />
        <Footer restaurantInfo={menu.restaurantInfo} />
      </div>
    </>
  );
};

export default App;
