import Pet from "./component/Pet.js";

const App = () => {
  const animals = [
    {
      animal: "Dog",
      name: "Luna",
      breed: "Havanese"
    },
    {
      animal: "Bird",
      name: "Pepper",
      breed: "Parrot"
    },
  ]
  
  return React.createElement(
    "div", // html Element/ tag
    {}, // props
    React.createElement("h1", {}, "My react rendered 🎉!"), // children
   [ 
    React.createElement(Pet, animals[0]),
    React.createElement(Pet, animals[1]),
  ]
  );
} 


const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))