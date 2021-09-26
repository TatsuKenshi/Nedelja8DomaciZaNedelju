import { useState } from "react";
import Header from "./Components/Header";
import Totals from "./Components/Totals";
import Form from "./Components/Form";
import Lists from "./Components/Lists";
import "./Assets/App.css";

function App() {
  const [incomesArray, setIncomesArray] = useState([]);
  const [expensesArray, setExpensesArray] = useState([]);

  return (
    <div className="App">
      <Header></Header>
      <Totals
        incomesArray={incomesArray}
        expensesArray={expensesArray}
        totalIncome={incomesArray.map((income) => (income = income.amount))}
        totalExpense={expensesArray.map(
          (expense) => (expense = expense.amount)
        )}
      ></Totals>
      <Form
        incomesArray={incomesArray}
        setIncomesArray={setIncomesArray}
        expensesArray={expensesArray}
        setExpensesArray={setExpensesArray}
      ></Form>
      <Lists
        incomesArray={incomesArray}
        setIncomesArray={setIncomesArray}
        expensesArray={expensesArray}
        setExpensesArray={setExpensesArray}
        totalIncome={incomesArray.map((income) => (income = income.amount))}
      ></Lists>
    </div>
  );
}

export default App;
