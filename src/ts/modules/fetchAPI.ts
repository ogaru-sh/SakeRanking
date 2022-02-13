import { config } from './config';
import { SakeRanking, FetchAPI } from './interfaces';

const fetchAPI: FetchAPI = async (path: string, query: string) => {
  return await fetch(`${config.sakeAPI.baseURL}${path}?${query}`).then((resp) =>
    resp.json()
  );
};

export { fetchAPI };
