import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import recipes from './datahome';


function Home() {
  return (
    <div>
      {/* Header de la página */}
      <header>
        <h1>Yum Yum</h1>
        <nav>
          <ul>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>


      {/* Contenido principal de la página */}
      <main>
        <section>
          <div class="containerbuscador">
              <input class="buscador" type="text" placeholder="¿Qué tienes en la nevera?"/> 
          </div>
          <div class="containerfiltros">
            <div class="filtros">
              <select class="menus">
                <option value="-1">Todos los menus</option>
                <option value="1">Clásico</option>
                <option value="7">Bajo en calorías</option>
                <option value="2">Vegetariano</option>
                <option value="6">Vegano</option></select>
            </div>
            <div class="filtros">
              <select class="menus">
                <option value="-1">Sin restricciones</option>
                <option value="1">Sin gluten</option>
                <option value="7">Sin huevo</option>
                <option value="2">Sin lactosa</option>
                <option value="6">Vegano</option></select>
            </div>
          </div>

          <div class="cardcontainer">
            {recipes.map((recipe, index) => (
              <div class="card" key={index}>
                <Link to={`/recetas/${recipe.id}`}>
                  <img src={recipe.image} alt=''/>
                  <div class="recipe">{recipe.name}</div>
                </Link>
              </div>
            ))}
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

export default Home;
