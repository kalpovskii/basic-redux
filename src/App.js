import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchCustomers } from "./asyncAction/customer";
import { addCustomerAction, addManyCustomersAction, removeCustomerAction } from "./store/customerReducer";

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = () => {
    dispatch({type: 'ADD_CASH', payload: 5});
  };

  const getCash = () => {
    dispatch({type: 'GET_CASH', payload: 5});
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };


  return (
    <div className="App">
      <div>{cash}</div>
      <div style={{display: 'flex'}}>
        <button onClick = {() => addCash()}>Пополнить счёт</button>
        <button onClick = {() => getCash()}>Снять со счёта</button>
        <button onClick = {() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick = {() => dispatch(fetchCustomers())}>Добавить клиентов из базы</button>
      </div>
      {
        customers.length > 0 ? 
        <div>
          {customers.map(customer => 
            <div onClick = {() => removeCustomer(customer)}>{customer.name}</div>
          )}
        </div>
        :
        <div>
          Клиенты отсутствуют
        </div>
      }
    </div>
  );
}

export default App;
