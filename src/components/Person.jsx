import PropTypes from "prop-types";
const Person = (props) => {
  const { name, age, city } = props;
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h3>{city == undefined ? "" : `City: ${city}`}</h3>
      <hr />
    </div>
  );
};
export default Person;

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string,
};

Person.defaultProps = {
  name: "Enter your name",
  age: 99999,
  
};
