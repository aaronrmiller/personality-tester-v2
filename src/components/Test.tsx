import React, { useContext } from 'react'
import { history } from 'react-router-dom'; 
import { Questions } from './Questions';
import ChartResults from './ChartResults';
import { stateContext } from '../hooks/context';


// TODO: Needs three components:
// 1. Radar component
// 2. question component
// 3. answer component
// 4. title component 
interface Props {

}

export const Test: React.FC<props> = ({ history }) => {
  const { questionPos } = useContext(stateContext);
    return (
      <>
      <h1>Test</h1>
      <Questions />
      <ChartResults />
      {questionPos === 21 ? <button onClick={() => {
        history.push('/Results');
      }}>Results</button> : null}
      </>
    );
}