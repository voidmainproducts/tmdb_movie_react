import React from 'react';

import NavItem from './NavItem/NavItem';

import './NavMenu.css';

const NavMenu = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Now Playing', path: '/nowPlaying' },
  ];

  return (
    <nav className="NavMenu">
      <ul className="NavList">
        {navItems.map((navItemProps, index) => (
          <NavItem key={index} {...navItemProps} />
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
