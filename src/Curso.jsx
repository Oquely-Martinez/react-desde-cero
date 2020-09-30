import React from 'react';
import propTypes from 'prop-types';

/*const curso = {
    "titulo": "react desde cero",
    "imagen":"https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "precio": 50

}*/

const Curso = ({imagen, titulo, precio, profesor}) =>(
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src={imagen} alt={titulo}/>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          
            <h3 className="center">{titulo}</h3>
            <div className="s-main-center">
                {`Prof. ${profesor}`}

            </div>
        

            <div className="s-main-center">
    <a className="button--ghost-alert button--tiny" href="#">{`$ ${precio}`}</a>
            </div>
        </div>
        
      </article>
)

Curso.prototype={
    titulo : propTypes.string,
    imagen : propTypes.string,
    profesor : propTypes.string,
    precio : propTypes.string
}

Curso.defaultProps = {
    titulo : "no definido",
    imagen : "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    profesor : "no definido",
    precio : "0"
}
export default Curso;
