import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate error
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to an external service
    console.error('Error caught in boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return <div>Something went wrong while loading the component.</div>;
    }

    // Render children when there's no error
    return this.props.children;
  }
}

export default ErrorBoundary;
