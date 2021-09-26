import { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import "../Assets/Form.css";

function Form({
  incomesArray,
  setIncomesArray,
  expensesArray,
  setExpensesArray,
}) {
  const [transaction, setTransaction] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (transaction === "Income" && description !== "" && amount > 0) {
      let income = {
        id: uuidv1(),
        type: transaction,
        desc: description,
        amount: Number(amount),
      };
      let copy = [...incomesArray, income];
      setIncomesArray(copy);
    } else if (transaction === "Expense" && description !== "" && amount > 0) {
      let expense = {
        id: uuidv1(),
        type: transaction,
        desc: description,
        amount: Number(amount),
      };
      let copy = [...expensesArray, expense];
      setExpensesArray(copy);
    } else {
      console.log("Incorrect Entry");
    }
  }

  return (
    <div id="formDiv">
      <form onSubmit={handleSubmit} className="form">
        <select
          required
          name="transaction"
          id="transaction"
          onChange={(e) => {
            setTransaction(e.target.value);
          }}
        >
          <option value="Transaction Type">Transaction Type</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <input
          required
          type="text"
          placeholder="Description"
          id="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          required
          type="number"
          placeholder="Amount"
          id="amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
      <p className="warning"></p>
    </div>
  );
}

export default Form;
