import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchModels } from "../../store/actions";
import { useHistory } from "react-router-dom";
import {
    Container,
    Heading,
    Button,
    ContainerItem,
    Name,
    SubText
} from "./home.styles";


const Home = () => {
    const history = useHistory();
    const models = useSelector((state) => state.models);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchModels());

    }, [dispatch]);
    console.log(models, 'models home')

    return (
        <>
            <Heading>
                Descubrí todos los modelos
           </Heading>
            <Container>
                {models.map((model) => (
                    <ContainerItem key={model.id}>

                        <Name>{model.name}</Name>
                        <SubText>{model.year} | $ {model.price}</SubText>
                        <img src={`./../assets/${model.name}.png`} alt={model.name} />
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