import React from 'react';

class GifSearch extends React.Component {
  state = {
    query: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.query);
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.query} onChange={this.handleChange} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default GifSearch;