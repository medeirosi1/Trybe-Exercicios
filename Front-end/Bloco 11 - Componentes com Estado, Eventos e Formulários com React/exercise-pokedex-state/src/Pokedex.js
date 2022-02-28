import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data.js'

class Pokedex extends React.Component {
    constructor () {
        super()

        this.state = {
            indexPokemon: 0,
        }

        this.handleNext = this.handleNext.bind(this);
    }

    handleNext () {
        this.setState((estadoAnterior) => ({
            indexPokemon: estadoAnterior.indexPokemon + 1,
        }));
    }

    render() {
        
        return (
            <>
            <div className="pokedex">
                <Pokemon pokemon={pokemons[this.state.indexPokemon]} />)
            </div>
            <button onClick={this.handleNext}>Proximo</button>
            </>
        );
    }
}

export default Pokedex;