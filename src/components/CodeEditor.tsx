import Editor from "@monaco-editor/react"

interface CodeEditorProps {
  language: string
  value: string
  onChange: (value: string) => void
}

export function CodeEditor({ language, value, onChange }: CodeEditorProps) {
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
      theme="vs-dark"
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        automaticLayout: true,
        tabSize: 2,
        wordWrap: 'on',
        padding: { top: 16, bottom: 16 },
      }}
    />
  )
} 