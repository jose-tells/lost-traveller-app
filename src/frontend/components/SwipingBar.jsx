import React, { useState } from 'react';
// Use-gesture
import { useScroll } from '@use-gesture/react';

const SwipingBar = () => {

  const [scroll, setScrollPosition] = useState(0);

  function scrollAnimation() {
    // documentElement returns the element that is the root element of the document
    // scrollHeight is a read-only property that returns the measurement of the Height of an element's content.
    const height = document.documentElement.scrollHeight;
    useScroll(({ xy: [, y] }) => {
      setScrollPosition(`${(y / height) * 200}%`);
    },
    { target: window });
    return {
      width: scroll,
    };
  };

  return (
    <div className='swipingBar__container'>
      <div className='swipingBar__item' style={scrollAnimation()} />
    </div>
  );
};

export default SwipingBar;
