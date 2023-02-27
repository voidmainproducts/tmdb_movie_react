import React from 'react';

const useScreenSize = () => {
  const getScreenSize = () => ({
    isMobile: window.screen?.width < 600,
    width: window.screen?.width,
    height: window.screen?.height,
  });
  const [screenSize, setScreenSize] = React.useState(getScreenSize());
  const handleResize = () => {
    setScreenSize(getScreenSize());
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return screenSize;
};

export default useScreenSize;
