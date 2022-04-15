export interface Question {
  questionId: number
  type: QuestionType
  correctAnswerId: number | Array<number>
  questionInfo: Array<LanguageMap> 
  optionsInfo: Array<AnswerMap>
}

export interface LanguageMap {
  languageId: number
  title: string
}

export interface AnswerMap {
  id: number
  languageInfo: Array<LanguageMap>
}

export enum QuestionType {
  Single,
  Multiple
}
