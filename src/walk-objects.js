import texts from './walk-texts.json'

// Object order matches the drawings and the numbered map reference.
export const walkObjects = [2, 16, 17, 15, 1, 3, 4, 0, 5, 6, 7, 8, 9, 12, 10, 13, 11, 14]
  .map(index => texts[index])
