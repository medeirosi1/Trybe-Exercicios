import React, { Component } from 'react'

class EmailCpf extends Component {
  render() {
    const {emailcpfChange, value} = this.props  
    return (
      <>
      <label htmlFor='email'>
              Email:
              <input type='text' id='email' maxLength='50' name="emailcpf" value={value} onChange={emailcpfChange} required/>
      </label>
      <label htmlFor='cpf'>
              CPF:
              <input type='text' id='cpf' maxLength='11' name="emailcpf" value={value} onChange={emailcpfChange} required/>
      </label>
      </>
    )
  }
}

export default EmailCpf