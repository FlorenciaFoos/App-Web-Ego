
import './App.css';
import Home from './components/home/home.component'
import Details from './components/details/details.component'
import { Footer } from './components/footer/footer.styles'
import { Switch, Route } from "react-router-dom";
import Menu from './components/menu/Menu/menu.component'

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/model/:id' component={Details} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
