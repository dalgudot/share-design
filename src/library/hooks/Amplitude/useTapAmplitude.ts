export const useTapAmplitude = (eventName: string) => {
  if (typeof window !== undefined) {
    const amplitude = require('amplitude-js');
    amplitude.getInstance().logEvent(eventName);
    // console.log(`Amplitude Event: ${eventName}`);
  }
};
