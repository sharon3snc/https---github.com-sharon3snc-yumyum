import React, { createContext, useContext, useState, useEffect } from 'react';

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [mealPlan, setMealPlan] = useState([]);

  useEffect(() => {
    const storedPlan = JSON.parse(localStorage.getItem('mealPlan') || '[]');
    setMealPlan(storedPlan);
  }, []);

  useEffect(() => {
    localStorage.setItem('mealPlan', JSON.stringify(mealPlan));
  }, [mealPlan]);

  return (
    <PlanContext.Provider value={{ mealPlan, setMealPlan }}>
      {children}
    </PlanContext.Provider>
  );
}

export function usePlanContext() {
  return useContext(PlanContext);
}
