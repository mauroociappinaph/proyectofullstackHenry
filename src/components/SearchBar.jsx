import React from "react";
import styled from 'styled-components';

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
`;

const SearchInput = styled.input`
  background-color: transparent;
  color: #ffffff;
  border: none;
  font-size: 18px;
  flex-grow: 1;
  &:focus {
    outline: none;
  }
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
`;

export default function SearchBar(props) {
   return (
      <SearchContainer>
        <SearchInput type='search' placeholder='Buscar personaje...' />
        <SearchButton onClick={props.onSearch}>Agregar</SearchButton>
      </SearchContainer>
   );
}
