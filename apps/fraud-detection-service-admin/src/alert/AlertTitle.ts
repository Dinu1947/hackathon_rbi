import { Alert as TAlert } from "../api/alert/Alert";

export const ALERT_TITLE_FIELD = "alertId";

export const AlertTitle = (record: TAlert): string => {
  return record.alertId?.toString() || String(record.id);
};
