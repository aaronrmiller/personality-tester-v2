import * as React from 'react'

const questions = [
  "I am the life of the party.",
  "I feel little concern for others.",
  "I am always prepared.",
  "I get stressed out easily.",
  "I have a rich vocabulary.",
  "I don't talk a lot.",
  "I am interested in people.",
  "I Leave my belongings around.",
  "I am relaxed most of the time.",
  "I have difficulty understanding abstract ideas.",
  "I feel comfortable around people.",
  "I insult people.",
  "I pay attention to details.",
  "I worry about things.",
  "I have a vivid imagination.",
  "I keep in the background.",
  "I sympathize with others' feelings.",
  "I make a mess of things.",
  "I seldom feel blue.",
  "I am not interested in abstract ideas."
];
const traits = [
  "Extraversion",
  "Agreeableness",
  "Conscientiousness",
  "EmotionalStability",
  "Openness"
];

interface IProps {

}

export const Questions: React.FC<IProps> = () => {

    return ();
}


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