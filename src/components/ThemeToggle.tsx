import { useTheme } from '../contexts/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-gray-700 hover:bg-gray-600"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
} 