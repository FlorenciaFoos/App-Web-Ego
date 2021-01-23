import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchModels, activeView } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import Filters from '../filters/filters.component'
import {
    Container,
    Heading,
    Button,
    ContainerItem,
    Name,
    SubText,
    Photo
} from "./home.styles";


const Home = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const models = useSelector((state) => state.models);



    useEffect(() => {
        dispatch(fetchModels());

    }, [dispatch]);


    dispatch(activeView("home", true));
    dispatch(activeView("details", false));

    return (
        <>
            <Heading>
                Descubrí todos los modelos
           </Heading>
            <Filters />
            <Container>
                {models.map((model) => (
                    <ContainerItem key={model.id}>

                        <Name>{model.name}</Name>
                        <SubText>{model.year} | $ {model.price}</SubText>
                        <Photo src={process.env.PUBLIC_URL + `/assets/${model.name}.png`} alt={model.name} />
                        <Button hover onClick={() => history.push(`/model/${model.id}`)}>
                            Ver Modelo
                    </Button>
                    </ContainerItem>
                ))}
            </Container>


        </>
    )
}

export default Home;