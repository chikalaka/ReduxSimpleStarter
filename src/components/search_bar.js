import React, { Component } from 'react';

// the first line equals to: const Component = React.Component;

// functional base component:
/*
const SearchBar = () => {
  return <input />;
};
*/

// functional component -> props
// class component -> this.props

// class base component:
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={(event) => {
            this.onInputChange(event.target.value);
          }}
        />
    </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

// functional base vs class base:
// recommended to start with functional and if the need arises (probably need of state) so refactor to class
