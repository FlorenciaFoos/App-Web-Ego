import styled, { css } from "styled-components"



export const Filter = styled.div`
display:flex;
font-size:1rem;
font-family: 'Montserrat', sans-serif;
justify-content:space-between;
align-items: center;
margin: 0 9.3rem 4.6rem 9.3rem;
border-bottom: 0.1vh solid #cccccc;
@media (max-width: 768px) {
   padding-bottom: 1.5vh;
}
`

export const Box = styled.div`
display:flex;
align-items:center;
& span{
    font-weight:600;
    margin-right:2.8rem;
}
@media (max-width: 768px) {
   display:none;
 }
`
export const Option = styled.button`
all: unset;
margin:2.4vh;
padding: 1.1vh 1.4vw;
cursor:pointer;

:focus{
    border-radius: 1.4vw;
    background-color: #f7f7f7;
}
@media (max-width: 768px) {
    display:none
}
${props => props.state === "Todos" && css` border-radius: 1.4vw;
background-color: #f7f7f7;`}
`



export const Select = styled.select`
  width: 10.7vw;
  height: 6.2vh;
  font-family: 'Montserrat', sans-serif;
  background: white;
  color: black;
  padding-left: 0.3vw;
  font-size: 1rem;
  border: none;
  margin-left: 10px;
  outline:none;
  border-radius: 1.4vw;
  cursor:pointer;
 
  option {
    color: black;
    background: white;
    border-bottom: 0.1vh solid #cccccc;
  }
  @media (max-width: 768px) {
    display:block; 
    width: 35vw;
  }
  ${props => props.hidden ? css`display:none` : css`display:inline-block;font-weight:600`}

`;