import React from 'react';
import { Link } from 'react-router-dom';
import './Recetas.css';
import ensalada1 from './images/ensalada1.jpeg'

function Recetas() {
  return (
    <div>
      {/* Header de la página */}
      <header>
        <h1>Yum Yum</h1>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><a href="/sobre-nosotros">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Contenido principal de la página */}
      <main>
        <section>
          <div className='recipecontainer'>
            <div className='recipename'>
              Pollo asado con queso y pesto de tomates secos sobre ensalada italiana
            </div>
            <div className='recipegrid'>
              <div className='recipeleft'>
                <div className='recipedata'>
                  <div className='time'>
                    30 minutos
                  </div>
                  <div className='time'>
                    400 kcal
                  </div>
                  <div className='servings'>
                  <select class="menus">
                    <option value="-1">1 persona</option>
                    <option value="1">2 personas </option>
                    <option value="7">3 personas </option>
                    <option value="2">4 personas</option>
                  </select>
                  </div>
                </div>
                <div>
                  <img src={ensalada1} alt='' height={600} width={600} className='recipeImage'/>
                </div>
              </div>
              <div className='reciperight'>
                <div className='cardtitles'>
                  <button class='selectedbutton'>Ingredientes</button>
                  <button class='cardbutton'>Instrucciones</button>
                </div>
                <div className='cardinfo'>
                  <ul className='ingredients'>
                    <li>
                      <div className='ingredientDetail'>
                        <div>Lechuga</div>
                        <div>100gr</div>
                      </div>
                    </li>
                    <li>
                      <div className='ingredientDetail'>
                        <div>Pollo</div>
                        <div>200gr</div>
                      </div>
                    </li>
  
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer de la página */}
      <footer>
        <p>Contacto: correo@tudireccion.com</p>
        <nav>
          <ul>
            <li><a href="/terminos-y-condiciones">Términos y Condiciones</a></li>
            <li><a href="/politica-de-privacidad">Política de Privacidad</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Recetas;
