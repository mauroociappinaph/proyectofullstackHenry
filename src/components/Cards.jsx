import React from 'react';
import Card from './Card';
import styled from 'styled-components';





const Div  = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`




export default function Cards({ characters }) {
  return (
    <Div>
      {characters.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={() => window.alert('Cerrando')}
        />
      ))}
    </Div>
  );
}
