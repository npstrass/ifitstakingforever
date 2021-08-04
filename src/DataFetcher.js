import React, { Component } from "react";

class DataFetcher extends Component {
  state = {
    loading: false,
    data: null
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch(this.props.url)
      .then((res) => res.json())
      .then((data) => this.setState({ data, loading: false }))
      .catch((e) => console.error(e));
  }

  render() {
    const { data, loading } = this.state;
    return this.props.children({ data, loading });
  }
}

export default DataFetcher;
