'use client';
import React, { Component } from 'react';

class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.warn('Canvas rendering error:', error);
    console.warn('Error info:', errorInfo);
    
    // Check if it's a WebGL error
    const errorMessage = error?.message || '';
    const isWebGLError = 
      errorMessage.includes('WebGL') || 
      errorMessage.includes('webgl') ||
      errorMessage.includes('context');
    
    this.setState({
      error,
      errorInfo,
      isWebGLError
    });
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback from props or default
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="w-full h-full flex items-center justify-center p-8">
          <div className="text-center space-y-4">
            <div className="text-6xl">🎨</div>
            <h3 className="text-xl font-bold text-white">
              {this.state.isWebGLError ? '3D Graphics Unavailable' : 'Rendering Error'}
            </h3>
            <p className="text-white-50 text-sm max-w-md">
              {this.state.isWebGLError 
                ? 'WebGL is not supported on your device. Try updating your graphics drivers or using a different browser.'
                : 'Unable to render 3D content.'}
            </p>
            {this.props.showDetails && (
              <details className="text-xs text-white-50 text-left max-w-md mx-auto mt-4">
                <summary className="cursor-pointer">Error Details</summary>
                <pre className="mt-2 p-2 bg-black-200 rounded overflow-auto">
                  {this.state.error?.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default CanvasErrorBoundary;
