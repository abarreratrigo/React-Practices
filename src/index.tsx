import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    {/* <React.StrictMode> */}
    <Toaster position="bottom-right" richColors closeButton />
    <App />
    {/* </React.StrictMode> */}
  </Router>
);
