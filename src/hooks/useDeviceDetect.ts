import { useEffect, useState } from 'react';

const useDeviceDetect = () => {
  const [isMobile, setMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
    const ios = Boolean(userAgent.match(/iPhone|iPad|iPod/i));

    setMobile(mobile);

    if (ios) {
      setIsIOS(ios);
    }
  }, []);

  return { isMobile, isIOS };
};

export default useDeviceDetect;
