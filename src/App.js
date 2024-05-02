import './App.css';
import React from 'react';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
import Hello from './Hello';

function App() {
  //지출 항목 객체 배열
  const expenses = [
    {
      title: '바나나',
      price: 3000,
      date: new Date(2023, 3 - 1, 23),
    },
    {
      title: 'BBQ치킨',
      price: 20000,
      date: new Date(2023, 5 - 1, 21),
    },
    {
      title: '도미노피자',
      price: 35000,
      date: new Date(2023, 7 - 1, 4),
    },
  ];

  return (
    <>
      <Expenses items={expenses} />
      <Hello>
        <ul>
          <li>사과</li>
          <li>포도</li>
          <li>복숭아</li>
        </ul>
      </Hello>
    </>
  );
}

export default App;
