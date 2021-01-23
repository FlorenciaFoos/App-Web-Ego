import React, { useEffect, useState } from 'react'
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
    const [filteredModels, setFilteredModels] = useState(models)
    const [category, setCategory] = useState("Todos");
    const [order, setOrder] = useState("Nada");

    useEffect(() => {

        let filtrados = models
        if (category === 'Todos' || order === 'Nada') {
            filtrados = models

        }
        if (category !== 'Todos') {
            filtrados = [...models].filter(model => model.segment === category)

        }

        if (order === 'De menor a mayor precio') {
            filtrados = [...models].sort((a, b) => {
                if (a.price > b.price) {
                    return 1
                }
                if (a.price < b.price) {
                    return -1
                }
                return 0
            })


        }
        if (order === 'De mayor a menor precio') {
            filtrados = [...models].sort((a, b) => {
                if (a.price < b.price) {
                    return 1
                }
                if (a.price > b.price) {
                    return -1
                }
                return 0
            })


        }
        if (order === 'Más nuevos primero') {
            filtrados = [...models].sort((a, b) => {
                if (a.year < b.year) {
                    return 1
                }
                if (a.year > b.year) {
                    return -1
                }
                return 0
            })


        }
        if (order === 'Más viejos primero') {
            filtrados = [...models].sort((a, b) => {
                if (a.year > b.year) {
                    return 1
                }
                if (a.year < b.year) {
                    return -1
                }
                return 0
            })


        }
        setFilteredModels(filtrados)
    }, [category, order, models])



    useEffect(() => {
        dispatch(fetchModels());

    }, [dispatch]);
    console.log('models', models)

    dispatch(activeView("home", true));
    dispatch(activeView("details", false));

    return (
        <>
            <Heading>
                Descubrí todos los modelos
           </Heading>
            <Filters setCategory={setCategory} category={category} setOrder={setOrder} order={order} />
            <Container>
                {filteredModels.map((model) => (
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