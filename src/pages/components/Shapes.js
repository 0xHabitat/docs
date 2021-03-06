import { useState, useEffect } from 'react';

export default function useCurrentWidth() {
  // save current window width in the state object
  const [width, setWidth] = useState(null);

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const getWidth = () => window.innerWidth 
    || document.documentElement.clientWidth 
    || document.body.clientWidth;

    window.addEventListener('DOMContentLoaded', setWidth(getWidth()));

    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
      // setWidth(getWidth())
    }
  }, [])

  let scaleMode;
  if (width > 995.99) {
    scaleMode = "none"
  } else if (width < 996) {
    scaleMode = "xMidYMid slice"
  }
  return scaleMode;
}