import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Gym Membership",
      amount: 32.56,
      date: new Date(2021, 10, 15),
    },
    {
      id: "e2",
      title: "Farm Delivery",
      amount: 180.42,
      date: new Date(2021, 9, 12),
    },
    {
      id: "e3",
      title: "Entreprenuer Membership",
      amount: 200.06,
      date: new Date(2021, 9, 5),
    },
    {
      id: "e4",
      title: "Dog Food",
      amount: 80.86,
      date: new Date(2021, 9, 1),
    },
  ];
  return (
    <div className="App">
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
