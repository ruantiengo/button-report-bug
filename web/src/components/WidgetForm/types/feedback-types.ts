import bugImageUrl from '../../../assets/Figmoji/bug.svg'
import ideaImageUrl from '../../../assets/Figmoji/idea.svg'
import thoughtImageUrl from '../../../assets/Figmoji/thought.svg'
export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    img: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    img: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outro ',
    img: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  }
}
export type FeedbackType = keyof typeof feedbackTypes
