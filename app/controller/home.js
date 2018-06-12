'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const res = await this.ctx.modle.User.find({}).exe();
    console.log(res);

    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
