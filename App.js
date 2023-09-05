import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>Title of the header component</h1>;
};
const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <h2>Content of the header</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
