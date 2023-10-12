import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import './Home.css';
import './Recetas.css';

function Recetas() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState('ingredients');
  const [personas, setPersonas] = useState(1);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:8000/yum/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error('Error al obtener la receta:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!recipe) {
    return <div>No se encontró la receta.</div>;
  }

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handlePeopleChange = (event) => {
    setPersonas(Number(event.target.value));
  }

  const renderContent = () => {
    if (activeTab === "ingredients") {
      return (
        <ul className='ingredients'>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              <div className='ingredientDetail'>            
                <div>{ingredient.name}</div>
                <div>{parseFloat(ingredient.quantity) > 0
                ? `${(parseFloat(ingredient.quantity) * personas).toFixed(0)}`
                : ''}
                </div>
                <span>{ingredient.unit}</span>
              </div>            
            </li>            
          ))}          
        </ul>
      );
    } else if (activeTab === 'instructions') {
      return (
        <ul className="ingredients">
          {recipe.instructions.map((instruction) => (
            <li key={instruction.step}>
            <div className="instructionDetail">
                <div className= "leftColumn">Paso {instruction.step}</div>
                <div className= "rightColumn">{instruction.describe}</div>
            </div>
            </li>
          ))}
        </ul>  
      );
    }
  };

  return (
    <div>
      {/* Header de la página */}
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

      {/* Contenido principal de la página */}
      <main>
        <section>
          <div className='recipecontainer'>
            <div className='recipename' key={recipe.id}>
              {recipe.name}
            </div>
            <div className='recipegrid' key={recipe.id}>
                <div className='recipeleft'>
                  <div className='recipedata'>
                    <div className='time'>
                      {recipe.time}
                    </div>
                    <div className='time'>
                      {recipe.cal}
                    </div>
                    <div className='servings'>
                      <select className="menus" value={personas} onChange = {handlePeopleChange}> 
                        <option value="1">1 persona</option>
                        <option value="2">2 personas </option>
                        <option value="3">3 personas </option>
                        <option value="4">4 personas</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <img src={recipe.image} alt={recipe.name} height={600} width={600} className='recipeImage' />
                  </div>
                </div>
                <div className='reciperight'>
                  <div className='cardtitles'>
                    <button className={activeTab === 'ingredients' ? 'selectedbutton' : 'cardbutton'} onClick={() => handleTabClick('ingredients')}>
                      Ingredientes
                    </button>
                    <button className={activeTab === 'instructions' ? 'selectedbutton' : 'cardbutton'} onClick={() => handleTabClick('instructions')}>
                      Instrucciones
                    </button>
                  </div>
                  <div className='cardinfo'>
                  {renderContent()}
                  </div>
                </div>
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

export default Recetas;
