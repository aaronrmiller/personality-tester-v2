import * as React from 'react';
import { RouteComponentProps } from 'react-router';

// tells react router what the parameter is named
interface Props extends RouteComponentProps <{ id:string }> {

}

export const Post: React.FC<Props> = ({ match }) => {
  return (
    <div>
      rendering post {match.params.id}
    </div>
  );
}