import { useTheme } from '../contexts/ThemeContext';

interface OutputPanelProps {
  output: string;
  error: string;
  theme: string;
  input: string;
  onInputChange: (input: string) => void;
  onOutputClear: () => void;
  isRunning: boolean;
}

export const OutputPanel = ({ 
  output, 
  error, 
  theme, 
  input, 
  onInputChange, 
  onOutputClear,
  isRunning 
}: OutputPanelProps) => {
  return (
    <div className="h-full flex flex-col">
      {/* Input Panel */}
      <div className="h-1/2 p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="mb-2 flex justify-between items-center">
          <h2 className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Input
          </h2>
          <button
            onClick={() => onInputChange('')}
            className={`px-2 py-1 text-sm rounded-md ${
              theme === 'dark'
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            Clear Input
          </button>
        </div>
        <textarea
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="Nhập input cho chương trình..."
          disabled={isRunning}
          className={`w-full h-[calc(100%-2rem)] p-2 font-mono text-sm resize-none ${
            theme === 'dark'
              ? 'bg-gray-800 text-white border-gray-700'
              : 'bg-white text-gray-900 border-gray-300'
          } border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
      </div>

      {/* Output Panel */}
      <div className="h-1/2 p-4">
        <div className="mb-2 flex justify-between items-center">
          <h2 className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Output
          </h2>
          <button
            onClick={onOutputClear}
            className={`px-2 py-1 text-sm rounded-md ${
              theme === 'dark'
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            Clear Output
          </button>
        </div>
        <div
          className={`w-full h-[calc(100%-2rem)] p-2 font-mono text-sm overflow-auto whitespace-pre-wrap rounded-md ${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'
          }`}
        >
          {error ? (
            <span className="text-red-500">{error}</span>
          ) : output ? (
            output
          ) : (
            <span className="text-gray-500">
              {isRunning ? 'Đang chạy chương trình...' : 'Chưa có kết quả...'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}; 