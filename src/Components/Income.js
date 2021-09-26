import "../Assets/Income.css";

function Income({ income, setIncomesArray }) {
  const description = income.desc;
  const money = income.amount;
  return (
    <div className="income">
      <p>
        {description}
        <span> : </span>
        <span>{money}</span>
        <span> </span>
        <span>
          <button
            id="incomeBtn"
            onClick={() => {
              setIncomesArray((prev) => {
                let copy = [...prev];
                let index = copy.indexOf(income);
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

export default Income;
