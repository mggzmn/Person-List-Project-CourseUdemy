import React from "react";

/*Destructuring props
 */
const Person = ({ img, name, city }) => {
  /*const url = `https://randomuser.me/api/portraits/men/${img}.jpg`;*/
  console.log(img);
  return (
    <article className="person">
      <img src={img} alt="person" />
      <h4>{name}</h4>
      <h4>{city}</h4>
    </article>
  );
};
export default Person;
