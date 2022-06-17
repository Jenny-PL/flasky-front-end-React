import "./CatList.css";
import Cat from "./Cat.js";
import PropTypes from "prop-types";

// Alternate way to explicity pass in props:
// this is called 'destructuring'
// const CatList = ({catData}) => { }
const CatList = (props) => {
  // console.log("Here are my props:", props);
  // const catData = props.catData;
  // console.log("Cat data:", catData);

  const catComponents = props.catData.map((cat) => (
    <Cat
      key={cat.id}
      id={cat.id}
      name={cat.name}
      saying={cat.saying}
      age={cat.age}
      color={cat.color}
      setCatCallback={props.setCatAgeCallback}
      deleteCatCallback={props.deleteCatCallback}
    ></Cat>
  ));

  // const catComponents = [];
  // for (const cat of props.catData) {
  //   catComponents.push(
  //     <Cat
  //       key={cat.id}
  //       name={cat.name}
  //       saying={cat.saying}
  //       age={cat.age}
  //       color={cat.color}
  //       setCatCallback={props.setCatAgeCallback}
  // deleteCatCallback={props.deleteCatCallback}
  //     ></Cat>
  //   );

  // alternate way to do this:
  // const catComponents = catData.map((cat) => (
  //   <Cat
  //     id={cat.id}
  //     name={cat.name}
  //     saying={cat.saying}
  //     age={cat.age}
  //     color={cat.color}
  //   ></Cat>
  // ));

  return (
    <div>
      <h2 className="catList">List of Cats:</h2>
      {catComponents}
      {/* <Cat name="Jeffy" saying="Meow Meow Meooooww" age={5} color="tabby"></Cat>
      <Cat name="Lilly" saying="croaks" age={2} color="tabby"></Cat>
      <Cat name="Rich" saying="HELLO THERE!" age="6" color="tuxdeo"></Cat> */}
    </div>
  );
};

CatList.prototype = {
  catData: PropTypes.array.isRequired,
  setCatAgeCallback: PropTypes.func.isRequired,
  deleteCatCallback: PropTypes.func.isRequired,
};

export default CatList;
