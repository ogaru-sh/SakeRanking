import { Config } from './interfaces';

export const config: Config = {
  sakeAPI: {
    baseURL: ' https://muro.sakenowa.com/sakenowa-data/api/',
    params: {
      areas: 'areas',
      brands: 'brands',
      breweries: 'breweries',
      rankings: 'rankings',
      flavorCharts: 'flavor-charts'
    }
  }
};
