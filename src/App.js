import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "./asyncAction/customer";
import styles from "./styles.module.scss";
import {
  addCustomerAction,
  addManyCustomersAction,
  removeCustomerAction,
} from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = () => {
    dispatch({ type: "ADD_CASH", payload: 5 });
  };

  const getCash = () => {
    dispatch({ type: "GET_CASH", payload: 5 });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <body>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
        rel="stylesheet"
      />
      <div className={styles.rectangle}>
        <div className={styles.image}>
          {" "}
          <img src="./bank.svg" alt="bank" />
        </div>

        <div className={styles.balance}>баланс: {cash}</div>
        <div className={styles.buttons}>
          <button onClick={() => addCash()}>Пополнить счёт</button>
          <button onClick={() => getCash()}>Снять со счёта</button>
          <button onClick={() => addCustomer(prompt())}>
            Добавить клиента
          </button>
          <button onClick={() => dispatch(fetchCustomers())}>
            Добавить клиентов из базы
          </button>
        </div>
        {customers.length > 0 ? (
          <ul>
            {customers.map((customer) => (
              <li onClick={() => removeCustomer(customer)}>
                {customer.name}
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.clients}>Клиенты отсутствуют</div>
        )}
      </div>
    </body>
  );
}

export default App;
