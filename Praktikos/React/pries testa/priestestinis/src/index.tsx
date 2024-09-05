import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserContext, { UserContextProvider } from './context/UserContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);
root.render(
  <BrowserRouter>
<UserContextProvider>
  <App />
</UserContextProvider>
  </BrowserRouter>

);
