import Income from "./Income";
import "../Assets/Incomes.css";

function Incomes({ incomesArray, setIncomesArray }) {
  return (
    <div className="incomesDiv">
      <h2>List of Incomes</h2>
      <div>
        {incomesArray.map((income) => (
          <Income
            key={income.id}
            income={income}
            incomesArray={incomesArray}
            setIncomesArray={setIncomesArray}
          />
        ))}
      </div>
    </div>
  );
}
export default Incomes;
