import { config } from './config';

const fetchAPI = async (path: string, query: string) => {
  return await fetch(`${config.sakeAPI.baseURL}${path}?${query}`).then((resp) =>
    resp.json()
  );
};

export { fetchAPI };
