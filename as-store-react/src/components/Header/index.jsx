import React from "react";

import styles from './Header.module.css'

const Header = () =>  {
    return(
        <header className={styles.header}>
            <h1 className={styles.title}>AS Store</h1>
            <nav>
                <ul className={styles.item}>
                    <li className={styles.headerItem}><a className={styles.links} href="#sobre-a-loja">Sobre a loja</a></li>
                    <li className={styles.headerItem}><a className={styles.links} href="#products">Produtos</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;