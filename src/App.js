import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);

  const addCash = () => {
    dispatch({type: 'ADD_CASH', payload: 5});
  }

  const getCash = () => {
    dispatch({type: 'GET_CASH', payload: 5});
  }

  return (
    <div className="App">
      <div>{cash}</div>
      <div style={{display: 'flex'}}>
        <button onClick = {() => addCash()}>Пополнить счёт</button>
        <button onClick = {() => getCash()}>Снять со счёта</button>
      </div>
    </div>
  );
}

export default App;
