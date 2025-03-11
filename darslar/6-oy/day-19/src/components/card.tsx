import { useDispatch, useSelector } from "react-redux";
import {
  singleTodo,
  deleteTodo,
  updateTodo,
} from "../store/reducers/todo-reducer";
import { RootState } from "../store/store";

export const Card = ({ name, id }: singleTodo) => {
  const { todoList } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const deleteF = () => {
    dispatch(deleteTodo({ id }));
  };

  const onUpdate = () => {
    const updated = prompt("updated");
    if (updated) {
      dispatch(updateTodo({ id, name: updated }));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1>{name}</h1>
      <div>
        <button onClick={onUpdate}>Update</button>
        <button onClick={deleteF}>Delete</button>
      </div>
    </div>
  );
};
