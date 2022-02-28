import React from "react";

class Name extends React.Component {
    render() {
        const {nameChange, value} = this.props
     return(
        <>
         <label htmlFor='nome'>
              Nome:
              <input type='text' id='nome' maxLength='40' name="fullname" value={value} onChange={nameChange} required/>
        </label>
        </>
     )
    }
}

export default Name