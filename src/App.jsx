import { changeAge, changeName, incrementByten } from "./Redux/mydataSlice";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // @ts-ignore
  const { myName, myAge, myCounter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>
        {" "}
        {myName} is {myAge} years old{" "}
      </h2>
      <button
        onClick={() => {
          dispatch(changeName());
        }}
      >
        Change Name
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(changeAge());
        }}
      >
        Change Age
      </button>
      <br />
      <br />
      <br />

      <h1>{myCounter} </h1>

      <button onClick={() => {
        dispatch(incrementByten(10))
      }}>increase by 10</button>
    </div>
  );
}

export default App;
