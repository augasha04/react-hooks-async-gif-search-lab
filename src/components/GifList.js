import React from 'react';

const GifList = (props) => {
  const gifItems = props.gifs.map(gif => {
    return <li key={gif.id}><img src={gif.images.original.url} alt={gif.title} /></li>
  });

  return (
    <ul>{gifItems}</ul>
  );
}

export default GifList;