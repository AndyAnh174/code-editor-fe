import { Language } from '../types'

export const DEFAULT_CODE: Record<Language, string> = {
  cpp: '#include <iostream>\n\nint main() {\n    std::cout << "Hello World!";\n    return 0;\n}',
  python: 'print("Hello World!")',
  java: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello World!");\n    }\n}',
  javascript: 'console.log("Hello World!");',
  csharp: 'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello World!");\n    }\n}'
} 