import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from './sidebar.component'
import { Container, Logo, Box, Link, MenuIcon } from "./menu.styles";



const Menu = () => {
    const [navState, setNavState] = useState(false);
    const history = useHistory();
    const home = useSelector((state) => state.home);
    const details = useSelector((state) => state.details);

    return (
        <>
            <Container>
                <Box>
                    <Logo onClick={() => history.push("/")} />


                    {home ? (
                        <Link active onClick={() => history.push("/")}>Modelos</Link>
                    ) : (
                            <Link onClick={() => history.push("/")}>Modelos</Link>
                        )}
                    {details ? (
                        <Link active>Ficha de modelo</Link>
                    ) : (
                            <Link>Ficha de modelo</Link>
                        )}
                </Box>
                <Box onClick={() => setNavState(!navState)}>
                    <span>Menú</span>
                    <MenuIcon />
                </Box>
            </Container>
            {navState ? <Sidebar /> : ""}

        </>
    );
};

export default Menu;
