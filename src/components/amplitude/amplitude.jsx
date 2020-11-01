import PropTypes from "prop-types";
import { useEffect } from "react";

export const amplitudeModule = (eventName) => {
  amplitudeModule.propTypes = {
    eventName: PropTypes.string.isRequired,
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      const amplitude = require("amplitude-js");
      amplitude.getInstance().logEvent(eventName);
      console.log(`Amplitude Event: ${eventName}`);
    }
  }, []);
};
