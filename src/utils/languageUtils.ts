import { Language } from '../types'

export function getLanguageId(language: Language): string {
  switch (language) {
    case 'cpp':
      return 'cpp'
    case 'python':
      return 'python'
    case 'java':
      return 'java'
    case 'javascript':
      return 'javascript'
    case 'csharp':
      return 'csharp'
    default:
      return 'plaintext'
  }
} 