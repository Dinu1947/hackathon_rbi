export type TransactionUpdateInput = {
  amount?: number | null;
  destinationAccount?: string | null;
  isFraudulent?: boolean | null;
  sourceAccount?: string | null;
  status?: string | null;
  timestamp?: Date | null;
  transactionId?: string | null;
};
