import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import recipes from './datahome';
import { usePlanContext } from './PlanContext';

function Home() {
  const {mealPlan, setMealPlan} = usePlanContext();
  const [selectedMenu, setSelectedMenu] = useState('Todos');
  const [selectedRestriccion, setSelectedRestriccion] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = recipes.filter((recipe) => {
    const isMenuMatch =
      selectedMenu === 'Todos' || recipe.menu === selectedMenu;
    const isRestriccionMatch =
      selectedRestriccion === 'Todos' || recipe.restriccion === selectedRestriccion;
    const isSearchMatch =
      searchQuery === '' ||
      recipe.ingredients.some((ingredient) =>
        ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return isMenuMatch && isRestriccionMatch && isSearchMatch;
  });

  const handleSearchChange= (event) => {
    setSearchQuery(event.target.value);
  };

  const handleMenuChange = (event) => {
    setSelectedMenu(event.target.value);
  };
  
  const handleRestriccionChange = (event) => {
    setSelectedRestriccion(event.target.value);
  };

  const addToMealPlan = (recipe) => {
    setMealPlan((prevMealPlan) => [...prevMealPlan, recipe]);
  };
  console.log(mealPlan);

  const getCardClassName = (recipe) => {
    return mealPlan.includes(recipe) ? "card selected" : "card";
  }

  const removeFromMealPlan = (recipe) => {
    setMealPlan((prevMealPlan) =>
    prevMealPlan.filter((selectedRecipe) => selectedRecipe !== recipe)
    );
  };

  return (
    <div>
      {/* Header de la página */}
      <header>
        <h1>Yum Yum</h1>
        <nav>
          <ul>
            {mealPlan.length > 0 && (
                <li className="plan-link">
                <Link to="/planes">Ir al Plan</Link>
              </li>
            )}
            <li className="login-link">
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </header>


      {/* Contenido principal de la página */}
      <main>
        <section>
          <div className="containerbuscador">
              <input className="buscador" type="text" placeholder="¿Qué tienes en la nevera?" value={searchQuery} onChange={handleSearchChange} /> 
          </div>
          <div className="containerfiltros">
            <div className="filtros">
              <select className="menus" value={selectedMenu} onChange={handleMenuChange}>
                <option value="Todos">Todos los menus</option>
                <option value="Bajo en calorías">Bajo en calorías</option>
                <option value="Vegetariano">Vegetariano</option>
                <option value="Vegano">Vegano</option></select>
            </div>
            <div className="filtros">
              <select className="menus" value={selectedRestriccion} onChange={handleRestriccionChange}>
                <option value="Todos">Sin restricciones</option>
                <option value="Sin gluten">Sin gluten</option>
                <option value="Sin huevo">Sin huevo</option>
                <option value="Sin lactosa">Sin lactosa</option>
              </select>
            </div>
          </div>

          <div className="cardcontainer">
            {filteredRecipes.map((recipe, index) => (
              <div className={getCardClassName(recipe)} key={index}>
                <Link to={`/recetas/${recipe.id}`}>
                  <img src={recipe.image} alt=''/>
                  <div className="recipe">{recipe.name}</div>
                </Link>
                {mealPlan.includes(recipe) ? (
                  <button onClick={() => removeFromMealPlan(recipe)}>Eliminar</button>
                ) : (
                  <button onClick={() => addToMealPlan(recipe)}>Agregar al plan</button>
                )}
              </div>
            ))}
          </div>

        </section>
      </main> 


      {/* Footer de la página */}
      <footer>
        <p>Contacto: <a href="mailto:info@yumyum.com">info@yumyum.com</a></p>
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
