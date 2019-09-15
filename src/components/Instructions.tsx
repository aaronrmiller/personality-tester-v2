import * as React from 'react'
import { history } from 'react-router-dom';

interface Props {

}


export const Instructions: React.FC<props> = ({ history }) => {
    return (
      <>
      <h1>Instructions</h1>
      <p>Blablabla</p>
      <button onClick={() => {
        history.push('/Test')
      }}>Begin Test</button>
      </>
    );
}