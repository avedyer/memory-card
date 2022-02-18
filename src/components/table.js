import React from 'react';
import Card from './card.js'

const Table = (props) => {

    let characters = props.characters;


    return (
        <div className='table'>
            {characters.map((character) => {
                return (
                    <Card name={character.name} img={character.img}/>
                )
            })}
        </div>
    )
}

export default Table