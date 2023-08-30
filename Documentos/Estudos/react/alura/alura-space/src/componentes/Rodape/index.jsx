import React from 'react'
import styles from "./Rodape.module.scss";

import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <div>
            <a href="/"><img src={facebook} alt="icone facebook" /></a>
            <a href="/"><img src={twitter} alt="icone twitter" /></a>
            <a href="/"><img src={instagram} alt="icone instagram" /></a>
        </div>
        <p>Desenvolvido por Gabriel Vieira</p>
    </footer>
  )
}
