import Mail from '../../lib/Mail';

class CancelMail {
  get key() {
    return 'CancelMail';
  }

  async handle({ data }) {
    const { cancelComplete, setCancelDelivery, cancelFormatted } = data;

    Mail.sendMail({
      to: `${cancelComplete.deliveryman.name} <${cancelComplete.deliveryman.email}>`,
      subject: 'Delivery canceled',
      template: 'cancel',
      context: {
        deliveryman: cancelComplete.deliveryman.name,
        canceled_at: cancelFormatted,
        product: setCancelDelivery.product,
        name: cancelComplete.recipient.name,
        street: cancelComplete.recipient.street,
        number: cancelComplete.recipient.number,
        complement: cancelComplete.recipient.complement,
        state: cancelComplete.recipient.state,
        city: cancelComplete.recipient.city,
        zip_code: cancelComplete.recipient.zip_code,
      },
    });
  }
}

export default new CancelMail();
