import styled, { css } from "styled-components"


const mainColor = '#373737';


const FontHome = css`
  font-family: 'Montserrat', sans-serif;
 
`;

export const ContainerDetails = styled.div`
display:grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-row-gap: 5rem;
margin: 0 9.3rem 0 9.3rem;
color: ${mainColor};
`


export const Photo = styled.img`
height:20rem;
width:34.9rem;
object-fit: contain;
${props => props.highlights2 && css`grid-row:4`};
grid-column:${props => props.highlights ? "2/3" : "1/2"}
`


export const Description = styled.div`
grid-column: 2/3;
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

${props => props.highlights && css`grid-column: 1/2;grid-row: 3`}
`
export const DescriptionName = styled.h2`
font-size: 1.25rem;
font-weight: 600;
line-height: 1.35;
margin-bottom: 4px;
${FontHome};
 

`


export const DescriptionTitle = styled.h1`
font-size: 3.1rem;
font-weight: 600;
line-height: 1.14;
letter-spacing: -1px;
margin-top:0;
color: ${mainColor};
${FontHome};
 
`

export const DescriptionText = styled.p`
font-size: 1rem;
font-weight: 400;
line-height:1.6rem;
color: ${mainColor};
${FontHome};
 
`



export const Slider = styled.div`
grid-column: 1/-1;
grid-row : 2
 
`



