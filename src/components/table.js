import React from 'react';
import Card from './card.js'

const Table = (props) => {

    let characters = props.characters;
    let clicked = []

    function logClick (character) {
        if(clicked.some(c => c.name === character.name)) {
            clicked.length = 0;
            console.log('BzZT')
        }
        else {
            clicked.push(character);

            if (clicked.length === characters.length) {
                alert('You Win!');
                reset();
            }
        }
    }

    function reset() {
        clicked.length = 0;
    }


    return (
        <div className='table'>
            {characters.map((character) => {
                return (
                    <div className='sleeve' onClick={() => {
                        console.log(character.name);
                        logClick(character);
                    }}>
                        <Card 
                        name={character.name} 
                        img={character.img}
                    />
                    </div>
                )
            })}
        </div>
    )
}

export default Table