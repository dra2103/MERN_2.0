import {BrowserRouter, Switch, Route,Link} from 'react-router-dom'
import './App.css';
import Main from './views/Main';
import UpdateAuthor from './views/UpdateAuthor'
import CreateAuthor from './views/CreateAuthor'

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/update/:id">
              <UpdateAuthor />
            </Route>
            <Route exact path="/new">
              <CreateAuthor />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
