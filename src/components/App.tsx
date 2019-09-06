import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { Post } from './Post';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/posts/:id' exact component={Post} />
      <Route render={() => <div>404</div>} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;