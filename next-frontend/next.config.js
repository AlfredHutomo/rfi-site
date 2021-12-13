const path = require('path');

module.exports = {
  reactStrictMode: true,
    //basePath: '/rfi/site',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['source.unsplash.com']
      //loader: "imgix",
      //path: "http://",
  },
}
