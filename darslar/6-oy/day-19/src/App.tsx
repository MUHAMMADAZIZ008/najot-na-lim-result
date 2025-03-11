import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./store/reducers/todo-reducer";
import { RootState } from "./store/store";
import { nanoid } from "@reduxjs/toolkit";
import { Card } from "./components/card";

function App() {
  const { todoList } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const createTask = () => {
    const newTask = prompt("yangi task");
    if (newTask) {
      dispatch(addTodo({ name: newTask, id: nanoid() }));
    }
  };

  return (
    <>
      <button onClick={createTask}>addTodo</button>
      {todoList?.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </>
  );
}

export default App;
