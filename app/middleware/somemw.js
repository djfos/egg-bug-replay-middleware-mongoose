'use strict';

module.exports = () => {
  return async function(ctx, next) {
    // 什么都不做
    next();
  };
};
