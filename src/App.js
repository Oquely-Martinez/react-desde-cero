import React, {Fragment} from 'react';
//import logo from './logo.svg';
import "./styles/style.scss";
import Curso from './Curso';

const cursos = [
  {"titulo": "React desde cero",
   "imagen": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
  "profesor": "Darwin Martinez",
  "precio": "20"}, 
  {
    "titulo": "HTML Completo",
    "imagen": "https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",
    "profesor": "Alexys Lozada",
    "precio": "40"
  }, 
  {
    "titulo": "JavaScritp La Guia Definitiva",
    "imagen": "https://edteam-media.s3.amazonaws.com/courses/small/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg",
    "profesor": "Beto Quiroga",
    "precio": "50"
  }, 
  {
    "titulo": "Worpress",
    "imagen": "https://edteam-media.s3.amazonaws.com/courses/small/82dfe34a-4e3b-4904-bdb5-03f45112fcd2.png",
    "profesor": "Alexys Lozada",
    "precio": "40"
  }
];

const App = ()=>(
<>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="Banner img" src="https://wallpaperaccess.com/full/1878506.jpg"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Título del banner</p>
          <p> Subtítulo del banner</p>
          <a href="#" className="button">Botón del banner</a>
        </div>
      </div>
    </div>
  </div>

  <div className="ed-grid m-grid-3">
      
      {
        cursos.map(curso => <Curso titulo={curso.titulo} imagen={curso.imagen} profesor={curso.profesor} precio={curso.precio}/>)

        
      }
  </div>
</>
)

export default App;
