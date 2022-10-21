import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

const BackgroundChessPieces = ({ playFast }) => {
  const { ref, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' },
    ],
    timing: {
      duration: 36000,
      iterations: Infinity,
      playbackRate: 1,
    },
  });

  playFast(getAnimation);

  return (
    <div className='scenery' id='background1' ref={ref}>
      <img
        src={require('./img/r_pawn_upright_small.png')}
        alt='pawn'
        className='r-pawn'
      />
      <img
        src={require('./img/w_rook_small.png')}
        alt='rook'
        className='w-rook'
      />
      <img
        src={require('./img/palm1_small.png')}
        alt='palm'
        className='small-palm'
      />
    </div>
  );
};

export default BackgroundChessPieces;
