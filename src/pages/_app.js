import GlobalStyles from '../styles/GlobalStyles';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from '../ui/ScrollToTop';
import AppLayout from '../ui/AppLayout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster
        position='top-center'
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-white)',
            color: 'var(--color-primary)',
          },
        }}
      />

      <GlobalStyles />
      <ScrollToTop />

      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default MyApp;
