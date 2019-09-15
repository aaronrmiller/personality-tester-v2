import * as React from 'react'
import { history } from 'react-router-dom'; 


// TODO: Needs three components:
// 1. Radar component
// 2. question component
// 3. answer component
// 4. title component 
interface Props {

}

export const Test: React.FC<props> = ({ history }) => {
    return (
      <>
      <h1>Test</h1>

      <button onClick={() => {
        history.push('/Results');
      }}>Results</button>
      </>
    );
}