import { Config, Constant } from './interfaces';

const isProduction = process.env.NODE_ENV === 'production';
export const config: Config = {
  sakeAPI: {
    baseURL: isProduction
      ? 'https://sakeranking.web.app/'
      : 'http://localhost:3000',
    basePath: {
      ranking: '/api/ranking'
    }
  },
  pagePath: {
    root: '/',
    favorite: '/favorite'
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
