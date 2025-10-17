import React from 'react';
import BackgroundBeamsWrapper from './BackgroundBeamsWrapper';

const withBackgroundBeams = (WrappedComponent) => {
  return (props) => {
    return (
      <BackgroundBeamsWrapper>
        <WrappedComponent {...props} />
      </BackgroundBeamsWrapper>
    );
  };
};

export default withBackgroundBeams;