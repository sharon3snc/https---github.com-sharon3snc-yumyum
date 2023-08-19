import React from 'react';
import { Link } from 'react-router-dom';
import './Recetas.css';
import recipes from './datahome'

function Recetas() {
  const recipe = recipes.find((recipe) => recipe.id === 1);

  if (!recipe) {
    return <div>No se encontró la receta con id: 1</div>;
  }

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
            <div className='recipename' key={recipe.id}>
              {recipe.name}
            </div>
            <div className='recipegrid' key={recipe.id}>
                <div className='recipeleft'>
                  <div className='recipedata'>
                    <div className='time'>
                      {recipe.time}
                    </div>
                    <div className='time'>
                      {recipe.cal}
                    </div>
                    <div className='servings'>
                      <select className="menus">
                        <option value="-1">1 persona</option>
                        <option value="1">2 personas </option>
                        <option value="7">3 personas </option>
                        <option value="2">4 personas</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <img src={recipe.image} alt={recipe.name} height={600} width={600} className='recipeImage' />
                  </div>
                </div>
                <div className='reciperight'>
                  <div className='cardtitles'>
                    <button class='selectedbutton'>Ingredientes</button>
                    <button class='cardbutton'>Instrucciones</button>
                  </div>
                  <div className='cardinfo'>
                    <ul className='ingredients'>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>
                          <div className='ingredientDetail'>
                            <div>{ingredient.name}</div>
                            <div>{ingredient.quantity}</div>
                          </div>
                        </li>
                      ))}
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
