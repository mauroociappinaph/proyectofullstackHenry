import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';


class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
        <SearchBar onSearch={this.props.onSearch} />

        
      </nav>
    );
  }
}

export default Nav;
