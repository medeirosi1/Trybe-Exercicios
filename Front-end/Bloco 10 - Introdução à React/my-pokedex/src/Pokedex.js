import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        return(
            <div className='cards'>
                {
                    pokemons.map((poke) => {
                        return <Pokemon pokePoke={poke} key={poke.id}/>
                    })
                }
            </div>
        )
    }
}

export default Pokedex