import { useEffect } from 'react';
import qs from 'qs';
import { URL as U } from '../const';
import { useHistory, useLocation } from 'react-router';
import Loader from './Loader';

const Authentication = (): JSX.Element => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const getToken = async () => {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        const response = await fetch(`${U.GITHUB_POST}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            code: code,
          }),
        });
        const data = await response.json();
        console.log(data);
        localStorage.setItem('token', data.token);
      } catch (error) {}
    };

    getToken();
  }, [location, history]);

  return <Loader />;
};

export default Authentication;
