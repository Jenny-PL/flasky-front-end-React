import "./Cat.css";
import PropTypes from "prop-types";

const Cat = (props) => {
  // const catName = "Jeffy";
  const catName = props.name;
  const catSaying = props.saying;
  const catAge = props.age;
  const catColor = props.color;
  const catId = props.id;
  // const catSaying = "Meow Meow Meooooww";
  return (
    <div className="cat">
      <h3> {catName} </h3>
      <p> Id: {catId} </p>
      <p> I like to say: {catSaying} </p>
      <p> I am: {catAge} years old </p>
      <p> This is my color: {catColor} </p>
    </div>
  );
};

Cat.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  saying: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default Cat;
