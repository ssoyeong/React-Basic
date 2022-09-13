import { useState } from 'react';
import './App.css';
import Page from './components/Page';

function Apps() {

  const [isDark, setIsDark] = useState(false);

  return <Page isDark={isDark} setIsDark={setIsDark} />;
}

export default Apps;