import React from 'react';
import { Link } from 'react-router-dom';

import './NavItem.css';

const NavItem = ({ label, path }) => (
  <li className="NavItem">
    <Link to={path}>{label}</Link>
  </li>
);

export default NavItem;
