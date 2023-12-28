import './App.css';
import { useState } from 'react';
import AngelAura from './images/1.png'
import ConnectorCristal from './images/2.png'
import DreamerDust from './images/3.png'
import BuilderBlock from './images/4.png'
import NeoCoin from './images/5.png'
import Connexa from './images/6.png'
import Builda from './images/7.png'
import Angelite from './images/8.png'
import Capneo from './images/9.png'
import Dreamix from './images/10.png'

function App() {
  const [cant, setCant] = useState(-1)

  const imagenMateriales = [AngelAura, BuilderBlock, NeoCoin, ConnectorCristal, DreamerDust]
  const nombreMateriales = ['AngelAura', 'BuilderBlock', 'NeoCoin', 'ConnectorCristal', 'DreamerDust']

  const imagenElementos = [Angelite, Builda, Capneo, Connexa, Dreamix]
  const nombreElementos = ['Angelite', 'Builda', 'Capneo', 'Connexa', 'Dreamix']

  function Craftear() {

    const valoresMateriales = nombreMateriales.map((_, i) =>
      parseInt(document.getElementById(nombreMateriales[i]).value, 10)
    );
    const valoresElementos = nombreElementos.map((_, i) =>
      parseInt(document.getElementById(nombreElementos[i]).value, 10)
    );

    const resultadosSuma = valoresMateriales.map((valor, i) => valor + valoresElementos[i]);
    const cantidadPosibleCrafteo = Math.min(...resultadosSuma);

    setCant(cantidadPosibleCrafteo)
  }

  return (
    <>
      <header>
        <h1>Calcula tus estrellas</h1>
      </header>
      <main>
        <ul className='elementos'>
          {
            imagenMateriales.map((imagenMaterial, i) => {
              return <li key={i}>
                <section>
                  <img src={imagenMaterial} alt={nombreMateriales[i]} />
                  <h2 className='titulo-elemento'>{nombreMateriales[i]}</h2>
                  <input type='number' id={nombreMateriales[i]} defaultValue={0} />
                </section>
              </li>
            })
          }
        </ul>
        <ul className='elementos'>
          {imagenElementos.map((imagenElemento, i) => (
            <li key={i}>
              <section>
                <img src={imagenElemento} alt={nombreElementos[i]} />
                <h2 className='titulo-elemento'>{nombreElementos[i]}</h2>
                <input type='number' id={nombreElementos[i]} defaultValue={0} />
              </section>
            </li>
          ))}
        </ul>

        <div className='craftear'>
          {cant >= 0 ? <h2>Podes tener: {cant} estrellas</h2> : <></>}
          <button onClick={Craftear}>CRAFTEA</button>
        </div>
      </main>
    </>
  );
}

export default App;
