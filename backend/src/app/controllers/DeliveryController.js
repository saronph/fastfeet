import { parseISO, isBefore, startOfHour } from 'date-fns';
import * as Yup from 'yup';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';

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

    if (!validRecipient)
      return res.status(401).json({ error: "This recipient doesn't exist!" });

    const validDeliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!validDeliveryman)
      return res.status(401).json({ error: "Deliveryman doesn't exist!" });

    const dateStart = startOfHour(parseISO(start_date));

    if (isBefore(dateStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    const dateEnd = startOfHour(parseISO(end_date));

    if (isBefore(dateEnd, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    const dateCanceled = startOfHour(parseISO(canceled_at));

    if (isBefore(dateCanceled, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
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
