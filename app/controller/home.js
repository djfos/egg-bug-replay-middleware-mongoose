'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async test() {
    const res = await this.ctx.model.User.find({}).exec();
    console.log(res);

    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
