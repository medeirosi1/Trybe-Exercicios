import React from 'react';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';


// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// function App() {
//   return (
//     <ol>{numbers.map((element) => Task(element * 2) )}</ol>
//   );
// }

function App() {
  return (
    <div>
    <Header/>
    <Content/>
    <Footer/>
    </div>
  );
}

export default App;
