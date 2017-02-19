import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCnyw2WXgkrWB3KD7qbCiztX2UAiW3eN6o';

// 1. Create a new component - this component produce html

// 2. Take this component's generated HTML and add it to the DOM

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
//
    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos });

      // it will be equal to write:
      // this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));;
