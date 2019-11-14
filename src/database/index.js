import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnetion = mongoose.connect(process.env.URL_MONGO, {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
