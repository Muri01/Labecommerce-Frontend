import { ContainerCardProduto } from "./styles"

export const CardProduto = ()=>{
    return(
        <>
            <ContainerCardProduto>  
                <img src="https://picsum.photos/200"/>
                <p>Produto 1</p>
                <p>R$50,00</p>
                <button>Adicionar ao Carrinho</button>
            </ContainerCardProduto>
        </>
    )
}