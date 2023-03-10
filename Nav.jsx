import React from 'react';
import SearchBar from './SearchBar';   



// Tengo que hacer un constructor y agregarle el SearchBar

class Nav extends React.Component {



render() {
    return (
        
      <div>
        <SearchBar onSearch={this.props.onSearch} />
      </div>
    );
  }
}

export default Nav;