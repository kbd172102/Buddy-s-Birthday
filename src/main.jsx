import React, { StrictMode, Component } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F8F6F0',
            padding: '1.5rem',
            textAlign: 'center',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <div
            style={{
              background: '#FFFEFA',
              padding: '2.5rem 2rem',
              borderRadius: '20px',
              border: '1px solid rgba(81, 72, 63, 0.2)',
              boxShadow: '0 8px 24px rgba(81, 72, 63, 0.1)',
              maxWidth: '460px',
            }}
          >
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#51483F', marginBottom: '0.8rem' }}>
              One Second, Kumbhkaran! 🤍
            </h2>
            <p style={{ color: '#7E7367', marginBottom: '1.5rem', fontSize: '1rem', lineHeight: 1.6 }}>
              A little hiccup occurred loading the surprise. Let's refresh the page!
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: '#51483F',
                color: '#FFFEFA',
                padding: '0.85rem 2rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.95rem',
              }}
            >
              Refresh Page ↺
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
