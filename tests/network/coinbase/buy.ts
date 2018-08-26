export class BuyTxTest {
  tx: object;
  constructor() {
    this.tx =
      {
        "id": "8250fe29-f5ef-5fc5-8302-0fbacf6be51e",
        "type": "buy",
        "status": "pending",
        "amount": {
          "amount": "1.00000000",
          "currency": "BTC"
        },
        "native_amount": {
          "amount": "10.00",
          "currency": "USD"
        },
        "description": null,
        "created_at": "2015-03-26T13:42:00-07:00",
        "updated_at": "2015-03-26T15:55:45-07:00",
        "resource": "transaction",
        "resource_path": "/v2/accounts/2bbf394c-193b-5b2a-9155-3b4732659ede/transactions/8250fe29-f5ef-5fc5-8302-0fbacf6be51e",
        "buy": {
          "id": "5c8216e7-318a-50a5-91aa-2f2cfddfdaab",
          "resource": "buy",
          "resource_path": "/v2/accounts/2bbf394c-193b-5b2a-9155-3b4732659ede/buys/5c8216e7-318a-50a5-91aa-2f2cfddfdaab"
        },
        "instant_exchange": false,
        "details": {
          "title": "Bought bitcoin",
          "subtitle": "using Capital One Bank"
        }
      }
    
    
    }

    
} 
