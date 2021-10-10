import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2021, 10, 15);
    const expenseTitle = 'Life Insurance';
    const expensseAmount = 45;


    return (
      <div className="expense-item">
        <div>Oct 15th 2021</div>
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">$45</div>
        </div>
      </div>
    );
    
}
export default ExpenseItem;
