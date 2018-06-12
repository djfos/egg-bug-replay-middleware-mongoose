'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  mongoose.set('debug', true);
  const userSchema = new Schema({
    username: { type: String },
  });

  return mongoose.model('User', userSchema);
};
