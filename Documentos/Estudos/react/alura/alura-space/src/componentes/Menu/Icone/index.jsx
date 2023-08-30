import React from 'react'

export default function Icone({icone, styles}) {
  return (
    <li key={icone.id} className={styles.menu__item}>
        <img src={icone.icone} alt="icone do menu" />
        <a href="/">{icone.descricao}</a>
    </li>
  )
}
