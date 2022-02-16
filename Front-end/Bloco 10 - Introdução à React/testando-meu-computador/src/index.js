import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// JSX


// function helloWorld (nome, sobrenome) {
//   return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
// }

// const element = helloWorld("Jorge", "Maravilha");
// const container = <div>{element}</div>;

// const nome = 'Jorge Maravilha';
// const classe = 'hello-class';
// const element = <h1 className={classe}>Hello, {nome}</h1>;

// const textJSX = 'JSX';
// const element = <h1>Hello, {textJSX}</h1>

// ReactDOM.render(element, document.getElementById('root'));

// ReactDOM.render

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
