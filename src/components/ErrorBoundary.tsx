import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary]', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.href = '/';
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-[#050505] text-slate-200">
        <div className="glass rounded-3xl p-10 max-w-lg text-center border border-red-400/20">
          <div className="font-display font-black text-6xl text-gradient mb-4">Oops.</div>
          <h1 className="text-2xl mb-3">Something broke on the client.</h1>
          <p className="text-slate-400 mb-6 text-sm">
            {this.state.error?.message ?? 'An unexpected error occurred while rendering this page.'}
          </p>
          <button onClick={this.handleReset} className="btn-primary">
            Reload portfolio
          </button>
        </div>
      </div>
    );
  }
}
