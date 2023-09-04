const child = React.createElement("h2", { id: "child" }, "I am h2 tag");
const sibling = React.createElement("h2", { id: "sibling" }, "I am a sibling");
const parent = React.createElement("div", { id: "parent" }, [child, sibling]);

console.log(parent); // returns a javascript object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // convert the object to h1 tag to render it on screen.
