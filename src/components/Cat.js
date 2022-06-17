import "./Cat.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Cat = (props) => {
  const [catAge, setCatAge] = useState(props.age);
  const makeCatOlder = () => {
    setCatAge(catAge + 1);
  };

  const [catSaying, setCatSaying] = useState(props.saying);
  const changeCatSaying = (event) => {
    const newSaying = event.target.value;
    setCatSaying(newSaying);
  };

  const catName = props.name;
  // const catSaying = props.saying;
  // const catAge = props.age;  We want this to be changable, so catAge is redefined above
  const catColor = props.color;
  const catId = props.id; // class example did not include id.  (id was set as a key)

  return (
    <div className="cat">
      <h3> {catName} </h3>
      <p> Id: {catId} </p>
      <p> I like to say: {catSaying} </p>
      <p>
        Change saying: <input type="text" onChange={changeCatSaying}></input>
      </p>
      <p> I am: {catAge} years old </p>
      <button onClick={makeCatOlder}>
        🐾 Click here if I've had a birthday and am now older! 🐾
      </button>
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
