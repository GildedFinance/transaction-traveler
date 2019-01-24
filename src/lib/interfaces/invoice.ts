export type IInvoice = {
  ref?: string;
  invoice_number: number;
  user_id: string;
  client_id: string; // assigned from firebase
  title: string;
  items: IInvoiceItem[];
  terms: string;
  total_amount: number;
  discount: number;
  currency: string;
  fiat_currency: string;
  receive_currency: string;
  notes: string;
  status: string;

  // date
  created_at: any;
  updated_at: any;
  deleted_at?: any;
  date_due?: any; // timestamp
  date_send?: any; // timestamp
  date_paid?: any; // timestamp

  // transactions info
  transaction_id?: any;
  transaction_network?: string;
  transaction_network_id?: number;
  transaction_data?: any;

  invoice_method: string; // address | requestnetwork
  payment_type?: string; // request | send

  exchange_currency?: string;
  exchange_value?: number;
  exchange_rate?: number;
  exchange_date?: any;

  requestId?: string;
  creator?: string;
  payer?: string;
}

export interface IInvoiceItem {
  id?: number;
  description: string;
  quantity: number;
  amount: number;
  unit_price: number;
  currency: string;
}