import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

interface EditorSettingsProps {
  fontSize: number
  onFontSizeChange: (size: number) => void
  tabSize: number
  onTabSizeChange: (size: number) => void
  wordWrap: boolean
  onWordWrapChange: (wrap: boolean) => void
}

export function EditorSettings(props: EditorSettingsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-md ${
          theme === 'dark' 
            ? 'bg-gray-700 hover:bg-gray-600' 
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        ⚙️
      </button>

      {isOpen && (
        <div className={`absolute right-0 mt-2 w-64 p-4 rounded-md shadow-lg ${
          theme === 'dark' 
            ? 'bg-gray-800 text-white' 
            : 'bg-white text-gray-900'
        }`}>
          <div className="space-y-4">
            {/* Font Size */}
            <div>
              <label className="block text-sm mb-1">Font Size</label>
              <input
                type="range"
                min="12"
                max="24"
                value={props.fontSize}
                onChange={e => props.onFontSizeChange(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-sm">{props.fontSize}px</span>
            </div>

            {/* Tab Size */}
            <div>
              <label className="block text-sm mb-1">Tab Size</label>
              <select
                value={props.tabSize}
                onChange={e => props.onTabSizeChange(Number(e.target.value))}
                className={`w-full p-1 rounded ${
                  theme === 'dark' 
                    ? 'bg-gray-700' 
                    : 'bg-gray-100'
                }`}
              >
                <option value="2">2 spaces</option>
                <option value="4">4 spaces</option>
                <option value="8">8 spaces</option>
              </select>
            </div>

            {/* Word Wrap */}
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={props.wordWrap}
                onChange={e => props.onWordWrapChange(e.target.checked)}
                className="mr-2"
              />
              <label className="text-sm">Word Wrap</label>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 