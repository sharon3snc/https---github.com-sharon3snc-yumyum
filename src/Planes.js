import React from 'react';
import { Link } from 'react-router-dom';
import { usePlanContext } from './PlanContext'; 
import './Home.css';
import './Planes.css';
import './Recetas.css';                           

function Planes() {
  const { mealPlan, setMealPlan } = usePlanContext(); 
  
  const removeFromMealPlan = (recipeId) => {
    const updatedMealPlan = mealPlan.filter((recipe) => recipe.id !== recipeId);
    setMealPlan(updatedMealPlan);
  };

  const ingredientQuantities = {};

  const handleComensalesChange = (recipe, event) => {
    const newComensales = parseInt(event.target.value, 10);
    if (!isNaN(newComensales)) {
      const updatedMealPlan = mealPlan.map((r) => {
        if (r.id === recipe.id) {
          return { ...r, comensales: newComensales };
        }
        return r;
      });

      setMealPlan(updatedMealPlan);
    }
  };


  mealPlan.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      const { name, quantity, unit } = ingredient;
      const parsedQuantity = parseFloat(quantity); 
      if (!isNaN(parsedQuantity)) {
        if (ingredientQuantities[name]) {
          ingredientQuantities[name].quantity += parsedQuantity * recipe.comensales;
        } else {
          ingredientQuantities[name] = { quantity: parsedQuantity * recipe.comensales, unit };
        }
      }
    });
  });


return (
  <div>
    <header>
            <h1>Yum Yum</h1>
            <nav>
              <ul>
              <li className="login-link">
                <Link to="/">Inicio</Link>
              </li>
                <li className="login-link">
                  <a href="/login">Login</a>
                </li>
              </ul>
            </nav>
      </header>
    <main>
      <div className='planescontainer'>
        <h2>Mi Plan de Comidas Semanal</h2>
        <div className="cardcontainer">
          {mealPlan.map((recipe) => (
            <div className="card" key={recipe.id}>
              <img src={recipe.image} alt={recipe.name} />
              <span>{recipe.name}</span>
              <select className="menus" value={recipe.comensales} onChange={(event) => handleComensalesChange(recipe, event)}>
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
              </select>
              <button onClick={() => removeFromMealPlan(recipe.id)}>Eliminar</button>
            </div>
          ))}
          </div>
      </div>

        <div className="ingredients-container">
          <h2>Lista de la compra</h2>
          <div className="listcontainer">
            <ul className="ingredients-list">
              {Object.keys(ingredientQuantities).map((ingredientName, index) => (
                <li key={index}>
                  <div className='ingredientDetail'>  
                  <div>{ingredientName} </div>
                  <div>{ingredientQuantities[ingredientName].quantity} </div>
                  <span>{ingredientQuantities[ingredientName].unit}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </main>
  </div>
  );
}

export default Planes;
