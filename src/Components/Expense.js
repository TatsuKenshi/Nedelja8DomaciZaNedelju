import "../Assets/Expense.css";

function Expense({ expense, setExpensesArray, totalIncome, incomesArray }) {
  const description = expense.desc;
  const money = expense.amount;
  return (
    <div className="expense">
      <p>
        {description}
        <span> : </span>
        <span>{money}</span>
        <span> </span>
        <span>
          {incomesArray.length > 0
            ? Math.round(
                (money /
                  totalIncome.reduce((total, income) => {
                    return total + income;
                  }, 0)) *
                  100
              )
            : 0}
          %
        </span>
        <span> </span>
        <span>
          <button
            id="expenseBtn"
            onClick={() => {
              setExpensesArray((prev) => {
                let copy = [...prev];
                let index = copy.indexOf(expense);
                copy.splice(index, 1);
                return copy;
              });
            }}
          >
            Delete
          </button>
        </span>
      </p>
      <hr />
    </div>
  );
}

export default Expense;
