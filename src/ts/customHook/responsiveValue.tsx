import { useEffect, useState } from 'react';
import { constant } from '@/ts/modules/config';

export const useResponsiveValue = (setFunc) => {
  const { breakpoints } = constant;
  const getValue = (width: number) => {
    if (width < breakpoints.sm) {
      return 1;
    } else {
      return 2;
    }
  };

  useState(getValue(window.innerWidth));

  const updateDimensions = () => {
    setFunc(getValue(window.innerWidth));
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
};
