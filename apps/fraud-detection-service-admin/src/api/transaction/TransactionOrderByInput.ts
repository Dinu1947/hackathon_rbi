import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  destinationAccount?: SortOrder;
  id?: SortOrder;
  isFraudulent?: SortOrder;
  sourceAccount?: SortOrder;
  status?: SortOrder;
  timestamp?: SortOrder;
  transactionId?: SortOrder;
  updatedAt?: SortOrder;
};
