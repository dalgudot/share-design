import { useState, useEffect } from 'react';

// JS -> Swfit
// https://developer111.tistory.com/37
export const useIsiOS = () => {
  const [is_iOS, setIs_iOS] = useState<boolean>();
  const [is_iPadOS, setIs_iPadOS] = useState<boolean>();
  const initNative = () => {
    const browserInfo = navigator.userAgent;

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
    // String.prototype.indexOf() *** This is different from'Array.prototype.indexOf()'
    // The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at from Index. Returns '-1' if the value is not found.
    if (browserInfo.indexOf('iOS_APP_SHARE_DESIGN') > -1) {
      // alert(browserInfo);
      setIs_iOS(true);
    } else if (browserInfo.indexOf('iPadOS_APP_SHARE_DESIGN') > -1) {
      // alert(browserInfo);
      setIs_iPadOS(true);
    } else {
      // alert('This is not APP');
      setIs_iOS(false);
      setIs_iPadOS(false);
    }
  };

  useEffect(() => {
    initNative();
  }, []);

  return { is_iOS, is_iPadOS };
};
