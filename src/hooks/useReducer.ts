export const initialState = {
  userId: null,
  name: null,
  auth: {
    loggedIn: false,
    loggedInStatus: 'pending',
    loggedInError: null,
  },
  userData: [
    // Extraversion: 0,
    // Agreeableness: 0,
    // Conscientiousness: 0,
    // Stability: 0,
    // Openess: 0,
    {
      trait: 'o',
      value: 0,
    },
    {
      trait: 'c',
      value: 0,
    },
    {
      trait: 'e',
      value: 0,
    },
    {
      trait: 'a',
      value: 0,
    },
    {
      trait: 'n',
      value: 0,
    },
  ],
  questionPos: 0,
  questions: [
    'I am the life of the party.',
    'I feel little concern for others.',
    'I am always prepared.',
    'I get stressed out easily.',
    'I have a rich vocabulary.',
    "I don't talk a lot.",
    'I am interested in people.',
    'I Leave my belongings around.',
    'I am relaxed most of the time.',
    'I have difficulty understanding abstract ideas.',
    'I feel comfortable around people.',
    'I insult people.',
    'I pay attention to details.',
    'I worry about things.',
    'I have a vivid imagination.',
    'I keep in the background.',
    "I sympathize with others' feelings.",
    'I make a mess of things.',
    'I seldom feel blue.',
    'I am not interested in abstract ideas.',
  ],
  radioOption: 0,
}

export const stateReducer = (state, action) => {
  console.log('testing action arrival', action)
  switch(action.type) {
    case 'changeHandle': 
    return {
      ...state,
      radioOption: Number(action.payload),
    }
    case 'answer':
      console.log(action)
      const newUserData = state.userData.slice().reduce((a,b,c,d) => {
        const bCopy = Object.assign({}, b);
        a.push(bCopy)
        return a;
      },[])
      newUserData[action.payload.trait].value += action.payload.newScore
      return {
        ...state,
        userData: newUserData,
        questionPos: state.questionPos + 1,
      }
    default: 
    return state;
  }
}