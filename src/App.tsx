import { useState } from 'react'
import { CodeEditor } from './components/CodeEditor'
import { OutputPanel } from './components/OutputPanel'
import { LanguageSelector } from './components/LanguageSelector'
import { ThemeToggle } from './components/ThemeToggle'
import { EditorSettings } from './components/EditorSettings'
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts'
import { useCodeExecution } from './hooks/useCodeExecution'
import { useTheme } from './contexts/ThemeContext'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useDefaultCode } from './hooks/useDefaultCode'
import './App.css'

interface EditorState {
  code: string;
  language: string;
  input: string;
  settings: {
    fontSize: number;
    tabSize: number;
    wordWrap: boolean;
  };
}

const defaultState: EditorState = {
  code: `// Chọn ngôn ngữ để xem code mẫu
// hoặc bắt đầu viết code của bạn`,
  language: 'javascript',
  input: '',
  settings: {
    fontSize: 14,
    tabSize: 2,
    wordWrap: true
  }
};

function App() {
  const { theme } = useTheme()
  const [editorState, setEditorState] = useLocalStorage<EditorState>('editor-state', defaultState)
  const { 
    isRunning, 
    result, 
    executeCode,
    clearOutput 
  } = useCodeExecution();
  const { getDefaultCode } = useDefaultCode()

  const handleCodeChange = (newCode: string) => {
    setEditorState(prev => ({ ...prev, code: newCode }));
  };

  const handleLanguageChange = (newLanguage: string) => {
    setEditorState(prev => ({
      ...prev,
      language: newLanguage,
      code: getDefaultCode(newLanguage)
    }));
  };

  const handleInputChange = (newInput: string) => {
    setEditorState(prev => ({ ...prev, input: newInput }));
  };

  const handleSettingsChange = (key: keyof EditorState['settings'], value: any) => {
    setEditorState(prev => ({
      ...prev,
      settings: { ...prev.settings, [key]: value }
    }));
  };

  const handleRunCode = () => {
    executeCode(editorState.code, editorState.language, editorState.input)
  }

  useKeyboardShortcuts(handleRunCode)

  return (
    <div className={`w-full h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className={`flex items-center justify-between p-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <h1 className="text-xl font-bold">Code Editor</h1>
        <div className="flex items-center gap-4">
          <LanguageSelector 
            value={editorState.language}
            onChange={handleLanguageChange}
          />
          <ThemeToggle />
          <EditorSettings
            {...editorState.settings}
            onFontSizeChange={size => handleSettingsChange('fontSize', size)}
            onTabSizeChange={size => handleSettingsChange('tabSize', size)}
            onWordWrapChange={wrap => handleSettingsChange('wordWrap', wrap)}
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
            language={editorState.language}
            value={editorState.code}
            onChange={handleCodeChange}
            options={{
              ...editorState.settings,
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
            input={editorState.input}
            onInputChange={handleInputChange}
            onOutputClear={clearOutput}
            isRunning={isRunning}
          />
        </div>
      </div>
    </div>
  )
}

export default App
