export type Transaction = {
  amount: number | null;
  createdAt: Date;
  destinationAccount: string | null;
  id: string;
  isFraudulent: boolean | null;
  sourceAccount: string | null;
  status: string | null;
  timestamp: Date | null;
  transactionId: string | null;
  updatedAt: Date;
};
