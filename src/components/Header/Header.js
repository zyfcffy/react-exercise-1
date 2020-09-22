import React, { Component } from 'react';
import avatarImage from '../../assets/avatar.jpg';
import './Header.scss';
class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={avatarImage} alt="avatar" />
        <h1>HELLO,</h1>
        <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
      </header>
    );
  }
}

export default Header;
