import { config } from './config';

const fetchAPI = async () => {
  //   const apiInfo = config.sakeAPI;
  const apiUrl = `https://sakenowa.com/api/v2/brands/ranking?`;
  return await fetch(apiUrl).then((resp: any) => resp.json());
};

export default { fetchAPI };
