import React, { useState } from "react";

import {
    CloseButton,
    Container,
    CloseIcon,
    List,
    Divider,
    ListItem,
} from "./sidebar.styles";


const Sidebar = () => {
    const [closeState, setCloseState] = useState(false);


    return (
        <>
            {!closeState ? (
                <Container>
                    <CloseButton onClick={() => setCloseState(!closeState)}>
                        <span>Cerrar</span> <CloseIcon />
                    </CloseButton>
                    <List>
                        <ListItem>Modelos</ListItem>
                        <ListItem>Servicios y accesorios</ListItem>
                        <ListItem>Financiación</ListItem>
                        <ListItem>Reviews y Comunidad</ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem>Toyota Mobility Service</ListItem>
                        <ListItem>Toyota Gazoo Racing</ListItem>
                        <ListItem>Toyota Híbridos</ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem>Concesionarios</ListItem>
                        <ListItem>Test Drive</ListItem>
                        <ListItem>Contacto</ListItem>
                    </List>

                    <List last>
                        <ListItem>Actividades</ListItem>
                        <ListItem>Servicios al Cliente</ListItem>
                        <ListItem>Ventas Especiales</ListItem>
                        <ListItem>Innovación</ListItem>
                        <ListItem>Prensa</ListItem>
                        <ListItem>Acerca de..</ListItem>
                    </List>

                </Container>
            ) : (
                    ""
                )}
        </>
    );
};

export default Sidebar;
