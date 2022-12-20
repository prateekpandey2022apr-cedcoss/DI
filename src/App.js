import { useContext, useEffect, useState } from "react";
import { DI } from "./Core/DependencyInjection";
import List from "./List";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

function App(props) {
  const [loading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();

  function asyncAction({ title, userId }) {
    return (dispatch) => {
      props.di
        .GET(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => {
          dispatch({ type: "success", data: "@@@@@@@@@@@" });
        })
        .catch((err) => {
          alert(err);
        });
    };
  }

  useEffect(() => {
    setIsLoading(true);
    const result = props.di.GET("https://jsonplaceholder.typicode.com/todos");
    result.then((res) => {
      setTodos(res);
      setIsLoading(false);
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
