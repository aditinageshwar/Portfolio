import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);               //true for darkMode and false for lightMode
  useEffect(() => {                                             //initially bydefault
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {                                    //on toggle
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <button 
        onClick={toggleTheme}  
        className={`w-12 h-6 flex items-center rounded-full p-1 bg-gray-200 dark:bg-gray-400 ${!darkMode ? 'justify-end' : 'justify-start'}`} 
        style={{ boxShadow: !darkMode? 'inset 2px 2px 6px rgba(0, 0, 0, 0.15), inset -2px -2px 6px rgba(0, 0, 0, 0.15)' :
             'inset 2px 2px 6px rgba(255, 255, 255, 0.5), inset -2px -2px 6px rgba(255, 255, 255, 0.5)',
        }}
    >
      <div className="w-6 h-5 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center"> 
        {!darkMode? <FaMoon className="text-gray-500" /> : <FaSun className="text-yellow-500" />}
      </div>
    </button>
  );
};
export default ThemeToggle;