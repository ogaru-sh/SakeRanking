import { config } from './config';

const fetchAPI = async (path: string, queryArray: string[]) => {
  const query = queryArray.length !== 0 ? queryArray.join('&') : '';
  return await fetch(`${config.sakeAPI.baseURL}${path}?${query}`).then((resp) =>
    resp.json()
  );
};

export { fetchAPI };
