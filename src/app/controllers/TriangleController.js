import Triangle from '../models/Triangle';

class TriangleController {
  async store(req, res) {
    const { content, id } = await Triangle.create(req.body);

    return res.json({
      triangle: {
        id,
        content,
      },
    });
  }
}

export default new TriangleController();
