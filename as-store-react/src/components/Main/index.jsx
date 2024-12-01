import React, { useState } from "react";

import styles from './Main.module.css'


const Principal = () => {
    
    const [product] = useState([
        {id: 1, name: "Tshirt Lara", oldprice:109.90, newprice: 89.0, description: "Tshirt estampada com uma bela estampa de Leopardo, muito usado em Paris em todas as passarelas da moda" ,image:"https://down-br.img.susercontent.com/file/0e7a7d4d51017288c6abf16b57cde1bc"},
        {id: 2, name: "Tshirt Gabi", oldprice:209.90, newprice: 159.0,description: "Tshirt pra quem se sente grato, afinal a palavra do momento é gratidão, gratiluz!", image:"https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/gugicalc/catalog/produtos/cf01-012/camiseta-t-shirt-feminina-estampada-gratidao-blusinha-camisa-moda-plus-size-17.jpg"},
        {id: 3, name: "Tshirt Inara", oldprice:89.90, newprice: 39.0, description: "Tshirt Animal Print para as gatas mais selvagens que gostam de chamar atenção onde quer que esteja", image: "https://cdn.awsli.com.br/600x450/1573/1573833/produto/1701704107a84aba75f.jpg"},
        {id: 4, name: "Tshirt Lud", oldprice:189.90, newprice: 109.0, description: "Tshirt Magali é feita para você que preza pela barriguinha cheia, afinal, ninguém é feliz com fome!",image: "https://images.tcdn.com.br/img/img_prod/322139/t_shirt_feminina_turma_da_monica_magali_fome_3120_1_20200214105421.jpg"}
    ]);

    const [cart, setCart] = useState([]); // Estado para armazenar os itens do carrinho

    // Função para adicionar o item ao carrinho
    const addToCart = (product) =>{
        const itemIgual = cart.find((item) => item.id === product.id);
        
        if(itemIgual){
            setCart(cart.map(item => 
                item.id === product.id ? {...item, quantidade: item.quantidade +1} : item
            ))
        }else {
            setCart([...cart, {...product, quantidade: 1}])
        }
        
        alert(`${product.name} foi adicionado ao carrinho!`)


    }

    return(
        <main className={styles.bodyMain}>
        <section id="sobre-a-loja" className={styles.sobreALoja}>
            <img className={styles.imageLoja} src="https://s2.glbimg.com/g3SC5wTq4q-iOhH0rivYb-NtBl8=/e.glbimg.com/og/ed/f/original/2017/12/15/okflatiron_store_1.jpg" alt="Vitrine da loja"/>
            <div>
                <h3 className={styles.titleh3}>Sobre a loja</h3>
                <p className={styles.textSobre}>Bem-vindo à  AS Store – sua loja de camisetas exclusivas e cheias de estilo! Ao entrar, você será recebido por uma explosão de cores e designs inovadores. As paredes são decoradas com prateleiras repletas de camisetas que refletem as últimas tendências da moda e expressões criativas.

                    Cada seção da loja é meticulosamente organizada para facilitar a navegação. Desde as estampas ousadas e vibrantes até as opções mais minimalistas, há algo para todos os gostos. Os racks exibem uma variedade de estilos, desde as clássicas golas redondas até as mais modernas golas em V.</p>
            </div>
        </section>

        <section id="products" className={styles.products}>
            <h3 className={styles.titleh3}>Produtos</h3>
            <div className={styles.vitrine}>

                {product.map(item => {
                    return(

                        <div key={item.id} className={styles.vitrineSection}>
                            <a className={styles.links} href="#products" >
                            <img className={styles.image} src={item.image} alt="T-shirt"/>
                            <h4 className={styles.textTitle}>{item.name}</h4>
                            <p className={styles.text}>{item.description}</p>
                            <div className={styles.price}>
                                <del>R${item.oldprice}</del>
                                <strong>  R$ {item.newprice}</strong>
                            </div>
                            <button className={styles.button} onClick={() => {addToCart(item)}} type="button">Adicionar ao carrinho</button>
                        </a>
                        </div>
                    )
                })}

            </div>
            
        </section>

        <section>
            <h3>Carrinho de Compras</h3>
            {cart.length === 0? (
                <p>O carrinho está vazio.</p>
            ): (<>
                <ul>
                    {cart.map((item, index) =>{
                        return(
                            <li key= {index}>
                                <div>
                                    <p>Quantidade :{item.quantidade}x </p>
                                    <h4>{item.name}</h4>
                                    <p> R$ {item.newprice}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <p>Total da compra : R${''}
                    {cart.reduce((total,item)=> total + item.newprice * item.quantidade, 0).toFixed(2)}
                </p>
                </>
            )}

        </section>
    </main>
    )
}

export default Principal;
