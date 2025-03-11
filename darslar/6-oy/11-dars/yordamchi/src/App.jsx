import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      console.log(res.data);
    });
  }, []);
  return <>
    <button className="mt-20 text-white font-bold text-3xl block mx-auto py-5 px-20 bg-red-600" onClick={() => setCount(count+1)}>{count}</button>
  </>;
}

export default App;
