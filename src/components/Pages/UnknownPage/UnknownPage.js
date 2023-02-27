import React from 'react';

import { Link } from 'react-router-dom';

import PageTitle from '../../_shared/PageTitle/PageTitle';

const UnknownPage = () => (
  <React.Fragment>
    <PageTitle>Uh oh....</PageTitle>
    <p>
      Something went wrong, please return <Link to={'/'}>home</Link>.
    </p>
  </React.Fragment>
);

export default UnknownPage;
