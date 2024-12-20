import { useLocalStorage } from './useLocalStorage'

interface SavedCode {
  code: string;
  language: string;
  lastModified: number;
}

export const useCodePersist = () => {
  const [savedCodes, setSavedCodes] = useLocalStorage<SavedCode[]>('saved-codes', [])

  const saveCode = (code: string, language: string) => {
    setSavedCodes(prev => [
      ...prev,
      {
        code,
        language,
        lastModified: Date.now()
      }
    ].slice(-10)) // Giữ 10 code gần nhất
  }

  return { savedCodes, saveCode }
} 