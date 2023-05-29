import { CardProduto } from "../CardProduto.jsx/CardProduto"
import { ContainerHome, ListaProdutos, HeaderHome } from "./styles"

export const Home = ({produtos})=>{

    const ListaProdutos = ()=>{
        produtos.map(()=>{})
    }
    return(
        <>
            <ContainerHome>
                <HeaderHome>
                <span>Quantidade de produtos: 5</span>
                <div>
                    <label>Ordenação: </label>
                    <select>
                        <option value="Crescente">Crescente</option>
                        <option value="Decrescente">Decrescente</option>
                    </select>
                </div>
                </HeaderHome>
                <ListaProdutos>
                    <CardProduto/>
                    <CardProduto/>
                    <CardProduto/>
                    <CardProduto/> 
                </ListaProdutos>
            </ContainerHome>
        </>
    )
}