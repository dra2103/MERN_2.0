import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Create from './views/Create';
import Details from './views/Details';
import Edit from './views/Edit';
import Main from './views/Main';

function App() {
  return (
    <div className="container mt-5">
      <BrowserRouter>
        <h1>Jobs DB</h1>
        <Switch>
          <Route exact path ='/'>
            <Main />
          </Route>
          <Route exact path = '/new'>
            <Create />
          </Route>
          <Route exact path = '/job/:id'>
            <Details />
          </Route>
          <Route exact path = '/edit/:id'>
            <Edit />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
