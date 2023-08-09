import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [inputData, setInputData] = useState([]);

  const handleClick = () => {
    if (input) {
      setInputData([...inputData, input]);
      setInput("");
    } else {
      alert("enter an item");
    }
  };

  const handleDelete = (id) => {
    let updatedItems = inputData.filter((element, index) => {
      return id !== index;
    });
    setInputData(updatedItems);
  };
  return (
    <div className="App">
      <div className="inputContainer">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleClick}>Add items</button>
      </div>
      {inputData.map((ele, index) => (
        <div className="itemContainer">
          <span>{ele}</span>
          <button onClick={() => handleDelete(index)}>Delete item</button>
        </div>
      ))}
    </div>
  );
}
