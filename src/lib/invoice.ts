export interface IInvoice {
  creationDate: Date;
  invoiceNumber: string;
  purchaseOrderId?: string;
  note?: string;
  terms?: string;
  sellerInfo?: {
    email?: string;
    firstName?: string;
    lastName?: string;
    businessName?: string;
    phone?: string;
    address?: {
      "street-address": string;
      "extended-address"?: string;
      "post-office-box"?: string;
      "locality": string;
      "region": string;
      "postal-code": string;
      "country-name": string;
    };
    taxRegistration?: string;
    companyRegistration?: string;
    miscellaneous?: {};
  };
  buyerInfo?: {
    email?: string;
    firstName?: string;
    lastName?: string;
    businessName?: string;
    phone?: string;
    address?: {
      "street-address": string;
      "extended-address"?: string;
      "post-office-box"?: string;
      "locality": string;
      "region": string;
      "postal-code": string;
      "country-name": string;
    };
    taxRegistration?: string;
    companyRegistration?: string;
    miscellaneous?: {};
  };
  invoiceItems: {
    name: string;
    reference?: string;
    quantity: number;
    unitPrice: number;
    discount?: number;
    taxPercent: number;
    currency: string;
    deliveryDate?: Date;
    deliveryPeriod?: string;
  }[];
  paymentTerms?: {
    dueDate?: Date;
    lateFeesPercent?: number;
    lateFeesFix?: number;
    miscellaneous?: {}
  };
  miscellaneous?: {};
}