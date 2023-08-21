import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import recipes from './datahome';


function Home() {

  const [selectedMenu, setSelectedMenu] = useState('-1');
  const [selectedRestriccion, setSelectedRestriccion] = useState('-1');

  const filteredRecipes = recipes.filter((recipe)=> {
    if (
      (selectedMenu === '-1' || recipe.menu === selectedMenu) &&
      (selectedRestriccion === '-1' || recipe.restriccion === selectedRestriccion)
    ) {
      return true;
    }
    return false;
  });

  const handleMenuChange = (event) => {
    setSelectedMenu(event.target.value);
  };
  
  const handleRestriccionChange = (event) => {
    setSelectedRestriccion(event.target.value);
  };

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
              <select class="menus" value={selectedMenu} onChange={handleMenuChange}>
                <option value="-1">Todos los menus</option>
                <option value="Bajo en calorías">Bajo en calorías</option>
                <option value="Vegetariano">Vegetariano</option>
                <option value="Vegano">Vegano</option></select>
            </div>
            <div class="filtros">
              <select class="menus" value={selectedRestriccion} onChange={handleRestriccionChange}>
                <option value="-1">Sin restricciones</option>
                <option value="Sin gluten">Sin gluten</option>
                <option value="Sin huevo">Sin huevo</option>
                <option value="Sin lactosa">Sin lactosa</option>
              </select>
            </div>
          </div>

          <div class="cardcontainer">
            {filteredRecipes.map((recipe, index) => (
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
