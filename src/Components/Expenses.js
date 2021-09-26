import Expense from "./Expense";
import "../Assets/Expenses.css";

function Expenses({
  expensesArray,
  setExpensesArray,
  totalIncome,
  incomesArray,
}) {
  return (
    <div className="expensesDiv">
      <h2>List of Expenses</h2>
      <div>
        {expensesArray.map((expense) => (
          <Expense
            key={expense.id}
            expense={expense}
            expensesArray={expensesArray}
            setExpensesArray={setExpensesArray}
            totalIncome={totalIncome}
            incomesArray={incomesArray}
          />
        ))}
      </div>
    </div>
  );
}
export default Expenses;
