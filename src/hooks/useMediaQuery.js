import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function useMediaQueryResize(query, basicQuery = 'max-width') {
  const queryResponsive = `(${basicQuery}:${query})`;
  const matches = useMediaQuery({ query: queryResponsive });
  // useEffect(() => {
  //   const mediaQueryList = window.matchMedia(queryResponsive);

  //   const handleResize = () => {
  //     setMatches(mediaQueryList.matches);
  //   };

  //   handleResize(); // Initial check

  //   const resizeListener = () => {
  //     handleResize();
  //   };

  //   window.addEventListener('resize', resizeListener);

  //   return () => {
  //     window.removeEventListener('resize', resizeListener);
  //   };
  // }, [query, queryResponsive]);

  return matches;
}

const phone = '37.5em';
const tabPort = '56.25em';
const tabLand = '75em';
const particularSmallLaptop = '98.5em';
const laptop = '112.5em';
const bigDesktop = '120em';

export { phone, tabPort, tabLand, particularSmallLaptop, laptop, bigDesktop };

export default useMediaQueryResize;
