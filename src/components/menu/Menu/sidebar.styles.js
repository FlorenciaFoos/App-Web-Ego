import styled, { css } from "styled-components"
import { ReactComponent as CloseIconSVG } from '../img/close.svg';


export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:flex-end;
justify-content:space-evenly;
background-color:#ffffff;
height:100%;
width: 24.37rem;
position:fixed;
top:0;
right:0;
font-family: 'Montserrat', sans-serif;
font-size:1.25rem;
&:before{
content: "";
position: absolute;
top: 70%;
bottom: 0;
left: 0;
right: 0;
background: #efeeef;
z-index:-1;
}
@media (max-width: 768px) {
    position:absolute;
    top:9.7vh;
    width:100%;
}
`

export const List = styled.ul`
all:unset;
list-style: none;
width:100%;
text-align:right;
margin-right: 3.3rem;
// ${props => props.last && css`background-color: #efeeef`}
`
export const CloseButton = styled.div`
display:flex;
align-items:center;
margin:4%;
`
export const ListItem = styled.li`
padding:1.5%;
`

export const CloseIcon = styled(CloseIconSVG)`
height:1.7vh;
width:0.9vw;
margin-left:0.9vw;
@media (max-width: 768px) {
    width:3vw;
    margin-left:2vw;
}
`
export const Divider = styled.hr`
width:21.1rem;
border: solid 1px #e8e3e3;
margin: 0 auto;
@media (max-width: 768px) {
    height: 0.15vh;
    width:78vw;

 }
`