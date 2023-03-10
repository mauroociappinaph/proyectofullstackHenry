import React from 'react';
import Card from './Card';
import styled from 'styled-components';





const Div  = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;

`




export default function Cards({ characters , onClose }) {
  return (
    <Div>
      {characters.map((character) => (
        <Card
          id={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={onClose}
        />
      ))}
    </Div>
  );
}




