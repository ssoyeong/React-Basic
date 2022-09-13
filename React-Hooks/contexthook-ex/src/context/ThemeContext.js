import { createContext } from 'react';

export const ThemeContext = createContext("hello");
// App.js에서 ThemeContext.provider로 감싼 게 없으면 default로 hello 전달