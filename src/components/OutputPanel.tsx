interface OutputPanelProps {
  output: string
  error?: string
  theme?: 'light' | 'dark'
}

export function OutputPanel({ output, error, theme = 'dark' }: OutputPanelProps) {
  return (
    <div className={`h-full p-4 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <h2 className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        Output
      </h2>
      {error ? (
        <pre className="font-mono text-sm text-red-500 whitespace-pre-wrap">
          {error}
        </pre>
      ) : (
        <pre className={`font-mono text-sm whitespace-pre-wrap ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {output || 'Chưa có kết quả...'}
        </pre>
      )}
    </div>
  )
} 