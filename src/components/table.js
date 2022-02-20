import React, { useState } from 'react';
import Card from './card.js'

const Table = (props) => {

    let [characters, setCharacters] = useState(props.characters);
    let [clicked, setClicked] = useState([])

    function logClick(character) {
        if(clicked.some(c => c.name === character.name)) {
            reset()
            console.log('BzZT')
        }
        else {
            clicked.push(character);
            shuffle()

            if (clicked.length === characters.length) {
                alert('You Win!');
                reset();
            }
        }
    }

    function reset() {
        shuffle()
        setClicked([])
    }

    function shuffle() {
        let newCharacters = []

        while (newCharacters.length < characters.length) {
            let randomCharacter = characters[Math.floor(Math.random() * characters.length)];
            if (!newCharacters.some(c => c.name === randomCharacter.name)) {
                newCharacters.push(randomCharacter);
            }
        }

        setCharacters(newCharacters)
    }

    return (
        <div className='game'>
            <h2 className='score'>{clicked.length} / {characters.length}</h2>
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
        </div>
    )
}

export default Table