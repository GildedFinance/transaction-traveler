import { Network, TransactionTraveler } from '../';

test('Convert Invoice to Request Network Format', () => {
    const tt = new TransactionTraveler();
    tt.getTraveler(Network.RequestNetwork);

    const fakeInvoice = {
        client_id: '57vbiFS7xb1pv9EeI4nR',
        created_at: {
          seconds: 1544636434,
          nanoseconds: 230000000
        },
        date_due: '2018-12-12',
        date_send: {
          seconds: 1544636434,
          nanoseconds: 230000000
        },
        discount: 10,
        fiat_currency: 'EUR',
        invoice_method: 'address',
        invoice_number: 531,
        items: [
          {
            amount: 0.1,
            description: 'CryptoCoin',
            quantity: 2,
            unit_price: 0.05
          }
        ],
        notes: 'test',
        payment_type: 'send',
        receive_currency: 'ETH',
        ref: 'lacEHAFDbUXiTvlAIeJM',
        status: 'unpaid',
        title: 'Address',
        total_amount: 0.09,
        updated_at: {
          seconds: 1544636434,
          nanoseconds: 230000000
        },
        user_id: 'h6pU6SwyloTOfPffOWsng4BINoj2',
        user: {
          _isScalar: false,
          source: {
            _isScalar: false
          },
          operator: {}
        },
        user_client: {
          _isScalar: false,
          source: {
            _isScalar: false
          },
          operator: {}
        },
        transaction_data: {
          _isScalar: false,
          source: {
            _isScalar: false
          },
          operator: {}
        },
        miscellaneous: {
          builderId: 'Gilded'
        }
    };

    const result = tt.convertInvoice(fakeInvoice, Network.Base, Network.RequestNetwork);

    const expectedResult = {
      meta: { format: 'rnf_invoice', version: '0.0.2' },
      invoiceNumber: '531',
      creationDate: new Date(fakeInvoice.created_at.seconds * 1000).toISOString(),
      invoiceItems:
      [
        {
          amount: '0.09',
          name: 'CryptoCoin',
          quantity: 2,
          discount: '10000000000000002',
          unitPrice: '50000000000000000',
          taxPercent: 0,
          currency: 'ETH'
        }
      ],
      purchaseOrderId: 'lacEHAFDbUXiTvlAIeJM',
      note: 'test',
      miscellaneous: {
        builderId: 'Gilded'
      }
    };

    // match request network format data
    expect(result).toMatchObject(expectedResult);
});

/**
 * Convert Request Network Invoice to Gilded
 */
test('Import from Request Network', () => {
  const tt = new TransactionTraveler();
  tt.getTraveler(Network.RequestNetwork);

  const requestInvoice = {
    meta: {
      format: 'rnf_invoice',
        version: '0.0.2'
      },
      creationDate: '12/05/2025',
      invoiceTitle: 'Quam vel neque tempo',
      invoiceItems: [
        {
          name: 'Velit consequuntur o',
          quantity: '1',
          unitPrice: '10000000000000000',
          discount: '500000000000000',
          taxPercent: '0',
          amount: '0.0095',
          currency: 'ETH'
        }
      ],
      currency: 'ETH',
      paymentTerms: {
        dueDate: '05/06/2016'
      },
      miscellaneous: {
        builderId: 'Gilded-Dev'
      }
  };
  const result = tt.convertInvoice(requestInvoice, Network.RequestNetwork, Network.Base);
  const expectedResult = { invoice_number: NaN,
    user_id: '',
    client_id: '',
    items:
     [ { description: 'Velit consequuntur o',
         quantity: 1,
         unit_price: 0.01,
         currency: 'ETH',
         amount: 0.0095,
         discount: 0.0005,
         taxPercent: 0 } ],
    terms: '',
    total_amount: 0.0095,
    discount: 0.0005,
    currency: 'ETH',
    fiat_currency: 'ETH',
    notes: '',
    created_at: '12/05/2025',
    updated_at: '12/05/2025',
    date_due: '05/06/2016',
    invoice_method: 'requestnetwork',
    requestId: '',
    creator: {},
    payer: {} };

  // match request network format data
  expect(result).toMatchObject(expectedResult);
});
