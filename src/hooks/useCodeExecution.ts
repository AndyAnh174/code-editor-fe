import { useState } from 'react'
import { Language } from '../types'
import { executeCode as executeCodeService } from '../services/codeExecutionService'

interface ExecutionResult {
  output: string
  error?: string
}

export function useCodeExecution() {
  const [isRunning, setIsRunning] = useState(false)
  const [result, setResult] = useState<ExecutionResult>({ output: '' })

  const executeCode = async (code: string, language: Language) => {
    setIsRunning(true)
    setResult({ output: 'Đang chạy code...' })

    try {
      const response = await executeCodeService(code, language)
      setResult({
        output: response.output
      })
    } catch (error) {
      setResult({
        output: '',
        error: error instanceof Error ? error.message : 'Có lỗi xảy ra'
      })
    } finally {
      setIsRunning(false)
    }
  }

  return {
    isRunning,
    result,
    executeCode
  }
} 