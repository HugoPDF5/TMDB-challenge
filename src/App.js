import Home from './pages/Home/Home';
import Genre from './pages/Genres/Genre'
import Menu from './Components/Menu/Menu'
import {Router, Route} from 'react-router-dom'
import history from './history';


function App(){

    return (
      
    <Router history={history}>
      
      <Menu />
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/genres">
        <Genre />
      </Route>
    </Router>
    )
}

export default App;
