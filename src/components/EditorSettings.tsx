import { useTheme } from '../contexts/ThemeContext'

interface EditorSettingsProps {
  fontSize: number
  tabSize: number
  wordWrap: boolean
  onFontSizeChange: (size: number) => void
  onTabSizeChange: (size: number) => void
  onWordWrapChange: (wrap: boolean) => void
}

export const EditorSettings = ({
  fontSize,
  tabSize,
  wordWrap,
  onFontSizeChange,
  onTabSizeChange,
  onWordWrapChange,
}: EditorSettingsProps) => {
  const { theme } = useTheme()

  return (
    <div className="flex items-center gap-4">
      {/* Font Size Setting */}
      <div className="flex flex-col gap-1">
        <label className="text-sm">Font Size</label>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="10"
            max="24"
            value={fontSize}
            onChange={(e) => onFontSizeChange(Number(e.target.value))}
            className="w-24"
          />
          <span className="text-sm">{fontSize}px</span>
        </div>
      </div>

      {/* Tab Size Setting */}
      <div className="flex flex-col gap-1">
        <label className="text-sm">Tab Size</label>
        <select
          value={tabSize}
          onChange={(e) => onTabSizeChange(Number(e.target.value))}
          className={`px-2 py-1 rounded-md text-sm ${
            theme === 'dark'
              ? 'bg-gray-800 text-white border-gray-700'
              : 'bg-white text-gray-900 border-gray-300'
          } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <option value="2">2 spaces</option>
          <option value="4">4 spaces</option>
          <option value="8">8 spaces</option>
        </select>
      </div>

      {/* Word Wrap Setting */}
      <div className="flex items-center gap-2">
        <label className="text-sm">Word Wrap</label>
        <input
          type="checkbox"
          checked={wordWrap}
          onChange={(e) => onWordWrapChange(e.target.checked)}
          className={`w-4 h-4 rounded ${
            theme === 'dark'
              ? 'bg-gray-700 border-gray-600'
              : 'bg-white border-gray-300'
          } border focus:ring-2 focus:ring-blue-500`}
        />
      </div>

      {/* Reset Button */}
      <button
        onClick={() => {
          onFontSizeChange(14)
          onTabSizeChange(2)
          onWordWrapChange(true)
        }}
        className={`px-3 py-1 text-sm rounded-md ${
          theme === 'dark'
            ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
            : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
        }`}
      >
        Reset
      </button>
    </div>
  )
} 