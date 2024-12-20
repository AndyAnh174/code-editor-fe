import { useState } from 'react'

// Luôn sử dụng Cloudflare URL cho cả dev và prod
const API_URL = 'https://tulsa-rebecca-pat-cfr.trycloudflare.com';

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
      console.log('Sending request to:', `${API_URL}/api/execute`); // Debug log
      
      const response = await fetch(`${API_URL}/api/execute`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          code, 
          language, 
          input 
        })
      })

      console.log('Response status:', response.status); // Debug log
      
      const data = await response.json()
      console.log('Response data:', data); // Debug log

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`)
      }

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