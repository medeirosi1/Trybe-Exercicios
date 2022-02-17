import React from 'react';

class Pokemon extends React.Component {
    render() {
        const {name, type, averageWeight, image} = this.props.pokePoke
        return(
            <div className='pokemonCard'>
                <p>{name}</p>
                <p>{type}</p>
                <p>{averageWeight.value + ' ' + averageWeight.measurementUnit}</p>
                <img src={image} alt='Pokemon'/>
            </div>
        )
    }
}

export default Pokemon;