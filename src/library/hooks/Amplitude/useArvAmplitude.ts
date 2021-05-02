import { useEffect } from 'react';

export const useArvAmplitude = (eventName: string) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      const amplitude = require('amplitude-js');
      amplitude.getInstance().logEvent(eventName);
      // console.log(`Amplitude Event: ${eventName}`);
    }
  }, []);
};
