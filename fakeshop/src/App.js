import './App.css';
import Header from './container/Header/Header';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import ProductList from './container/ProductList/ProductList';
import ProductDetails from './container/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App__wrapper">
      <Router>
          <Header/>
          <Switch>
            <Route path="/" exact component = {ProductList}/>
            <Route path="/product/:productId" exact component = {ProductDetails}/>
            <Route>404</Route>
          </Switch>
      </Router>

    </div>
  );
}

export default App;
