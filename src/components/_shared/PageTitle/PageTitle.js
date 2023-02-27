import React from 'react';
import PropTypes from 'prop-types';
import './PageTitle.css';

import './PageTitle.css';

const PageTitle = ({ children }) => (
  <h2 id="pageTitle" className="PageTitle">
    {children}
  </h2>
);

PageTitle.propTypes = {
  children: PropTypes.node,
};

export default PageTitle;
