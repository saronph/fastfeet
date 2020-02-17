import Mail from '../../lib/Mail';

class DeliveryMail {
  get key() {
    return 'DeliveryMail';
  }

  async handle({ data }) {
    const { deliveryComplete, delivery } = data;

    Mail.sendMail({
      to: `${deliveryComplete.deliveryman.name} <${deliveryComplete.deliveryman.email}>`,
      subject: 'Product available for withdrawal',
      template: 'delivery',
      context: {
        deliveryman: deliveryComplete.deliveryman.name,
        product: delivery.product,
        name: deliveryComplete.recipient.name,
        street: deliveryComplete.recipient.street,
        number: deliveryComplete.recipient.number,
        complement: deliveryComplete.recipient.complement,
        state: deliveryComplete.recipient.state,
        city: deliveryComplete.recipient.city,
        zip_code: deliveryComplete.recipient.zip_code,
      },
    });
  }
}

export default new DeliveryMail();
