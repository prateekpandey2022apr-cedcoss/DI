import { useContext, useEffect, useState } from "react";
import { DI } from "./Core/DependencyInjection";
import List from "./List";
// import { StoreDispatcher } from "./index.js";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

function App(props) {
  // debugger;
  const [loading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();

  // const dispatcher = useContext(StoreDispatcher);

  function asyncAction({ title, userId }) {
    return (dispatch) => {
      props.di
        .GET(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => {
          console.log(res);
          dispatch({ type: "success", data: "@@@@@@@@@@@" });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }

  useEffect(() => {
    setIsLoading(true);
    const result = props.di.GET("https://jsonplaceholder.typicode.com/todos");
    result.then((res) => {
      console.log(res);
      setTodos(res);
      setIsLoading(false);
      // debugger;
      dispatch({
        type: "todo",
        data: res,
      });
      dispatch(asyncAction({ title: "", userId: "" }));
    });
  }, []);

  return <List loading={loading} todos={todos} />;
}

export default DI(App);
