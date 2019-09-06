import * as React from 'react';
import { withRouter } from 'react-router';

interface IProps {};

export const SpecialButton = withRouter(({ history }) => {
  return (
    <button onClick={() => {
      history.push('/posts/special')
    }}>
      
    </button>
  );
});