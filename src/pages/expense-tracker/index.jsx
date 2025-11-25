import { Form } from "react-router-dom";

export const ExpenseTracker = () => {
  return(
  <>
    <div className="expense-tracker">
        <div className="container">
            <h1> Expense Tracker</h1>
            <div className="balance"></div>
            <h3>Your Balance</h3>
            <h2>$0.00</h2>
        </div>
        <div className="summary">
        <div className="income">
            <h4>Income</h4>
            <p>$0.00</p>
            </div>
            <div className="expenses">
            <h4>Expenses</h4>
            <p>$0.00</p>
            </div>
        </div>
        <form className="add-transaction"> 
            <input type="text" placeholder="Description" required/>
            <input type="number" placeholder="Enter Amount..." required />
            <input type="radio" id="expense" value="expense" />
            <label htmlFor="expense">Expense</label>
            <input type="radio" id="income" value="income" />
            <label htmlFor="income">Income</label>
           <button type="submit" >Add Transaction </button>
        </form>
        </div>
        <div className="transactions">
        <h3>  Transactions </h3>
        </div>
    </>

  );
}