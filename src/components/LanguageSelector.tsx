import { useTheme } from '../contexts/ThemeContext'

interface LanguageSelectorProps {
  value: string
  onChange: (language: string) => void
}

export const LanguageSelector = ({ value, onChange }: LanguageSelectorProps) => {
  const { theme } = useTheme()
  
  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' }
  ];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`px-3 py-2 rounded-md border ${
        theme === 'dark'
          ? 'bg-gray-800 text-white border-gray-700 focus:ring-blue-500'
          : 'bg-white text-gray-900 border-gray-300 focus:ring-blue-400'
      } focus:outline-none focus:ring-2`}
    >
      {languages.map((lang) => (
        <option 
          key={lang.value} 
          value={lang.value}
          className={theme === 'dark' ? 'bg-gray-800' : 'bg-white'}
        >
          {lang.label}
        </option>
      ))}
    </select>
  );
}; 