import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import Main from './views/Main';
import Detail from './views/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/product/:id">
          <Detail />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
