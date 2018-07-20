import React, { Component } from 'react';

class Placeholder extends Component {
  state = { isReady: true }

  componentDidCatch(e) {
    this.setState(() => ({ isReady: false }))

    if (e instanceof Promise) {
      e.then(() => this.setState(() => ({ isReady: true })))
    } else {
      throw e;
    }
  }

  render() {
    if (!this.state.isReady) {
      return this.props.placeholder;
    }

    return this.props.children;
  }
}

export default Placeholder;
