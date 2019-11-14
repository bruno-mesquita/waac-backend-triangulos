import express from 'express';
import 'dotenv/config';

// Routas
import routes from './routes';

// db
import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  routes() {
    this.server.use(routes);
  }

  middlewares() {
    this.server.use(express.json());
  }
}

export default new App().server;
