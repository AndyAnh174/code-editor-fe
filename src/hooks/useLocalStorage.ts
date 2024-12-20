import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Lấy giá trị từ localStorage khi component mount
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Lỗi khi đọc từ localStorage:', error);
      return initialValue;
    }
  });

  // Lưu vào localStorage khi giá trị thay đổi
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Lỗi khi lưu vào localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
} 