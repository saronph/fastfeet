import * as Yup from 'yup';
import { Op } from 'sequelize';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip_code: Yup.number()
        .required()
        .test(
          'len',
          'Must be exactly 8 numbers',
          val => val.toString().length === 8
        ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipientExists = await Recipient.findOne({
      where: { name: req.body.name },
    });

    if (recipientExists) {
      return res.status(400).json({ error: 'Recipient already exists.' });
    }

    const {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zip_code,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zip_code,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.number(),
      complement: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      zip_code: Yup.number().test(
        'len',
        'Must be exactly 8 numbers',
        val => val.toString().length === 8
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;
    const { name } = req.body;

    const recipient = await Recipient.findByPk(id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exist' });
    }

    if (name !== recipient.name) {
      const nameExists = await Recipient.findOne({ where: { name } });

      if (nameExists) {
        return res.status(400).json({ error: 'This name is already in use' });
      }
    }

    const {
      street,
      number,
      complement,
      state,
      city,
      zip_code,
    } = await recipient.update(req.body);

    return res.json({
      name,
      street,
      number,
      complement,
      state,
      city,
      zip_code,
    });
  }

  async index(req, res) {
    const name = req.query.name || '';
    const { page = 1 } = req.query;

    const recipients = await Recipient.findAll({
      order: ['name'],
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      limit: 5,
      offset: (page - 1) * 5,
    });

    return res.json(recipients);
  }

  async delete(req, res) {
    const recipient = await Recipient.findByPk(req.params.id);

    const { id } = req.params;

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    await recipient.destroy({
      where: {
        id,
      },
    });

    return res.json(recipient);
  }

  async get(req, res) {
    const { id } = req.params;

    const validRecipient = await Recipient.findByPk(id);

    if (!validRecipient)
      return res.status(401).json({ error: "This Recipient doesn't exist!" });

    const recipient = await Recipient.findOne({
      where: {
        id,
      },
    });

    return res.json([recipient]);
  }

  async list(req, res) {
    const name = req.query.name || '';
    const { page = 1 } = req.query;

    const recipients = await Recipient.findAll({
      order: ['name'],
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      offset: (page - 1) * 5,
    });

    return res.json(recipients);
  }
}

export default new RecipientController();
