import { useState } from 'react';
import './App.css';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext, userContext } from './context/UserContext';

function Apps() {

  const [isDark, setIsDark] = useState(false);

  return (

    <UserContext.Provider value={"사용자"}>
      <ThemeContext.Provider value={{isDark, setIsDark}}>   {/* ThemeContext가 감싸는 하위 컴포넌트는 value에 접근할 수 있음 */}
        <Page />;
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default Apps;