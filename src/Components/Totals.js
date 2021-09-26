import "../Assets/Totals.css";

function Totals({ incomesArray, expensesArray, totalIncome, totalExpense }) {
  return (
    <div className="totals">
      <div className="balance">
        Balance:
        <span> </span>
        {expensesArray.length === 0
          ? totalIncome.reduce((total, income) => {
              return total + income;
            }, 0)
          : totalIncome.reduce((total, income) => {
              return total + income;
            }, 0) -
            totalExpense.reduce((total, expense) => {
              return total + expense;
            }, 0)}
      </div>
      <div className="totalIncome">
        Total Income:
        <span> </span>
        {totalIncome.reduce((total, income) => {
          return total + income;
        }, 0)}
      </div>
      <div className="totalExpenses">
        <p>
          Total Expenses:
          <span> </span>
          {totalExpense.reduce((total, expense) => {
            return total + expense;
          }, 0)}
          <span> : </span>
          <span className="totalExpensesPercentage">
            {incomesArray.length > 0
              ? Math.round(
                  (totalExpense.reduce((total, expense) => {
                    return total + expense;
                  }, 0) /
                    totalIncome.reduce((total, income) => {
                      return total + income;
                    }, 0)) *
                    100
                )
              : 0}
            %
          </span>
        </p>
      </div>
    </div>
  );
}

export default Totals;
