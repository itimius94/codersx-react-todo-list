import React from 'react';
import './App.css';

function App() {
  const todos = ['ReactJS', 'VueJS', 'Angular']

  return (
    <div>
      <ul>
        {
          todos.map((item, index) => {
          return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
