import { Op } from 'sequelize';
import {
  parseISO,
  isBefore,
  startOfSecond,
  startOfDay,
  endOfDay,
} from 'date-fns';
import * as Yup from 'yup';
import Delivery from '../models/Delivery';
import File from '../models/File';

class DeliveriesController {
  async index(req, res) {
    const { id } = req.params;

    const deliveries = await Delivery.findAll({
      where: { deliveryman_id: id, canceled_at: null, end_date: null },
    });

    return res.json(deliveries);
  }

  async get(req, res) {
    const { id } = req.params;

    const deliveries = await Delivery.findAll({
      where: {
        deliveryman_id: id,
        end_date: {
          [Op.ne]: null,
        },
      },
    });

    return res.json(deliveries);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      start_date: Yup.date(),
      end_date: Yup.date(),
      signature_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;

    const { delivery_id, start_date, end_date, signature_id } = req.body;

    const deliveryExist = await Delivery.findByPk(delivery_id);

    if (!deliveryExist) return res.status(401).json({ error: 'Id invalid.' });

    // Verificações retirada do produto
    const dateStart = startOfSecond(parseISO(start_date));

    if (isBefore(dateStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    const currentStart = dateStart.getHours();

    if (currentStart < 8 || currentStart >= 18) {
      return res
        .status(400)
        .json({ error: 'Withdrawals only available between 08:00 and 18:00' });
    }

    const checkLimit = await Delivery.findAll({
      where: {
        deliveryman_id: id,
        start_date: {
          [Op.between]: [startOfDay(new Date()), endOfDay(new Date())],
        },
      },
    });

    if (checkLimit.length >= 5) {
      return res
        .status(400)
        .json({ error: 'Limit exceeded, please wait for next day' });
    }

    // Verificação entrega do produto
    const dateEnd = startOfSecond(parseISO(end_date));

    if (isBefore(dateEnd, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    if (isBefore(dateEnd, dateStart)) {
      return res
        .status(400)
        .json({ error: 'Only dates after the start date are accepted' });
    }

    const validDelivery = await Delivery.findByPk(id);

    if (!validDelivery)
      return res.status(401).json({ error: "This delivery doesn't exist!" });

    const delivery = await Delivery.findByPk(id);

    await delivery.update({
      signature_id,
      start_date: dateStart,
      end_date: dateEnd,
    });

    const { signature } = await Delivery.findByPk(id, {
      include: [
        {
          model: File,
          as: 'signature',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({ signature_id, start_date, end_date, signature });
  }
}

export default new DeliveriesController();
