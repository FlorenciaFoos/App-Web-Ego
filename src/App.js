
import './App.css';
import Home from './components/home/home.component'
import Details from './components/details/details.component'

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/model/:id' component={Details} />
      </Switch>
    </div>
  );
}

export default App;
