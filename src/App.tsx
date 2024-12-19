import { useState } from 'react'
import { CodeEditor } from './components/CodeEditor'
import { OutputPanel } from './components/OutputPanel'
import { LanguageSelector } from './components/LanguageSelector'
import { ThemeToggle } from './components/ThemeToggle'
import { EditorSettings } from './components/EditorSettings'
import { useCodePersist } from './hooks/useCodePersist'
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts'
import { useCodeExecution } from './hooks/useCodeExecution'
import { useTheme } from './contexts/ThemeContext'
import './App.css'

function App() {
  const { theme } = useTheme()
  const { code, setCode, language, handleLanguageChange } = useCodePersist('cpp')
  const { isRunning, result, executeCode } = useCodeExecution()
  const [editorSettings, setEditorSettings] = useState({
    fontSize: 14,
    tabSize: 2,
    wordWrap: true
  })

  const handleRunCode = () => {
    executeCode(code, language)
  }

  useKeyboardShortcuts(handleRunCode)

  return (
    <div className={`w-full h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className={`flex items-center justify-between p-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <h1 className="text-xl font-bold">Code Editor</h1>
        <div className="flex items-center gap-4">
          <LanguageSelector 
            value={language}
            onChange={handleLanguageChange}
          />
          <ThemeToggle />
          <EditorSettings
            {...editorSettings}
            onFontSizeChange={size => setEditorSettings(prev => ({ ...prev, fontSize: size }))}
            onTabSizeChange={size => setEditorSettings(prev => ({ ...prev, tabSize: size }))}
            onWordWrapChange={wrap => setEditorSettings(prev => ({ ...prev, wordWrap: wrap }))}
          />
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className={`px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md disabled:opacity-50 text-white`}
          >
            {isRunning ? 'Đang chạy...' : 'Chạy (Ctrl+Enter)'}
          </button>
        </div>
      </div>
      
      <div className="flex-1 w-full grid grid-cols-2">
        <div className={`h-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <CodeEditor 
            language={language}
            value={code}
            onChange={setCode}
            options={{
              ...editorSettings,
              theme: theme === 'dark' ? 'vs-dark' : 'vs',
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>

        <div className={`h-full border-l ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <OutputPanel 
            output={result.output}
            error={result.error}
            theme={theme}
          />
        </div>
      </div>
    </div>
  )
}

export default App
