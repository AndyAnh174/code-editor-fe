import { useState } from 'react'

interface ExecutionResult {
  output: string;
  error: string;
}

export const useCodeExecution = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [result, setResult] = useState<ExecutionResult>({ output: '', error: '' })

  const clearOutput = () => {
    setResult({ output: '', error: '' });
  };

  const executeCode = async (code: string, language: string, input: string) => {
    setIsRunning(true)
    
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, language, input }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setResult({
        output: data.output || '',
        error: data.error || '',
      })
    } catch (error) {
      console.error('Lỗi chi tiết:', error)
      setResult({
        output: '',
        error: `Lỗi kết nối đến server: ${error instanceof Error ? error.message : 'Unknown error'}`,
      })
    } finally {
      setIsRunning(false)
    }
  }

  return { isRunning, result, executeCode, clearOutput }
} 