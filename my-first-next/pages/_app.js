import '../styles/globals.css'
import Header from '../components/header'
import Chatbot from '../components/chatbot'
import { useEffect, useState, useCallback } from 'react';

export default function App({ Component, pageProps }) {

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <div onClick={scrollToTop}>
          <Chatbot />
       </div>
    </div>
  );
}