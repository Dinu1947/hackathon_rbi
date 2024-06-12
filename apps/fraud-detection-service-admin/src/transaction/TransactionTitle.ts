import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "destinationAccount";

export const TransactionTitle = (record: TTransaction): string => {
  return record.destinationAccount?.toString() || String(record.id);
};
