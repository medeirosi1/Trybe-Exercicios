import './App.css';
import React from 'react';
import Name from './Componentes/Name';
import EmailCpf from './Componentes/EmailCpf';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      fullname: '',
      emailcpf: '',
      endereço: '',
    }
  }

  handleChange = ({target}) => {
    const {name} = target
    const value = name === 'fullname'
    ? target.value.toUpperCase()
    : target.value
    this.setState({
      [name]: value,
    })
  }

  render() {
    return(
      <>
        <h1>Dados Pessoais:</h1>
        <form>
          <fieldset>
          <Name nameChange={this.handleChange} value={this.state.fullname}/> 
          <EmailCpf emailcpfChange={this.handleChange} value={this.state.emailcpf}/>
          </fieldset>
        </form>
      </>
    )
  }
}

export default App;
