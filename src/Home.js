import React from 'react';
import './Home.css';


function Home() {
  return (
    <div>
      {/* Header de la página */}
      <header>
        <h1>Yum Yum</h1>
        <nav>
          <ul>
            <li><a href="/recetas">Recetas</a></li>
            <li><a href="/sobre-nosotros">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Contenido principal de la página */}
      <main>
        <section>
          <div class="containerbuscador">
              <input class="buscador" type="text" placeholder="Buscar recetas"/> 
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
          <div class="rtb">
            Planifica tus comidas de la próxima semana en minutos con un plan de comidas personalizado.
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
