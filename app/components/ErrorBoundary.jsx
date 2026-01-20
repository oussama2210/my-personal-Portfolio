'use client';
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('3D Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-black-100 to-black-200">
          <div className="text-center space-y-6 max-w-lg">
            <div className="text-8xl mb-4">🎨</div>
            <h3 className="text-3xl font-bold text-white">3D Experience Unavailable</h3>
            <p className="text-white-50 text-lg leading-relaxed">
              We couldn't load the 3D experience on your device. This might be due to graphics driver limitations.
            </p>
            <div className="pt-4 space-y-2 text-sm text-white-50">
              <p>💡 Suggestions:</p>
              <ul className="list-disc list-inside space-y-1 text-left max-w-md mx-auto">
                <li>Update your graphics drivers</li>
                <li>Try a different browser</li>
                <li>Enable hardware acceleration</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
