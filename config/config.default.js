'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528812979976_8705';

  // add your config here
  config.middleware = [ 'somemw' ];

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/test',
      options: {},
    },
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  return config;
};
