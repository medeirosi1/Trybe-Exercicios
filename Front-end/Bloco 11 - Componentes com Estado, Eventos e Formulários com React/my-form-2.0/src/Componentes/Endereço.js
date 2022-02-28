import React, { Component } from 'react'

class Endereço extends Component {
  render() {
    return (
      <label htmlFor='address'>
              CPF:
              <input type='text' id='address' maxLength='11' name="emailcpf" value={value} onChange={endereço} required/>
      </label>
    )
  }
}

export default Endereço