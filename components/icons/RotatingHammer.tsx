/* eslint-disable @next/next/no-img-element */
import useEl from '@/utils/hooks/useEl';
import React, { useReducer, useState, useEffect, useCallback, FC } from 'react';
import { noop } from 'yuxi-utils';

function reducer(state = false, action) {
  switch (action.type) {
    case 'toggle':
      return !state;
    default:
      throw new Error(`Unhandled actionType: ${action.type}`);
  }
}

const RotatingHammer: FC<{ className: string; interval?: number }> = ({
  className,
}) => {
  const [hammer, ref] = useEl();
  const [swungout, dispatch] = useReducer(reducer, false);

  useEffect(() => {
    if (!hammer) {
      return noop;
    }
    const id = setInterval(() => {
      dispatch({ type: 'toggle' });
    }, 1800);
    return () => {
      clearInterval(id);
    };
  }, [hammer]);

  return (
    <img
      className={`inline transform origin-bottom-left transition ease-in-out hover:rotate-0 ${
        swungout
          ? `-rotate-45 -translate-y-2 duration-[1600ms]`
          : 'rotate-45 -translate-y-1 translate-x-1  duration-200'
      } ${className}`}
      ref={ref}
      src="/static/img/icons/hammer.svg"
      alt="hammer-icon"
    />
  );
};

export default RotatingHammer;
