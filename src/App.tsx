import React, { FunctionComponent,} from 'react'; 
import PokemonList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemion-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';

const App: FunctionComponent = () => { 
 
    return (
        <Router>
            <div>
                {/* navbar */}
                <nav>
                    <div className='nav-wapper teal'>
                        <Link to="/" className='brand-logo center'>Pokédex</Link>
                    </div>
                </nav>
                {/*systeme des routes de l'application */}
                <Switch>
                    <PrivateRoute exact path="/" component={PokemonList} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/pokemons" component={PokemonList} />
                    <PrivateRoute exact path= "/pokemons/add" component={PokemonAdd} />
                    <PrivateRoute exact path="/pokemons/edit/:id" component={PokemonEdit} />
                    <PrivateRoute path="/pokemons/:id" component={PokemonsDetail} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    );                             
}    
  
export default App; 





//importation module react
//typage du composant app en react.fc; fc = function component 
    
//pas de hooks dans une boucle ou d'une condition, toujours utilisés les hooks a la racine
// toujours appeler les hooks depuis un composant de function 
//useState recois une methode pour deuxieme argument qui permet de modif l'etat du composant 

  
//exportation du composant pour le rendre utilisable dans le reste de l'appli 