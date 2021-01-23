import React, { useEffect, useState } from "react";



import {

    Filter,
    Box,
    Option,
    Select,
} from "./filters.styles";


const Filters = () => {


    const [category, setCategory] = useState("Todos");
    const [order, setOrder] = useState("Nada");


    return (


        <Filter>
            <Box>
                <span>Filtrar por</span>
                <Option state={category} onClick={() => setCategory("Todos")}>Todos</Option>
                <Option onClick={() => setCategory("Autos")}>Autos</Option>
                <Option onClick={() => setCategory("Pickups y Comerciales")}>
                    Pickups y Comerciales
          </Option>
                <Option onClick={() => setCategory("SUVs y Crossovers")}>
                    SUVs y Crossovers
          </Option>
            </Box>
            <Select hidden onChange={(e) => setCategory(e.target.value)}>
                <option value="" hidden>
                    Filtrar por:
          </option>
                <option value="Todos">Todos</option>
                <option value="Autos">Autos</option>
                <option value="Pickups y Comerciales">Pickups y Comerciales</option>
                <option value="SUVs y Crossovers">SUVs y Crossovers</option>
            </Select>
            <Select
                onChange={(e) => {
                    setOrder(e.target.value);
                }}
            >
                <option value="" hidden>
                    Ordenar por:
          </option>
                <option value="Nada">Nada</option>
                <option value="De menor a mayor precio">
                    De menor a mayor precio
          </option>
                <option value="De mayor a menor precio">
                    De mayor a menor precio
          </option>
                <option value="Más nuevos primero">Más nuevos primero</option>
                <option value="Más viejos primero">Más viejos primero</option>
            </Select>
        </Filter>


    );
};

export default Filters;
