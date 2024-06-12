import { MuleAccount as TMuleAccount } from "../api/muleAccount/MuleAccount";

export const MULEACCOUNT_TITLE_FIELD = "accountId";

export const MuleAccountTitle = (record: TMuleAccount): string => {
  return record.accountId?.toString() || String(record.id);
};
