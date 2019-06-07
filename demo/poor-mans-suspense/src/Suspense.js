import { Component } from 'react';

class Suspense extends Component {
  state = { isReady: true }

  componentDidCatch(e) {
    if (!(e instanceof Promise)) {
      throw e;
    }

    this.setState(() => ({ isReady: false }))

    e.then(() => this.setState(() => ({ isReady: true })))
  }

  render() {
    if (!this.state.isReady) {
      return this.props.placeholder;
    }

    return this.props.children;
  }
}

export default Suspense;
