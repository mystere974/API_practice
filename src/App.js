
import { Switch, Route } from 'react-router';

import { BrowserRouter} from 'react-router-dom';

import Characters from './components/Characters/Characters';
import Header from "./components/Header";
import GameDetail from './components/GameDetail/GameDetail';
import GameList from './components/GameList/GameList';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/gameDetail/:id" component={GameDetail} />
        <Route exact path="/gameList" component={GameList} />
      </Switch>
    </BrowserRouter>

    </div>
  );
}

export default App;
