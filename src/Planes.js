import React from 'react';
import { usePlanContext } from './PlanContext'; 
import './Home.css';
import './Planes.css';                           

function Planes() {
  const { mealPlan } = usePlanContext(); 
  console.log(mealPlan);

  return (
    <div className='planescontainer'>
      <h2>Mi Plan de Comidas Semanal</h2>
      <div className="cardcontainer">
        {mealPlan.map((recipe) => (
          <div className="card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <span>{recipe.name}</span>
            <select className="menus">
              <option value="1">1 persona</option>
              <option value="2">2 personas</option>
              <option value="3">3 personas</option>
              <option value="4">4 personas</option>
            </select>

            <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.name}</li>
            ))}
          </ul>

          </div>
        ))}
        </div>
    </div>
  );
}

export default Planes;
