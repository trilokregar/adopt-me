import React from 'react';
import { Link } from 'react-router-dom';

////// older way //////
// const Pet = (props) => {
//     return React.createElement("div", { id: "id2", class: "class2" }, [
//         React.createElement("h2", {}, props.name),
//         React.createElement("h3", {}, props.animal),
//         React.createElement("h3", {}, props.breed),
//     ]);
// };

///// newer way using JSX(javascript XML-extended markup language)
const Pet = ({
  name,
  animal,
  breed,
  images,
  location,
  id
}) => {

  let hero = "http://pets-images.dev.apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;