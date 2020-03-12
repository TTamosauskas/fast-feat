import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.integer().required(),
      complemento: Yup.text(),
      estado: Yup.string().required(),
      cidade: Yup.string().required(),
      cep: Yup.integer().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const {
      id,
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
      provider,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
      provider,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.integer().required(),
      complemento: Yup.text(),
      estado: Yup.string().required(),
      cidade: Yup.string().required(),
      cep: Yup.integer().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.body;

    const recipiente = await Recipient.findByPk(id);

    const {
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
      provider,
    } = await recipiente.update(req.body);

    return res.json({
      id,
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
      provider,
    });
  }
}

export default new RecipientController();
