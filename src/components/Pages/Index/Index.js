import React from 'react';

import PageTitle from '../../_shared/PageTitle/PageTitle';

const Index = () => {
  const date = new Date();
  const hour = date.getHours();
  const greetingTime =
    hour < 3 || hour >= 17
      ? 'Evening'
      : hour >= 3 && hour < 12
      ? 'Morning'
      : 'Afternoon';
  const greeting = `Good ${greetingTime}!`;
  return (
    <React.Fragment>
      <PageTitle>{greeting}</PageTitle>
    </React.Fragment>
  );
};

export default Index;
