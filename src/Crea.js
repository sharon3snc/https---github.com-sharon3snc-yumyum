import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import './Recetas.css';
import './Crea.css';

function Crea() {
  const [recipe, setRecipe] = useState({
    name: '',
    image: 'https://cdn-icons-png.flaticon.com/512/2424/2424721.png',
    time: '',
    cal: '',
    menu: '',
    restriccion: '',
    ingredients: [],
    instructions: [],
    comensales: 1,
  });

  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const [newIngredient, setNewIngredient] = useState({
    name: '',
    quantity: '',
    unit: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };


  const handleNewIngredientChange = (e) => {
    const { name, value } = e.target;
    setNewIngredient({
      ...newIngredient,
      [name]: value,
    });
  };

  const addIngredient = () => {
    if (newIngredient.name && newIngredient.quantity) {
      setRecipe((prevRecipe) => ({
        ...prevRecipe,
        ingredients: [...prevRecipe.ingredients, newIngredient],
      }));
      setNewIngredient({
        name: '',
        quantity: '',
        unit: '',
      });
    }
  };

  const deleteIngredient = (index) => {
    setRecipe((prevRecipe) => {
      const updatedIngredients = [...prevRecipe.ingredients];
      updatedIngredients.splice(index, 1);
      return { ...prevRecipe, ingredients: updatedIngredients };
    });
  };

  const validateFields = () => {
    const requiredFields = ['name', 'time', 'cal', 'menu', 'restriccion'];
    const newError = {};

    requiredFields.forEach((field) => {
      if (!recipe[field]) {
        newError[field] = 'Este campo es obligatorio';
      }
    });

    setError(newError);

    return Object.keys(newError).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateFields()) {
      try {
        console.log('Datos a enviar:', recipe);

        const response = await fetch('http://localhost:8000/yum/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(recipe),
        });

        if (response.ok) {
          setSuccessMessage('Receta guardada correctamente');
          setTimeout(() => {
            // Redirigir al usuario al Home después de 2 segundos
            navigate('/');
          }, 2000);
        } else {
          console.error('Error al guardar la receta');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    }
  };

  return (
<div>
    <header>
        <h1>Yum Yum</h1>
        <nav>
          <ul>
          <li className="login-link">
                <Link to="/">Ver todas las recetas</Link>
            </li>
          </ul>
        </nav>
      </header>

    <main>
        <div className="form-container">
        <h2 className="form-title">Crea tu receta</h2>
        <form onSubmit={handleSubmit}>
            <label className="form-label">Nombre de la receta:
            <input type="text" name="name" value={recipe.name} onChange={handleChange} className="form-input"/>
            </label >
            {error.name && <span className="error-message">{error.name}</span>}
            <label className="form-label">Tiempo:
            <input type="text" name="time" value={recipe.time} onChange={handleChange} className="form-input"/>
            </label>
            {error.name && <span className="error-message">{error.name}</span>}
            <label className="form-label">Calorías:
            <input type="text" name="cal" value={recipe.cal} onChange={handleChange} className="form-input" />
            </label>
            {error.name && <span className="error-message">{error.name}</span>}
            <label className="form-label">Menu:
            <select name= 'menu' className="form-input" value={recipe.menu} onChange={handleChange}>
                <option value="Todos">Todos los menus</option>
                <option value="Bajo en calorías">Bajo en calorías</option>
                <option value="Vegetariano">Vegetariano</option>
                <option value="Vegano">Vegano</option></select>
            </label>
            {error.name && <span className="error-message">{error.name}</span>}
            <label className="form-label">Restriccion:
            <select name= "restriccion" className="form-input" value={recipe.restriccion} onChange={handleChange}>
                <option value="Todos">Sin restricciones</option>
                <option value="Sin gluten">Sin gluten</option>
                <option value="Sin huevo">Sin huevo</option>
                <option value="Sin lactosa">Sin lactosa</option>
            </select>
            </label>
            {error.name && <span className="error-message">{error.name}</span>}
            <label className="form-label">Ingredientes para 1 persona:</label>
            <div className="ingredient-inputs">
                <input type="text" name="name" placeholder="Nombre del ingrediente" value={newIngredient.name} onChange={handleNewIngredientChange} />
                <input type="text" name="quantity" placeholder="Cantidad" value={newIngredient.quantity} onChange={handleNewIngredientChange}/>
                <select name="unit" value={newIngredient.unit} onChange={handleNewIngredientChange}>
                  <option value="unid">unid</option>
                  <option value="gr">gr</option>
                  <option value="ml">ml</option>
                  <option value="cda">cda</option>
                  <option value="taza">taza</option>
                  <option value="lata">lata</option>
                </select>
                <button type="button" onClick={addIngredient}> Agregar Ingrediente </button>
              </div>
            
              <ul className="ingredients-list2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                <div>
                  <span className='ingredient-style'>{ingredient.name}</span>
                  <span className='ingredient-style'>{ingredient.quantity}</span>
                  <span className='ingredient-style'>{ingredient.unit}</span>
                  <button onClick={() => deleteIngredient(index)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>

            <button type="submit">Guardar receta</button>
        </form>
        </div>
    </main>
    </div>
  );
}

export default Crea;

