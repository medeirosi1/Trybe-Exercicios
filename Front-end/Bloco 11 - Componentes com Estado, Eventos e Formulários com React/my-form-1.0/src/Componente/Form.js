import React from "react";

class Form extends React.Component {
    constructor() {
    super();
    
    this.state = {
        resumo: '',
        text: '',
        number: 0,
    }    
    
    
    }

    handlechange = ({target}) => {
        const {name, value} = target
        this.setState({
            [name]: value,
        })
    }


    render() {
        return(
            <div>
            <h1>Meu Formulário</h1>
            <form>
                <label>
                  Resumo: 
                    <textarea name="Resumo" value={this.state.resumo} onChange={this.handlechange}/>
                </label>
                <input type="text" name="texto" value={this.state.text}  onChange={this.handlechange} />
                <input type="number" name="num" value={this.state.number}  onChange={this.handlechange}/>
                <select>
                    <option>Opção 1</option>
                </select>
            </form>    
            </div>
        )
    }
}

export default Form;
