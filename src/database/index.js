import mongoose from 'mongoose';
import configDB from '../config/database';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnetion = mongoose.connect(configDB.URL_MONGO, {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
