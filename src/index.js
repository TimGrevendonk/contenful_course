import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v6.2.0/css/all.css"
    />
    <App />
  </React.StrictMode>
);

reportWebVitals();

// ! render() only works with React-dom and not Ract-dom/client
// const names = ["John", "Smith", "Harry"];
// * With create element.
// const element = React.createElement(
//   "ol",
//   null,
//   names.map((name, index) => React.createElement("li", { key: index }, name))
// );
// * With JSX tags.
// const element = (
//   <ol>
//     {names.map((name) => {
//       return <li key={name}>{name}</li>;
//     })}
//   </ol>
// );
// * the element must always be rendered at the target.
// ReactDOM.render(element, document.getElementById("root"));
