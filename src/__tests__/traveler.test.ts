import { TransactionTraveler } from '../index';
import { Network } from '../lib/shared';

test('My Transaction Traveler', () => {
    const tt = new TransactionTraveler();
    tt.getTraveler(Network.RequestNetwork);

    const result = tt.convertInvoice({name: 'test'}, Network.Base, Network.RequestNetwork);
    console.log(result);

    expect(result).toBe('Hello Carl');
});