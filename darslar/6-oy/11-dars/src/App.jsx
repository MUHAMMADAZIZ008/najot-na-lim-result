import React from "react";
import CreateTodo from "./components/create_todo";
import request from "./config/middelware";


function renderDta(setTodos) {
  request.get('/todos').then((res) => {setTodos(res.data)})
}

function App() {
  const [todos, setTodos] = React.useState([]);
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    request.get("/todos").then((res) => {
      setTodos(res.data);
    });
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    request.post("/todos", { title: data });
    setData('')
    renderDta(setTodos)
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
          type="text"
        />
        <button type="submit">Send</button>
      </form>
      <div>
        {todos.map((item) => (
          <CreateTodo key={item._id} todo={item} renderDta={renderDta}/>
        ))}
      </div>
    </>
  );
}

export default App;
