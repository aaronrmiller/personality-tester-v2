import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { SpecialButton } from './SpecialButton';

interface Props extends RouteComponentProps {

}

export const Home: React.FC<Props> = ({ history, location, match  }) => {
  console.log(location, match)
  return (
    <>
    <div>Home</div>
    <Link to="/about">Go to About</Link>
    <button onClick={() => {
      // api call
      // change to about page
      history.push('/about')
    }}>click me to go to about</button>
    <SpecialButton />
    </>
  );
}

// import React from 'react'

// export const Home = () => {
//   return (
//     <div>
//       Test
//     </div>
//   )
// };
