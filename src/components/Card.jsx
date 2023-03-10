import { Link } from 'react-router-dom';
import styled from "styled-components";
import React from 'react';





const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1b1c1d;
  color: #ffffff;
  border-radius: 0.625rem;
  box-shadow: 0px 0px 0.625rem rgba(255, 255, 255, 0.2);
  padding: 0.625rem;
  margin: 0.625rem;
  width: 14.625rem;

  
  &:hover {
    box-shadow: 0px 0px 0.9375rem rgba(255, 255, 255, 0.4);
  }
`;


const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  margin: 0.8rem
  justify-content: center;
  align-items: center;

`;

const CardTitle = styled.h2`
  font-family: Arial;
  font-size: 24px;
  font-weight: bolder;
  margin: 0;
  text-align: center;
`;

const CloseButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  margin-top: 1rem;
  border: white solid .2rem;
  border-radius: 1.2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: white;
    color: #000;
  }
`;

const CardImage = styled.img`
  display:flex;

  width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 10px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`

const Parrafo = styled.p`
font-weight: bolder;
margin-top:  .8rem;
margin-bottom: .2rem;

`
;


export default function Card(props) {
  const { id, name, species, gender, image, onClose } = props;
  
  return (
    <CardContainer>
      <Link to={`/detail/${id}`}>
        <CardTitle >{name}</CardTitle>
      </Link>
      <CardImage src={image} alt={`${name}`} />
      <Parrafo>Species: {species}</Parrafo>
      <Parrafo>Gender: {gender}</Parrafo>
      <CloseButton onClick={() => onClose(id)}>X</CloseButton>
    </CardContainer>
  );
}


