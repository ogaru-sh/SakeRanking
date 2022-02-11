import { config } from './config';

const fetchAPI = async (jsonName: string) => {
  const apiInfo = config.sakeAPI;
  const apiUrl = `${apiInfo.baseURL}/`;
  return await fetch(apiUrl).then((resp: any) => resp.json());
};

export default { fetchAPI };
