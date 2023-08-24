import React, { createContext, useContext, useState } from 'react';

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [mealPlan, setMealPlan] = useState([]);

  return (
    <PlanContext.Provider value={{ mealPlan, setMealPlan }}>
      {children}
    </PlanContext.Provider>
  );
}

export function usePlanContext() {
  return useContext(PlanContext);
}
