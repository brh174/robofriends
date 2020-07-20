import React from 'react';

class ErrorBoundry extends Component {
  constructor() {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oooooops. That is not good</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundry;
