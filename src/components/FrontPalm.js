import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

const FrontPalm = ({ playFast }) => {
  const { ref, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' },
    ],
    timing: {
      duration: 12000,
      iterations: Infinity,
      playbackRate: 1,
    },
  });

  playFast(getAnimation);

  return (
    <div className='scenery foreground' ref={ref}>
      <img
        src={require('./img/palm3_small.png')}
        alt='palm'
        className='palm'
      />
    </div>
  );
};

export default FrontPalm;
