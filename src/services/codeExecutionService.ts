import { Language } from '../types'

interface ExecutionResult {
  output: string
  status: string
}

export async function executeCode(code: string, language: Language): Promise<ExecutionResult> {
  // Giả lập delay để tạo cảm giác đang chạy code
  await new Promise(resolve => setTimeout(resolve, 1000))

  try {
    switch (language) {
      case 'javascript':
        // Với JavaScript, chúng ta có thể thực sự chạy code bằng eval (chỉ dùng cho demo)
        try {
          const output = eval(code)
          return {
            output: String(output),
            status: 'success'
          }
        } catch (error) {
          throw new Error(String(error))
        }

      default:
        // Với các ngôn ngữ khác, chỉ trả về code đã format
        return {
          output: `[${language.toUpperCase()}] Code Output:\n${code}`,
          status: 'success'
        }
    }
  } catch (error) {
    throw error
  }
} 