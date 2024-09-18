import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">DEV@Deakin</div>
      <input type="text" placeholder="Search..." className="search-input" />
      <div className="header-actions">
        <button className="btn">Post</button>
        <button className="btn">Login</button>
      </div>
    </header>
  );
};

export default Header;