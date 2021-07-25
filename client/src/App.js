import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Map } from './pages/Map';
import { Producer } from './pages/Producer';
import { Grocery } from './pages/Grocery';
 
function App() {
  useEffect(() => {
    setTimeout(() => {
      window.confirm('Oi, sua batata ta podre');
    }, 10000);
	}, []);
	
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/map' exact component={Map} />
        <Route path='/grocery' component={Grocery} />
        <Route path='/producer/:id' exact component={Producer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
