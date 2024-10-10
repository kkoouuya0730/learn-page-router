export type StoreInfo = {
  id: string;
  storeName: string;
  description: string;
  address: string;
  phoneNumber: string;
  businessHours: {
    open: string;
    close: string;
  };
};
