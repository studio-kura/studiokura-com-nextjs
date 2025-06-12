import { Provider } from '@/components/ui/provider';
import { AppProps } from 'next/app';

export const App = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <Component {...pageProps} />
  </Provider>
);

export default App;
