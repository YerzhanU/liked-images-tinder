import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useSwipeable } from 'react-swipeable';

const Card = ({ image, onSwipe }) => {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => onSwipe('left'),
    onSwipedRight: () => onSwipe('right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Allows swiping with mouse
  });

  const springs = useSpring({
    to: { opacity: 1, transform: 'translate3d(0px,0,0)' },
    from: { opacity: 0, transform: 'translate3d(100px,0,0)' },
    reset: true,
  });

  return (
    <animated.div style={springs} className="card" {...swipeHandlers}>
      <img src={image.thumbnail} alt="design" />
    </animated.div>
  );
};

export default Card;
