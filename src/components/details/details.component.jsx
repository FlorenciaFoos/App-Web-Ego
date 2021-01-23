import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchModelDetails, activeView } from "../../redux/actions";
import { useParams } from "react-router-dom";

import {
    ContainerDetails,
    Photo,
    DescriptionName,
    DescriptionTitle,
    DescriptionText,
    Description,
    Slider,


} from "./details.styles";

const Details = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    dispatch(activeView("home", false));
    dispatch(activeView("details", true));

    const modelDetails = useSelector((state) => state.modelDetails);

    useEffect(() => {
        dispatch(fetchModelDetails(id));

    }, [dispatch, id]);

    return (
        <ContainerDetails>
            <Photo src={process.env.PUBLIC_URL + `/assets/${modelDetails.name}.png`} alt={modelDetails.name} />
            <Description>
                <DescriptionName>{modelDetails.name}</DescriptionName>
                <DescriptionTitle>{modelDetails.title}</DescriptionTitle>
                <DescriptionText>{modelDetails.description}</DescriptionText>
            </Description>

            <Slider>SLIDER</Slider>

            <Description highlights>
                <DescriptionName>Título de 20px</DescriptionName>
                <DescriptionText>Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.</DescriptionText>

            </Description>
            <Photo highlights src={process.env.PUBLIC_URL + `/assets/details/detalle_1.png`} alt={modelDetails.name} />
            <Description >
                <DescriptionName>Título de 20px</DescriptionName>
                <DescriptionText>Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.</DescriptionText>

            </Description>
            <Photo highlights2 src={process.env.PUBLIC_URL + `/assets/details/detalle_2.png`} alt={modelDetails.name} />
        </ContainerDetails>
    )
}

export default Details;