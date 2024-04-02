import { useState, useEffect } from "react";
import ToDo from "./components/ToDo";
import { addTodo, deleteToDo, getAllToDo, updateToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  useEffect(() => {
    getAllToDo(setToDo);
    return () => {};
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add To Do..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="add_btn"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setText, setToDo, setIsUpdating)
                : () => addTodo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </button>
        </div>
        <div className="list">
          {toDo?.map?.((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
