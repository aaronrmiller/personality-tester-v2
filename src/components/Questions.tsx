import React, { useContext } from 'react';
import { stateContext } from '../hooks/context';

// TODO:
// 1. change handler
// 2. if time, increment question
// 3. add interface for reducers and union types
// 4. add sass partial, nested, style one component

interface IProps {}
const answers = [
  'Strongly Disagree',
  'Disagree',
  'Neutral',
  'Agree',
  'Strongly Agree',
];

export const Questions: React.FC<IProps> = () => {
  const { questions, questionPos, radioOption, dispatch } = useContext(
    stateContext
  );
  console.log('testing state', radioOption);

  return (
    <>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          dispatch({
            type: 'ANSWER',
            payload: { trait: questionPos % 5, newScore: radioOption },
          })
        }}
      >
        <h2>Question {questionPos + 1}: </h2>
        <p>{questions[questionPos]}</p>
        <label htmlFor="">
          Strongly Disagree
          <input
            type="radio"
            name="radioOption"
            value={1}
            checked={radioOption === 1}
            className="radio-button-1"
            onChange={(e: React.FormEvent<HTMLFormElement>) => dispatch({type: 'CHANGE_HANDLER', payload: e.target.value})}
          />
        </label>
        <label htmlFor="">
          Disagree
          <input 
          type="radio"
          name="radioOption"
          value={2}
          checked={radioOption === 2}
          className="radio-button-1"
          onChange={(e: React.FormEvent<HTMLFormElement>) => dispatch({type: 'CHANGE_HANDLER', payload: e.target.value})}
          />
        </label>
        <label htmlFor="">
          Neutral
          <input 
          type="radio"
          name="radioOption"
          value={3}
          checked={radioOption === 3}
          className="radio-button-1"
          onChange={(e: React.FormEvent<HTMLFormElement>) => dispatch({type: 'CHANGE_HANDLER', payload: e.target.value})}
          />
        </label>
        <label htmlFor="">
          Agree
          <input 
          type="radio"
          name="radioOption"
          value={4}
          checked={radioOption === 4}
          className="radio-button-1"
          onChange={(e: React.FormEvent<HTMLFormElement>) => dispatch({type: 'CHANGE_HANDLER', payload: e.target.value})}
          />
        </label>
        <label htmlFor="">
          Strongly Agree
          <input 
          type="radio"
          name="radioOption"
          value={5}
          checked={radioOption === 5}
          className="radio-button-1"
          onChange={(e: React.FormEvent<HTMLFormElement>) => dispatch({type: 'CHANGE_HANDLER', payload: e.target.value})}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

        /* {answers.map((item, index, array) => (
          <div key={index}>
          <label htmlFor={`radioOption`}>
            {item}
            <input
              type="radio"
              name={`radioOption`}
              value={`option-${index + 1}`}
              checked={radioOption === 'option-1'}
              className={`radiobutton-${index}`}
              onChange={e =>
                dispatch({ type: 'changeHandle', payload: e.target.value })
              }
            />
          </label>
          </div>
        ))} */
// "I am the life of the party.", E
// "I feel little concern for others.", A
// "I am always prepared.", C
// "I get stressed out easily.", N
// "I have a rich vocabulary.", O
// "I don't talk a lot.", E
// "I am interested in people.", A
// "I Leave my belongings around.", C
// "I am relaxed most of the time.", N
// "I have difficulty understanding abstract ideas.", O
// "I feel comfortable around people.", E
// "I insult people.", A
// "I pay attention to details.", C
// "I worry about things.", N
// "I have a vivid imagination.", O
// "I keep in the background.", E
// "I sympathize with others' feelings.", A
// "I make a mess of things.", C
// "I seldom feel blue.", N
// "I am not interested in abstract ideas." O

// const questions = [
//   'I am the life of the party.',
//   'I feel little concern for others.',
//   'I am always prepared.',
//   'I get stressed out easily.',
//   'I have a rich vocabulary.',
//   "I don't talk a lot.",
//   'I am interested in people.',
//   'I Leave my belongings around.',
//   'I am relaxed most of the time.',
//   'I have difficulty understanding abstract ideas.',
//   'I feel comfortable around people.',
//   'I insult people.',
//   'I pay attention to details.',
//   'I worry about things.',
//   'I have a vivid imagination.',
//   'I keep in the background.',
//   "I sympathize with others' feelings.",
//   'I make a mess of things.',
//   'I seldom feel blue.',
//   'I am not interested in abstract ideas.',
// ];
// const traits = [
//   'Extraversion',
//   'Agreeableness',
//   'Conscientiousness',
//   'EmotionalStability',
//   'Openness',
// ];
