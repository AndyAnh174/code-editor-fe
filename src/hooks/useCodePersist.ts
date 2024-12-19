import { useState, useEffect } from 'react'
import { Language } from '../types'
import { DEFAULT_CODE } from '../constants/defaultCode'

export function useCodePersist(initialLanguage: Language) {
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState<Language>(initialLanguage)

  useEffect(() => {
    const savedCode = localStorage.getItem(`code_${language}`)
    if (savedCode) {
      setCode(savedCode)
    } else {
      setCode(DEFAULT_CODE[language])
    }
  }, [language])

  useEffect(() => {
    localStorage.setItem(`code_${language}`, code)
  }, [code, language])

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang)
    const savedCode = localStorage.getItem(`code_${newLang}`)
    if (savedCode) {
      setCode(savedCode)
    } else {
      setCode(DEFAULT_CODE[newLang])
    }
  }

  return {
    code,
    setCode,
    language,
    handleLanguageChange
  }
} 