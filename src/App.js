
import { Switch, Route } from 'react-router';

import { BrowserRouter} from 'react-router-dom';

import Characters from './components/Characters/Characters';
import Header from "./components/Header";
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={Characters} />
      </Switch>
    </BrowserRouter>

    </div>
  );
}

export default App;
