import { useTheme } from '../contexts/ThemeContext'

interface LanguageSelectorProps {
  value: string
  onChange: (language: any) => void
}

export function LanguageSelector({ value, onChange }: LanguageSelectorProps) {
  const { theme } = useTheme()
  const languages = [
    { id: 'cpp', name: 'C/C++' },
    { id: 'python', name: 'Python' },
    { id: 'java', name: 'Java' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'csharp', name: 'C#' }
  ]

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`px-3 py-2 rounded-md border ${
        theme === 'dark' 
          ? 'bg-gray-800 text-white border-gray-700' 
          : 'bg-white text-gray-900 border-gray-300'
      }`}
    >
      {languages.map(lang => (
        <option key={lang.id} value={lang.id}>
          {lang.name}
        </option>
      ))}
    </select>
  )
} 