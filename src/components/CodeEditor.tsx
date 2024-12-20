import Editor from "@monaco-editor/react"

interface CodeEditorProps {
  language: string
  value: string
  onChange: (value: string) => void
  options?: {
    theme?: string
    fontSize?: number
    tabSize?: number
    wordWrap?: boolean
    minimap?: { enabled: boolean }
    scrollBeyondLastLine?: boolean
    automaticLayout?: boolean
  }
}

export const CodeEditor = ({ language, value, onChange, options }: CodeEditorProps) => {
  const getLanguageId = () => {
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

  const handleEditorChange = (value: string | undefined) => {
    onChange(value || '')
  }

  return (
    <Editor
      height="100%"
      defaultLanguage={getLanguageId()}
      language={getLanguageId()}
      value={value}
      onChange={handleEditorChange}
      theme={options?.theme || "vs-dark"}
      options={{
        fontSize: options?.fontSize || 14,
        minimap: options?.minimap || { enabled: false },
        scrollBeyondLastLine: options?.scrollBeyondLastLine || false,
        automaticLayout: options?.automaticLayout || true,
        tabSize: options?.tabSize || 2,
        wordWrap: options?.wordWrap || 'on',
        padding: { top: 16, bottom: 16 },
      }}
    />
  )
} 