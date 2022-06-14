import "./Cat.css";

const Cat = () => {
  const catName = "Jeffy";
  const catSaying = "Meow Meow Meooooww";
  return (
    <div className="cat">
      <h3> {catName} </h3>
      <p> {catSaying} </p>
    </div>
  );
};

export default Cat;
