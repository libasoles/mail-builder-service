import { roundFloat } from 'mail-builder-core/helpers/numbers';
import moment from 'moment';

export default class SaleTransformer {
  constructor(config) {
    this.config = config;
  }

  transform = (data) => {
    const {
      company, order, transaction, feedback = {}, paymentMethod, terminal = {}, map, signature = {},
    } = data;
    const { card = {} } = paymentMethod;
    const { bach = {} } = transaction;

    const mappedData = {
      data: {
        id: null,
        date: moment.unix(+transaction.createdAt).toISOString(),
        currency: 'ARS',
        amount: +transaction.amount,
        account: {
          image: company.logo,
          name: company.fantasyName,
          legalName: company.legalName,
          address: null,
          identification: {
            type: 'CUIT',
            number: company.legalNumber,
          },
          phone: null,
        },
        order: {
          items: this.mapItems(order.items),
          type: 'sale',
        },
        extraItems: [
          {
            type: 'discount',
            name: '10% jueves de naranja',
            amount: 20,
          },
          {
            type: 'tax',
            name: 'IVA',
            amount: 37.8,
          },
          {
            type: 'tip',
            amount: 12.20,
          },
        ],
        payment: {
          qps: transaction.qps,
          merchantCode: '560000000014',
          method: paymentMethod.type,
          card: card.holder && {
            cardholder: card.holder,
            brand: card.brand,
            number: card.number,
          },
          authorizationCode: transaction.authorization,
          extraInfo: {
            aid: transaction.aid,
            retrieveReferenceNumber: transaction.retrieveReferenceNumber,
            ticketNumber: transaction.ticketNumber,
            inputMode: card.inputMode,
            batchNumber: bach.number,
          },
          installments: paymentMethod.installments,
          payer: {
            name: '',
            address: '',
            identification: {
              type: 'CUIT',
              number: '201234567891',
            },
          },
          dcc: {
            amount: '38.66000000000000',
            exchangeRate: 0.37,
            exchangeFee: 4,
            currency: 'MXN',
          },
          terminalId: terminal.id,
          signatureUrl: signature.imageLink,
        },
        location: {
          lat: -34.552194,
          lng: -58.451285,
          map: map && map.imageLink,
        },
      },
      meta: {
        feedback: {
          likeLink: feedback.likeLink,
          dislikeLink: feedback.dislikeLink,
        },
      },
    };

    return {
      ...mappedData.data,
      ...mappedData.meta,
    };
  }

  mapItems(items) {
    return items.map(item => ({
      name: item.name,
      unitPrice: +roundFloat(item.price / (item.quantity || 1)),
      quantity: +item.quantity,
      tax: {
        name: 'IVA',
        rate: 0.21,
        amount: 42,
      },
      image: 'https://ci3.googleusercontent.com/proxy/x1BM_B4KnkDiA4zkxIiYvV0yUwxqoh5hqAqODzVsXp5uhC5l937Sml8Fl5BsVFO2jXI2p1FPP8nvUQGDN3JnytJcgo8xj8lhRTZtwtI0Iqem90dqbGsGXwvUq7wb7vFtZAClu2N4aGAe9LsofXA6MbMfYGXAFBUyHJdqCksRA=s0DE1Ft#https://geopagos.s3.amazonaws.com/accounts/0/1/images/thumbnail/product10fd13a9b250f37a75316f8490176512.jpg',
    }));
  }
}
