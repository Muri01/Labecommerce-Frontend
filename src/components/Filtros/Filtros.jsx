import { ContainerFilter } from "./styles"

export const Filtros = ()=>{
    return(
        <>
        <ContainerFilter>
            <h1>Filtros</h1>
            <label>Mínimo:</label>
            <input type="text" name="min"/>
            <label>Máximo:</label>
            <input type="text" name="max"/>
            <label>Busca por nome:</label>
            <input type="text" name="name"/>
        </ContainerFilter>
        </>
    )
}