import * as Yup from 'yup';
import Courier from '../models/Courier';

class CourierController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const courierExists = await Courier.findOne({
      where: { email: req.body.email },
    });

    if (courierExists) {
      return res.status(400).json({ error: 'Courier already exists.' });
    }

    const { id, name, email } = await Courier.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      avatar_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;
    const { email } = req.body;

    const courier = await Courier.findByPk(id);

    if (email !== courier.email) {
      const courierExists = await Courier.findOne({ where: { email } });

      if (courierExists) {
        return res.status(400).json({ error: 'Courier already exists.' });
      }
    }

    const { name, avatar } = await courier.update(req.body);

    return res.json({
      name,
      email,
      avatar,
    });
  }

  async index(req, res) {
    const couriers = await Courier.findAll({
      attributes: ['id', 'name', 'email'],
    });

    return res.json(couriers);
  }

  async delete(req, res) {
    const couriers = await Courier.findByPk(req.params.id);

    const { id } = req.params;

    if (!couriers) {
      return res.status(400).json({ error: 'Courier does not exists' });
    }

    await couriers.destroy({
      where: {
        id,
      },
    });

    return res.json(couriers);
  }
}

export default new CourierController();
