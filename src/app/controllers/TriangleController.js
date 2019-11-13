import Triangle from '../models/Triangle';

class TriangleController {
  async store(req, res) {
    const triangle = await Triangle.create(req.body);

    return res.json(triangle);
  }
}

export default new TriangleController();
