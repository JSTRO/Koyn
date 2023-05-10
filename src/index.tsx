import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import 'chart.js/auto';
import './styles.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}

// ReactDOM.render(
//   <React.StrictMode>
//     <AppRoutes />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
