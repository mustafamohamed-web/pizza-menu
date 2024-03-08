import "./Categories.css";
import PropTypes from "prop-types";

export const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <>
      <form>
        <ul className="categories">
          {categories.length > 0 ? (
            categories.map((item, index) => {
              return (
                <li key={index} className="name">
                  {item}
                </li>
              );
            })
          ) : (
            <p>No categories available</p>
          )}
        </ul>
      </form>
    </>
  );
};

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};
