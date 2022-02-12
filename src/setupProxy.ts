const proxy = require('http-proxy-middleware');

module.exports = function (app: any) {
  const headers = {
    'Content-Type': 'application/json'
  };
  app.use(
    proxy('api/v2/brands/ranking', {
      target: 'https://sakenowa.com/',
      changeOrigin: true,
      secure: false,
      headers: headers
    })
  );
};
