import * as Yup from 'yup';
import Triangle from '../models/Triangle';
import sum from '../../functions/sum';

class TriangleController {
  async store(req, res) {
    const { content } = req.body;
    // Schema de Validação
    const schema = Yup.object().shape({
      content: Yup.array().required(),
    });

    // Validando entradas
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Falha na Validação' });
    }

    // Somando o triangulo
    const [result, selected] = sum(content);

    // Criando instancia do objeto
    const { id } = await Triangle.create({ content, selected, sum: result });

    return res.json({
      triangle: {
        id,
        content,
        result,
        selected,
      },
    });
  }
}

export default new TriangleController();
