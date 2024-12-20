export const useDefaultCode = () => {
  const getDefaultCode = (language: string): string => {
    switch (language.toLowerCase()) {
      case 'javascript':
        return `// Chương trình JavaScript Hello World
console.log("Hello World!");

// Ví dụ với input
const name = input("Nhập tên của bạn: ");
console.log("Xin chào", name);`;

      case 'python':
        return `# Chương trình Python Hello World
print("Hello World!")

# Ví dụ với input
name = input("Nhập tên của bạn: ")
print("Xin chào", name)`;

      case 'java':
        return `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Chương trình Java Hello World
        System.out.println("Hello World!");
        
        // Ví dụ với input
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhập tên của bạn: ");
        String name = sc.nextLine();
        System.out.println("Xin chào " + name);
    }
}`;

      case 'cpp':
        return `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Chương trình C++ Hello World
    cout << "Hello World!" << endl;
    
    // Ví dụ với input
    string name;
    cout << "Nhập tên của bạn: ";
    getline(cin, name);
    cout << "Xin chào " << name << endl;
    
    return 0;
}`;

      default:
        return '// Chọn ngôn ngữ để xem code mẫu';
    }
  };

  return { getDefaultCode };
}; 