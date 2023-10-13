import { createRoot } from 'react-dom/client';
import App from 'src/App';

// STYLES
import 'src/main.scss';

const container = document.getElementById('root');

if (!container) throw new Error('Root not found');

const root = createRoot(container);
root.render(<App />);
