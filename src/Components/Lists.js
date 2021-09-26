import Incomes from "./Incomes";
import Expenses from "./Expenses";
import "../Assets/Lists.css";

function Lists({
  incomesArray,
  expensesArray,
  setIncomesArray,
  setExpensesArray,
  totalIncome,
}) {
  return (
    <div className="lists">
      <Incomes
        incomesArray={incomesArray}
        setIncomesArray={setIncomesArray}
      ></Incomes>
      <Expenses
        expensesArray={expensesArray}
        setExpensesArray={setExpensesArray}
        totalIncome={totalIncome}
        incomesArray={incomesArray}
      ></Expenses>
    </div>
  );
}

export default Lists;
