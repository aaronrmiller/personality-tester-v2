import React, { Component } from 'react'

export default class App extends Component {

  componentDidMount(){
    fetch('/testone/results')
    // .then(res => res.json())
    .then(res => {
      console.log('return', res)
    })
    .catch(err => console.log('error', err));
  }

  render() {
    return (
      <div>
        Test
      </div>
    )
  }
}

// export const fetchTest = () => dispatch => {
//   dispatch(requestAPI);

//   return fetch("/api/test")
//     .then(res => res.json())
//     .then(res => {
//       if (!isValid(res)) throw new Error("something went wrong");
//       return dispatch(receiveAPI(res));
//     })
//     .catch(err => {
//       dispatch(receiveFailure(err))
//     });
// };