import { Question, QuestionType } from "react-quiz-wizard";

export const questions: Array<Question> = [
  {
    type: QuestionType.Single,
    questionId: 1,
    correctAnswerId: 2,
    questionInfo: [
      { languageId: 1, title: 'What is 4-2' },
      { languageId: 2, title: `Qu'est-ce que 4-2?` }
    ],
    optionsInfo: [
      {
        id: 1,
        languageInfo: [
          { languageId: 1, title: '4' },
          { languageId: 2, title: '4' }
        ]
      },
      {
        id: 2,
        languageInfo: [
          { languageId: 1, title: '2' },
          { languageId: 2, title: "2" }
        ]
      },
      {
        id: 3,
        languageInfo: [
          { languageId: 1, title: '1' },
          {
            languageId: 2,
            title: '1'
          }
        ]
      },
      {
        id: 4,
        languageInfo: [
          { languageId: 1, title: '3' },
          { languageId: 2, title: '3' }
        ]
      }
    ]
  },
  {
    type: QuestionType.Single,
    questionId: 2,
    correctAnswerId: 1,
    questionInfo: [
      {
        languageId: 1,
        title: 'Is ReactJS Single Page Application?'
      },
      {
        languageId: 2,
        title:
          'Est-ce que ReactJS est une application monopage?'
      }
    ],
    optionsInfo: [
      {
        id: 1,
        languageInfo: [
          { languageId: 1, title: 'true' },
          { languageId: 2, title: 'vraie' }
        ]
      },
      {
        id: 2,
        languageInfo: [
          { languageId: 1, title: 'false' },
          { languageId: 2, title: 'faux' }
        ]
      }
    ]
  },
  {
    type: QuestionType.Single,
    questionId: 3,
    correctAnswerId: 1,
    questionInfo: [
      { languageId: 1, title: 'Capital Of India Is _____?' },
      { languageId: 2, title: `La capitale de l'Inde est _____` }
    ],
    optionsInfo: [
      {
        id: 1,
        languageInfo: [
          { languageId: 1, title: 'Delhi' },
          { languageId: 2, title: 'Delhi' }
        ]
      },
      {
        id: 2,
        languageInfo: [
          { languageId: 1, title: 'Mumbai' },
          { languageId: 2, title: 'Bombay' }
        ]
      },
      {
        id: 3,
        languageInfo: [
          { languageId: 1, title: 'Kolkata' },
          { languageId: 2, title: 'Calcutta' }
        ]
      },      
    ]
  },
  {
    type: QuestionType.Multiple,
    questionId: 4,
    correctAnswerId: [2, 3],
    questionInfo: [
      { languageId: 1, title: 'Which of the following hooks are provided by React?' },
      { languageId: 2, title: 'Parmi les crochets suivants, lesquels sont fournis par React?' }
    ],
    optionsInfo: [
      {
        id: 1,
        languageInfo: [
          { languageId: 1, title: 'useSelector()' },
          { languageId: 2, title: 'useSelector()' }
        ]
      },
      {
        id: 2,
        languageInfo: [
          { languageId: 1, title: 'useReducer()' },
          { languageId: 2, title: 'useReducer()' }
        ]
      },
      {
        id: 3,
        languageInfo: [
          { languageId: 1, title: 'useContext()' },
          { languageId: 2, title: 'useContext()' }
        ]
      },
      {
        id: 4,
        languageInfo: [
          { languageId: 1, title: 'useStore()' },
          { languageId: 2, title: 'useStore()' }
        ]
      }
    ]
  },
  {
    type: QuestionType.Single,
    questionId: 5,
    correctAnswerId: 4,
    questionInfo: [
      { languageId: 1, title: 'Which of the following is NOT a rule for React Hooks?' },
      {
        languageId: 2,
        title: "Lequel des éléments suivants n'est PAS une règle pour React Hooks?"
      }
    ],
    optionsInfo: [
      {
        id: 1,
        languageInfo: [
          { languageId: 1, title: 'Hooks can only be called at the top level of a component' },
          {
            languageId: 2,
            title:
              "React Hooks crochets ne peuvent être appelés qu'au niveau supérieur d'un composant"
          }
        ]
      },
      {
        id: 2,
        languageInfo: [
          { languageId: 1, title: 'Hooks cannot be conditional' },
          { languageId: 2, title: 'React Hooks ne peuvent pas être conditionnels' }
        ]
      },
      {
        id: 3,
        languageInfo: [
          { languageId: 1, title: 'Hooks can only be called inside React Function components' },
          {
            languageId: 2,
            title: "React Hooks ne peut être appelé qu'à l'intérieur des composants React Function"
          }
        ]
      },
      {
        id: 4,
        languageInfo: [
          { languageId: 1, title: 'Hooks can be called in Class or Function components ' },
          {
            languageId: 2,
            title: 'React Hooks peut être appelé dans les composants Class ou Function '
          }
        ]
      }
    ]
  }
]