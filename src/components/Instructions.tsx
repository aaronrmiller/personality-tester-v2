import React, { useEffect } from 'react'
import { history } from 'react-router-dom';

interface Props {

}

// TODO: make API call to load user averages

export const Instructions: React.FC<props> = ({ history }) => {
    // useEffect()
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