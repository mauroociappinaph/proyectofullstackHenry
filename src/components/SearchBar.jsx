import React, { useState } from "react";
import styled from 'styled-components';



const DivPadre = styled.section`
display: flex;
justify-content:end;
`


const SearchContainer = styled.div`
  display: flex;
  justify-content:center; 
  align-items: center;
  justify-content: space-between;
  background-color: #242526;
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
  padding: 10px;
  margin: 10px;
  width: 40%; 
`;

const SearchInput = styled.input`
  background-color: transparent;
  color: #ffffff;
  border: none;
  font-size: 18px;
  flex-grow: 1;

`;

const SearchButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  border: none;
  font-size: 18px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.5;
  }
`
;




export default function SearchBar({ onSearch }) {
   
  const[id, setId] = useState("");
  const handleChange =(event) => {
    setId(event.target.value);
  };


  return (
      <DivPadre>
      <SearchContainer>
        <SearchInput type='search' placeholder='Buscar personaje...'   onChange={handleChange}/>
        <SearchButton onClick= {() => onSearch(id)}>Agregar</SearchButton>
      </SearchContainer>
      </DivPadre>
   );
}

