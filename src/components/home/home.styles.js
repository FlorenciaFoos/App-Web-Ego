import styled, { css } from "styled-components"

const subColor = '#eb0a1e';
const mainColor = '#000000';
const HeadingColor = '#373737';


const FontHome = css`
  font-family: 'Montserrat', sans-serif;
 
`;

export const Container = styled.div`
display:grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(3, 1fr);
margin: 0 9.3rem 0 9.3rem;
color: ${mainColor};
}
`

export const Heading = styled.h1`
font-size: 3.1rem;
font-weight: bold;
margin: 0 9.3rem 0 9.3rem;
color: ${HeadingColor};
${FontHome};
@media (max-width: 768px) {
    font-size: 4.3vh;
}
`

export const Button = styled.button`
all: unset;
margin:2.4vh;
padding: 1.1vh 1.4vw;
border-radius: 1.4vw;
background-color:  #191919;
color:#ffffff;
font-size: 0.8rem;
cursor:pointer; 
visibility:hidden;
${FontHome};
}
`

export const ContainerItem = styled.div`
display:flex;
flex-direction:column;
align-items:center;
&:hover h2{
    color: ${subColor};
}
&:hover button{
    visibility: visible;
}
}
`

export const Name = styled.h2`
font-size: 1.75rem;
font-weight: 600;
${FontHome};


@media (max-width: 768px) {
    font-size: 4.3vh;
}
`


export const SubText = styled.span`
font-size: 0.8rem;
font-weight: 400;
${FontHome};


@media (max-width: 768px) {
    font-size: 4.3vh;
}
`


export const Photo = styled.img`
height:18.3vh;
width:20.9vw;
object-fit: contain;
@media (max-width: 768px) {
    height:22vh;
  width:75vw
}
`