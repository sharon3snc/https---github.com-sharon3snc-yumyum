import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ensalada1 from './images/ensalada1.jpeg'
import ensalada2 from './images/ensalada2.jpeg'
import ensalada3 from './images/ensalada3.jpeg'
import ensalada4 from './images/ensalada4.jpeg'

function Home() {
  return (
    <div>
      {/* Header de la página */}
      <header>
        <h1>Yum Yum</h1>
        <nav>
          <ul>
            <li><Link to="/recetas">Recetas</Link></li>
            <li><a href="/sobre-nosotros">Login</a></li>
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
            <div class="card">
              <img src={ensalada1} alt=''/>
              <div class="recipe"> Pollo asado con queso y pesto de tomates secos sobre ensalada italiana </div>
            </div>
            <div class="card">
              <img src={ensalada2} alt=''/>
              <div class="recipe"> Ensalada de hamburguesa de huevo con queso, totopos y mostaza con miel </div>
            </div>
            <div class="card">
              <img src={ensalada3} alt=''/>
              <div class="recipe"> Tacos de calabacín y judías a la barbacoa con lechuga, pimienta y salsa ranch </div>
            </div>
            <div class="card">
              <img src={ensalada4} alt=''/>
              <div class="recipe"> Ensalada balsámica de rúcula con lentejas, tomate, pepino, aguacate y queso feta </div>
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

export default Home;
