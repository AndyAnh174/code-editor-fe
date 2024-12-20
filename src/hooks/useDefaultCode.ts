export const useDefaultCode = () => {
  const getDefaultCode = (language: string): string => {
    switch (language.toLowerCase()) {
      case 'javascript':
        return `// JavaScript code here
const name = input("What's your name?");  // Đọc input từ người dùng
console.log("Hello " + name + "!");       // In ra màn hình`;

      case 'python':
        return `# Python code here
name = input("What's your name?")  # Đọc input từ người dùng
print("Hello " + name + "!")       # In ra màn hình`;

      case 'java':
        return `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("What's your name? ");
        String name = scanner.nextLine();
        System.out.println("Hello " + name + "!");
        
        scanner.close();
    }
}`;

      case 'cpp':
        return `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    cout << "What's your name? ";
    getline(cin, name);
    cout << "Hello " << name << "!" << endl;
    return 0;
}`;

      default:
        return '// Select a language to start coding';
    }
  };

  return { getDefaultCode };
}; 