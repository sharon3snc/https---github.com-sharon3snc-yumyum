import React from 'react';
import { usePlanContext } from './PlanContext'; 

function Planes() {
  const { mealPlan } = usePlanContext(); 
  console.log(mealPlan);

  return (
    <div>
      <h2>Mi Plan de Comidas Semanal</h2>
      
      {mealPlan.map((recipe) => (
        <div key={recipe.id}>
          <img src={recipe.image} alt={recipe.name} />
          <span>{recipe.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Planes;
