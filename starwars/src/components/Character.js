import React from 'react';
import styled, { keyframes } from 'styled-components';

const Animate = keyframes`
  0% { border-radius: 5px;}
  50% { border-radius: 50%;}
  100% { border-radius: 5px; }
`;

const Wrapper = styled.div`
    background-color: #9FCECF;
    border-radius: 25px;
    margin: auto;
    width: 40%;
    animation: ${Animate} 1s linear infinite;
`;

const PokeDiv = styled.div`
    margin: 15px 0;
`;

const PokeList = styled.p`
    font-size: 20px;
    text-transform: capitalize;
    color: #25262C;
    padding: 5px 0;
    margin: 8px 0 8px 30px;
    text-align: center;
`;

function Character(props){
    return (
        <Wrapper>
            <PokeDiv>
                <PokeList>{props.name}</PokeList>
            </PokeDiv>
        </Wrapper>
    )
}

export default Character;