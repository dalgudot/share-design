import { useRipple } from 'react-use-ripple';

export const useMyRipple = (
  ref: any,
  animationLength?: number,
  rippleSize?: number
) => {
  return useRipple(ref, {
    rippleColor: 'rgba(0, 0, 0, 0.3)',
    animationLength: animationLength ?? 500,
    rippleSize: rippleSize ?? 2000,
  });
};
