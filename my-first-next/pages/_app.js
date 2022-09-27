import '../styles/globals.css'
import Layout from '../components/layout';
import Chatbot from '../components/chatbot'
import { useCallback } from 'react';

export default function App({ Component, pageProps }) {

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
      <div className='container' onClick={scrollToTop}>
        <style jsx>{`
          .container {
            display: flex;
            justify-content: right;
            align-items: right;
          }
        `}</style>
        <div style={{
          position: "fixed",
          top: "600px",
        }}>
          <Chatbot />
        </div>
      </div>
    </Layout>
  );
}