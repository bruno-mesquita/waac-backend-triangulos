import * as Yup from 'yup';
import Triangle from '../models/Triangle';
import sum from '../../functions/sum';

class TriangleController {
  async store(req, res) {
    // Schema de Validação
    const schema = Yup.object().shape({
      content: Yup.array().required(),
    });

    // Validando entradas
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Falha na Validação' });
    }

    // Criando instancia do objeto
    const { content, id } = await Triangle.create(req.body);

    const [result, numSelect] = sum(content);

    return res.json({
      triangle: {
        id,
        content,
        result,
        numSelect,
      },
    });
  }
}

export default new TriangleController();
