import { parseISO, isBefore, startOfSecond } from 'date-fns';
import * as Yup from 'yup';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';

import Mail from '../../lib/Mail';

class DeliveryController {
  async store(req, res) {
    const schema = Yup.object().shape({
      product: Yup.string().required(),
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { product, recipient_id, deliveryman_id } = req.body;

    const validRecipient = await Recipient.findByPk(recipient_id);

    if (!validRecipient)
      return res.status(401).json({ error: "This recipient doesn't exist!" });

    const validDeliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!validDeliveryman)
      return res.status(401).json({ error: "Deliveryman doesn't exist!" });

    const delivery = await Delivery.create({
      product,
      recipient_id,
      deliveryman_id,
    });

    await Mail.sendMail({});

    return res.json({ delivery });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      product: Yup.string(),
      recipient_id: Yup.number(),
      deliveryman_id: Yup.number(),
      canceled_at: Yup.date(),
      start_date: Yup.date(),
      end_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;

    const {
      product,
      recipient_id,
      deliveryman_id,
      signature_id,
      canceled_at,
      start_date,
      end_date,
    } = req.body;

    const validRecipient = await Recipient.findByPk(recipient_id);

    // Verificações recipients e deliveryman
    if (!validRecipient)
      return res.status(401).json({ error: "This recipient doesn't exist!" });

    const validDeliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!validDeliveryman)
      return res.status(401).json({ error: "Deliveryman doesn't exist!" });

    // Horários disponíveis para retirada
    // const range = setInterval[(8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18)];

    // Verificação retirada do produto
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

    // Verificação cancelamento da entrega
    const dateCanceled = startOfSecond(parseISO(canceled_at));

    if (isBefore(dateCanceled, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    if (isBefore(dateCanceled, dateStart)) {
      return res
        .status(400)
        .json({ error: 'Only dates after the start date are accepted' });
    }

    const delivery = await Delivery.findByPk(id);

    const setDelivery = await delivery.update({
      id,
      product,
      recipient_id,
      deliveryman_id,
      signature_id,
      canceled_at: dateCanceled,
      start_date: dateStart,
      end_date: dateEnd,
    });

    return res.json(setDelivery);
  }

  async index(req, res) {
    const deliveries = await Delivery.findAll({
      attributes: [
        'id',
        'product',
        'recipient_id',
        'deliveryman_id',
        'signature_id',
      ],
    });

    return res.json(deliveries);
  }

  async delete(req, res) {
    const deliveries = await Delivery.findByPk(req.params.id);
    const { id } = req.params;

    if (!deliveries) {
      return res.status(400).json({ error: 'Delivery does not exists' });
    }

    await deliveries.destroy({
      where: {
        id,
      },
    });

    return res.json(deliveries);
  }
}

export default new DeliveryController();
