import { Router } from 'express';

import TriangleController from './app/controllers/TriangleController';

const routes = new Router();

routes.post('/triangles', TriangleController.store);

export default routes;
