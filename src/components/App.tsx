import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import { Instructions } from './Instructions';
import { Test } from './Test';
import { Results } from './Results';
import { stateReducer, initialState } from '../hooks/useReducer';
import Provider from '../hooks/context';
import useRouter from './routerUtil/useRouter';

import './../styles/style.sass';
import { Questions } from './Questions';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  console.log(state)
  // return (<Questions/>)
  const { location } = useRouter();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
  });
  return transitions.map(({ item, props, key }) => (
    <Provider value={{...state, dispatch}}>
      <animated.div key={key} style={props}>
        <Switch>
          <Route path="/" exact component={Instructions} />
          <Route path="/Test" exact component={Test} />
          <Route path="/Results" exact component={Results} />
          <Route render={() => <div>404</div>} />
        </Switch>
      </animated.div>
    </Provider>
  ));
};

export default App;
