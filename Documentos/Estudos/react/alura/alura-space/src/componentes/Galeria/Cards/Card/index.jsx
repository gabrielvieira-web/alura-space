import React from 'react'
import open from './open.png'
import favorito from './favorito.png'

export default function Card( { item, styles } ) {
  return (
    <li key={item.id} className={styles.galeria__card}>
      <img 
          className={styles.galeria__imagem}
          src={item.imagem} 
          alt="imagem do planeta" 
      />
      <p className={styles.galeria__descricao}>{item.titulo}</p>
      <div>
          <p>{item.creditos}</p>
          <span>
            <img src={favorito} alt="icone de favorito" />
            <img src={open} alt="icone de ampliar card" />
          </span>
      </div>
    </li>
  )
}
