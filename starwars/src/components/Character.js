// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const BodyDiv = styled.div`
display: flex;
flex-direction: row;
flex-flow: wrap;
margin: auto 0
width: 100%;
`
const StyledDiv = styled.div`
width: 20em;
border: 2px solid gray;
border-radius: 10px;
margin: 2vh 2vh;
background-color: #e6d3a1;
`
const StyledImg = styled.img`
border: 1px solid black;
width: 200px;
height: 275px;
margin: 2vh;
box-shadow: 0 10px 20px 2px #ad985f;

`

const characterComp = (props) => {
    return (
        <BodyDiv>
            {props.characterData.map(character => {
                return (
                    <StyledDiv key={character.id}>
                        <h2>{character.name}</h2>
                        <p>{character.status}</p>
                        <StyledImg alt={character.name + 'face'} src={character.image} />
                    </StyledDiv>
                )
            })}
        </BodyDiv >
    )
}

export default characterComp