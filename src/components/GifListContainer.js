import React from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    this.fetchGifs()
  }

  fetchGifs = (query = "dogs") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifs: data.data.slice(0,3)
        })
      })
  }

  handleSearchSubmit = (query) => {
    this.fetchGifs(query)
  }

  render() {
    return (
      <div>
        <GifSearch onSearchSubmit={this.handleSearchSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;