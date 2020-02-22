import * as Yup from 'yup';
import { parseISO, isBefore, startOfSecond, format } from 'date-fns';
import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';

import CancelMail from '../jobs/CancelMail';
import Queue from '../../lib/Queue';

class DeliveryProblemController {
  async index(req, res) {
    const listProblems = await DeliveryProblem.findAll({
      attributes: ['delivery_id', 'description', 'created_at'],
    });

    return res.json(listProblems);
  }

  async get(req, res) {
    const { id } = req.params;

    const validDelivery = await Delivery.findByPk(id);

    if (!validDelivery)
      return res.status(401).json({ error: "This delivery doesn't exist!" });

    const deliveryProblem = await DeliveryProblem.findOne({
      where: {
        delivery_id: id,
      },
    });

    if (!deliveryProblem)
      return res
        .status(401)
        .json({ error: "This delivery doesn't have any problem!" });

    const delivery = await DeliveryProblem.findAll({
      where: {
        delivery_id: id,
      },
    });

    return res.json(delivery);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;
    const { description } = req.body;

    const validDelivery = await Delivery.findByPk(id);

    if (!validDelivery)
      return res.status(401).json({ error: "This delivery doesn't exist!" });

    const problem = await DeliveryProblem.create({
      delivery_id: id,
      description,
    });

    return res.json({ problem });
  }

  async update(req, res) {
    const { id } = req.params;
    const { delivery_id, canceled_at } = req.body;

    const problemExist = await DeliveryProblem.findByPk(id);

    if (!problemExist)
      return res.status(401).json({ error: "This Id doesn't exist!" });

    const dateCanceled = startOfSecond(parseISO(canceled_at));

    if (isBefore(dateCanceled, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    const checkId = await DeliveryProblem.findOne({ where: { delivery_id } });

    if (!checkId)
      return res
        .status(401)
        .json({ error: 'There is no problem with this delivery!' });

    const cancelDelivery = await Delivery.findByPk(delivery_id);

    const setCancelDelivery = await cancelDelivery.update({
      canceled_at,
    });

    const cancelFormatted = format(
      parseISO(canceled_at),
      "MMMM dd'th', yyyy'.'"
    );

    const cancelComplete = await Delivery.findByPk(setCancelDelivery.id, {
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
        {
          model: Recipient,
          as: 'recipient',
        },
      ],
    });

    await Queue.add(CancelMail.key, {
      cancelComplete,
      setCancelDelivery,
      cancelFormatted,
    });

    return res.json({
      setCancelDelivery,
    });
  }
}

export default new DeliveryProblemController();
