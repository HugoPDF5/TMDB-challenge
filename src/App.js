import Home from './pages/Home/Home';
import Genre from './pages/Genres/Genre'
import Menu from './Components/Menu/Menu'
import MenuGenres from './Components/Menu/MenuGenres'
import {Router, Route} from 'react-router-dom'
import history from './history';


function App(){

  
    return (
      
    <Router history={history}>
     
      <Route exact path="/">
      <Menu />
        <Home />
      </Route>

      <Route path="/genres">
        <MenuGenres />
        <Genre />
      </Route>
    </Router>
    )
}

export default App;
