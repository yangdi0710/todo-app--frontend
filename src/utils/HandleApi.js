import axios from "axios";

const baseUrl = "https://todo-app-backend-pt86.onrender.com";

const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log(data);
    setToDo(data);
  });
};
const addTodo = (text, setText, setToDo) => {
  if (text) {
    axios
      .post(`${baseUrl}/save`, { text })
      .then((data) => {
        console.log(data);
        setText("");
        getAllToDo(setToDo);
      })
      .catch((err) => console.log(err));
  } else {
    return;
  }
};
const updateToDo = (toDoId, text, setText, setToDo, setIsUpdating) => {
  if (text) {
    axios
      .post(`${baseUrl}/update`, { _id: toDoId, text })
      .then((data) => {
        console.log(data);
        setText("");
        getAllToDo(setToDo);
        setIsUpdating(false);
      })
      .catch((err) => console.log(err));
  } else {
    return;
  }
};
const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then(async (data) => {
      console.log(data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};
export { getAllToDo, addTodo, updateToDo, deleteToDo };
