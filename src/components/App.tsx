import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Home } from './Home';
// import { About } from './About';
// import { Post } from './Post';

import { Instructions } from './Instructions';
import { Test } from './Test';
import { Results } from './Results';

import './../styles/style.sass'

// const App: React.FC = () => {
//   return (
//     <BrowserRouter>
//     <Switch>
//       <Route path='/' exact component={Home} />
//       <Route path='/about' exact component={About} />
//       <Route path='/posts/:id' exact component={Post} />
//       <Route render={() => <div>404</div>} />
//     </Switch>
//     </BrowserRouter>
//   );
// }

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Instructions} />
      <Route path='/Test' exact component={Test} />
      <Route path='/Results' exact component={Results} />
      <Route render={() => <div>404</div>} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;