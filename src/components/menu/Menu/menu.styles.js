import styled, { css } from "styled-components"

import { ReactComponent as LogoIconSVG } from '../img/logo.svg';
import { ReactComponent as MenuIconSVG } from '../img/barras.svg';

export const Container = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
height: 9.7vh;
border-bottom: 0.1vh solid #cccccc;
`

export const Logo = styled(LogoIconSVG)`
height:5.2vh;
width:3.3vw;
margin: 0 7vw 0 1vw;
@media (max-width: 768px) {
    margin: 0 3vw 0 3vw;
    width:9vw;
}

`
export const MenuIcon = styled(MenuIconSVG)`
height:2.7vh;
width:2.1vw;
margin: 0 1vw 0 1vw;
cursor:pointer;
@media (max-width: 768px) {
    margin: 0 3vw 0 3vw;
    width:8vw;
}
`
export const Link = styled.button`
font-family: 'Montserrat', sans-serif;
 
font-weight: 600;
display:inline-block;
background: none;
border: none;
padding-right:3.1vw;
padding-left:3.1vw;
cursor:pointer;
height: 4rem;
&:active, &:focus{
    outline: none;
}
@media (max-width: 768px) {
    display:none
}
${props => props.active ? css`color:#eb0a1e; border-bottom: solid 0.3rem #eb0a1e` : ""}

`

export const Box = styled.div`
display: flex;
align-items:center;
& span {
font-family: 'Montserrat', sans-serif;
font-size: 1rem;
font-weight: 400;
}
`