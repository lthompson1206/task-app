import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Fuel',
      amount: 94.12,
      date: new Date(2020, 10, 10),
    },
    { id: 'e2', 
    title: 'Mortgage', 
    amount: 525, 
    date: new Date(2021, 30, 10) },
    {
      id: 'e3',
      title: 'Life Insurance',
      amount: 294.67,
      date: new Date(2021, 10, 15),
    },
    {
      id: 'e4',
      title: 'Food',
      amount: 60,
      date: new Date(2021, 10, 10),
    },
  ];
  return (
    <div>
      <h2>Let's get cracking!</h2>

      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
