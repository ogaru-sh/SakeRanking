import { Config, Constant } from './interfaces';

export const config: Config = {
  sakeAPI: {
    baseURL: 'http://localhost:3000',
    basePath: {
      ranking: '/api/ranking'
    }
  }
};

export const constant: Constant = {
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  },
  responsiveTag: {
    cols: [1, 2],
    listWidth: [400, 900]
  },
  drawerWidth: 240
};
