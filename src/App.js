import {Route} from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import NavMenu from './components/layout/NavMenu';

function App() {
  return (
    <div>
     <NavMenu />
     <switch>
      <Route path='/' exact><Home /></Route>
      <Route path='/about'><About /></Route>
      <Route path='/services'><Services /></Route>
      <Route path='/products'><Products /></Route>
      <Route path='/contact'><Contact /></Route>
     </switch>
    </div>
  );
}

export default App;
