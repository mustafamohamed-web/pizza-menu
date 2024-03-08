import "./Categories.css";
import PropTypes from "prop-types";

export const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <>
      <form className="categories">
        <ul>
          <li>{categories}</li>
        </ul>
      </form>
    </>
  );
};

Categories.propTypes = {
  categories: PropTypes.object.isRequired,
};
