import React, { Component } from 'react';

// the first line equals to: const Component = React.Component;

// functional base component:
/*
const SearchBar = () => {
  return <input />;
};
*/

// class base component:
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'hi' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={(event) =>
            //console.log(event.target.value)
            this.setState({ term: event.target.value })
          }
        />
        Value of the input: {this.state.term}
    </div>
    );
  }

  someOtherFunction(event) {

  }
}

export default SearchBar;

// functional base vs class base:
// recommended to start with functional and if the need arises so refactor to class
