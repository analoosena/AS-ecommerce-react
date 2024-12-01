import React from "react";

import styles from './Header.module.css'



const Header = ({visibilidadeCart}) =>  {
    return(
        <header className={styles.header}>
            <h1 className={styles.title}>AS Store</h1>
            <nav>
                <ul className={styles.item}>
                    <li className={styles.headerItem}><a className={styles.links} href="#sobre-a-loja">Sobre a loja</a></li>
                    <li className={styles.headerItem}><a className={styles.links} href="#products">Produtos</a></li>
                    <li className={styles.headerItem}><button onClick={visibilidadeCart} type="button" className={styles.button} href="#carrinho"> <img className={styles.imagem} src="https://cdn-icons-png.flaticon.com/512/5087/5087784.png" alt="carrinho de compras" /> </button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;