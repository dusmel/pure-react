const Pet = (props) => React.createElement(
  "div",
  {},
  [
    React.createElement("h1", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]
)

export default Pet;
