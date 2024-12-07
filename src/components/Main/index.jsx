import React, { useState } from "react";

import Header from "../Header";

import styles from './Main.module.css';
import styles2 from './Table.module.css'


const Principal = () => {
    
    const [product] = useState([
        {id: 1, name: "Tshirt Lara", oldprice:109.90, newprice:89.0, description: "Tshirt estampada com uma bela estampa de Leopardo, muito usado em Paris em todas as passarelas da moda" ,image:"https://down-br.img.susercontent.com/file/0e7a7d4d51017288c6abf16b57cde1bc"},
        {id: 2, name: "Tshirt Gabi", oldprice:209.90, newprice: 159.0,description: "Tshirt pra quem se sente grato, afinal a palavra do momento é gratidão, gratiluz!", image:"https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/gugicalc/catalog/produtos/cf01-012/camiseta-t-shirt-feminina-estampada-gratidao-blusinha-camisa-moda-plus-size-17.jpg"},
        {id: 3, name: "Tshirt Inara", oldprice:89.90, newprice:39.0, description: "Tshirt Animal Print para as gatas mais selvagens que gostam de chamar atenção onde quer que esteja", image: "https://cdn.awsli.com.br/600x450/1573/1573833/produto/1701704107a84aba75f.jpg"},
        {id: 4, name: "Tshirt Lud", oldprice:189.90, newprice: 109.0, description: "Tshirt Magali é feita para você que preza pela barriguinha cheia, afinal, ninguém é feliz com fome!",image: "https://images.tcdn.com.br/img/img_prod/322139/t_shirt_feminina_turma_da_monica_magali_fome_3120_1_20200214105421.jpg"},
        {id: 5, name: "Short Amanda", oldprice:89.90, newprice:59.0, description: "Short Azul praiano é perfeito para toda surfista que adora pegar uma onda de leve",image: "https://images.tcdn.com.br/img/img_prod/1195003/shorts_feminino_roseira_azul_395_1_3e7a552541429c78105c6f0f4d7b6d6a.jpg"},
        {id: 6, name: "Short Julia", oldprice:59.90, newprice:29.0, description: "Short para ficar em casa despreucupada e em alta na moda",image: "https://denimzero.cdn.magazord.com.br/img/2021/11/produto/21286/dz6556-alg-shorts-jeans-feminino-setentinha-destroyed-denim-zero-detalhe-02.jpg"},
        {id: 7, name: "Short Guilhermina", oldprice:89.90, newprice:59.0, description: "Short jeans compridinho é ideal para as comportadas",image: "https://down-br.img.susercontent.com/file/br-11134207-7qukw-lk1nhh8mdo5m6e"},
        {id: 8, name: "Vestido Luísa", oldprice:109.90, newprice:99.0, description: "Vestido de bolinha preto e branco muito meigo!",image: "https://cdn.awsli.com.br/1000x1000/1538/1538522/produto/231135499/2fac3e51-88ad-43c3-b191-c4afeca9c690-okyg4kv98l.jpeg"},
        {id: 9, name: "Vestido Monalise", oldprice:189.90, newprice: 189.0, description: "Vestido azul em godê, excelente caimento. Perfeito para grandes eventos.",image: "https://onlauri.vteximg.com.br/arquivos/ids/939879-1200-1660/06-5535-TIFFANY-1.jpg?v=638573507713870000"},
        {id: 10, name: "Vestido Samanta", oldprice:369.90, newprice: 259.0, description: "Vestido Rosa feito de laço no decote, moderno e elegante.",image: "https://divinavitoria.com.br/wp-content/uploads/2024/06/msg-853111754-4050.jpg"},
        {id: 11, name: "Vestido Kim", oldprice:269.90, newprice: 129.0, description: "Vestido azul sexy, marca o corpo e delineia sem deixar vulgar.",image: "https://www.lojastyleme.com.br/cdn/shop/files/vestido-festa-longo-cetim-fenda-lateral-azul-claro-petroleo.jpg?v=1712605416&width=416"},
        {id: 12, name: "Vestido Duda", oldprice:469.90, newprice: 299.0, description: "Vestido vermelho com excelente caísa e movimento, possui brilho e glitter integrados.",image: "https://divinavitoria.com.br/wp-content/uploads/2024/03/WhatsApp-Image-2020-10-29-at-15.07.10.jpeg"},

    ]);
    const [eVisivel, setEVisivel] = useState(false);
        //Visibilidade do cart
        const visibilidadeCart = () => {
            setEVisivel((prevState) => !prevState);
        }

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
        setEVisivel(true);
    }
    const removeToCart = (product) => {
        const itemIgual= cart.find((item) => item.id === product.id)
        if(itemIgual){
            setCart(cart.map(item =>
                item.id === product.id ? {...item, quantidade: item.quantidade - 1} : item
            ))
        }else{
            setCart([...cart,{...product, quantidade: 0}])
        }
    }
    const [valorMin,setValorMin] = useState('');
    const [valorMax,setValorMax] = useState('');
    const [nomeDoProd,setnomeDoProd] = useState('');
    const [ordem, setOrdem] = useState('');

    const produtosFiltradosEOrdenados = [...product].filter((item) =>{
        const valorMinNum = parseFloat(valorMin || 0);
        const valorMaxNum = parseFloat(valorMax || Infinity);
        return item.newprice >= valorMinNum && item.newprice <= valorMaxNum;
    })
    //Filtro por nome
    .filter((item) =>{
        return item.name.toLowerCase().includes(nomeDoProd.toLocaleLowerCase());
    })
    //Ordenação
    .sort((a,b)=>{
        if(ordem === 'crescente') return a.newprice - b.newprice;
        if(ordem === 'decrescente') return b.newprice - a.newprice;
        return 0;
    })

    return(
        <>
        <Header visibilidadeCart= {visibilidadeCart}/>
        <main className={styles.bodyMain}>
            <div className={styles.bodyFrames}>
                <div>
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
                        <div className={styles2.abaSticky}>
                        <div className={styles2.abaFilter}>
                            <h3>Filtre por:</h3>
                            <div className={styles2.abaFiltros}>
                                <input type="number" className={styles2.abaInput} placeholder="Valor Mínimo" value={valorMin} onChange={(e) => setValorMin(e.target.value)} />
                                <input type="number" className={styles2.abaInput} placeholder="Valor Máximo" value={valorMax} onChange={(e) => setValorMax(e.target.value)} />
                                <input type="text" className={styles2.abaInput} placeholder="Por nome" value={nomeDoProd} onChange={(e) => setnomeDoProd(e.target.value)} />
                            </div>
                            <div>
                                <h3>Oderne pelo valor:</h3>
                                <select className={styles2.abaSelection} value={ordem} id="ordem" onChange={(e) => setOrdem(e.target.value)}>
                                    <option className={styles2.abaOption} value="selecione"> Selecione </option>
                                    <option  value="crescente">Crescente</option>
                                    <option  value="decrescente">Decrescente</option>
                                </select>
                            </div>
                        </div>

                        </div>
                        <div className={styles.vitrine}>
                            {produtosFiltradosEOrdenados.map((item) =>{
                                return(
                                <div key={item.id} className={styles.vitrineSection}>
                                <a className={styles.links} href="#carrinho" >
                                <img className={styles.image} src={item.image} alt="T-shirt"/>
                                <h4 className={styles.textTitle}>{item.name}</h4>
                                <p className={styles.text}>{item.description}</p>
                                <div className={styles.price}>
                                    <del>R${item.oldprice}</del>
                                    <strong>  R$ {item.newprice.toFixed(2)}</strong>
                                </div>
                                <button className={styles.button} onClick={() => {addToCart(item)}}  type="button">Adicionar ao carrinho</button>
                            </a>
                            </div>

                                )
                            })
                            }
                        </div>
                        
                    </section>
                </div>

                <section id="carrinho" className={styles2.floatingTable} style={{ display: eVisivel ? 'block' : 'none' }}>
                    <h3 style={{fontSize:'15px', textAlign: 'center'}} className={styles.text}>Carrinho de Compras</h3>
                    <table className={styles2.table}>
                        <tr className={styles2.tr} style={{borderTop: '1px rgb(87, 53, 58) solid', borderBottom: '1px rgb(87, 53, 58)  solid'}}>
                            <td style={{fontWeight: 'bold'}}>Quant.</td>
                            <td style={{fontWeight: 'bold'}}>Produto</td>
                            <td style={{fontWeight: 'bold'}}>Preço</td>
                            <td> </td>
                            <td></td>
                        </tr>
                    </table>
                    {cart.length === 0? (
                        <p style={{fontSize:'12px', textAlign: 'center'}}>O carrinho está vazio.</p>
                    ): (<>
                        <ul style={{listStyle: 'none'}}>
                            
                            {cart.map((item, index) =>{
                                return(
                                    item.quantidade > 0 &&(
                                    <table className={styles2.table}>
                                        <li key= {index}>
                                            <tr className={styles2.tr}>
                                                <td>{item.quantidade}</td>
                                                <td >{item.name}</td>
                                                <td >R${item.newprice}</td>
                                                <div>
                                                    <button className={styles2.button} type="button" onClick={() => {addToCart(item)}}> + </button>
                                                    <button style={{marginLeft: '3px'}} className={styles2.button} type="button" onClick={() => {removeToCart(item)}}> - </button>
                                                </div>
                                            </tr>
                                        </li>
                                    </table>
                                    )
                                )
                            })}
                        </ul>
                        <tr className={styles2.line}>
                            <td style={{fontWeight: 'bold'}}>Total da compra:</td>
                            <td>R${''}
                                {cart.reduce((total,item)=> total + item.newprice * item.quantidade, 0).toFixed(2)}
                            </td>
                        </tr>
                        </>
                    )}

                </section>

            </div>
    </main>
    </>
    )
}

export default Principal;
