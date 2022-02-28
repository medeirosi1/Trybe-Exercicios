import './App.css';
import React from 'react';

class App extends React.Component {

 constructor(){
   super()

  this.state = {
    clickButton1: 0,
    clickButton2: 0,
    clickButton3: 0
  }

   this.handleButtonOne = this.handleButtonOne.bind(this)
   this.handleButtonTwo = this.handleButtonTwo.bind(this);
   this.handleButtonThree = this.handleButtonThree.bind(this);
 } 

handleButtonOne(){
   this.setState((estadoAnterior) => ({
     clickButton1: estadoAnterior.clickButton1 + 1 ,
   })) 

   console.log(this.buttonColor(this.state.clickButton1))
}

handleButtonTwo() {
  this.setState((estadoAnterior) => ({
     clickButton2: estadoAnterior.clickButton2 + 1 ,
   }))

   console.log(this.buttonColor(this.state.clickButton2))
}

handleButtonThree() {
  this.setState((estadoAnterior) => ({
     clickButton3: estadoAnterior.clickButton3 + 1 ,
   }))

   console.log(this.buttonColor(this.state.clickButton3))
}


buttonColor(num) {
  return num % 2 === 0 ? 'green' : 'white'
}
  
 render() {
   return(
     <>
     <button onClick={ this.handleButtonOne } style={{backgroundColor: this.buttonColor(this.state.clickButton1) }}>Botao 1 {this.state.clickButton1} </button>
     <button onClick={ this.handleButtonTwo } style={{backgroundColor: this.buttonColor(this.state.clickButton2)}}>Botão 2 {this.state.clickButton2}</button>
     <button onClick={ this.handleButtonThree } style={{backgroundColor: this.buttonColor(this.state.clickButton3)}}>Botão 3 {this.state.clickButton3}</button>
     </>
   )
 }
}

export default App;