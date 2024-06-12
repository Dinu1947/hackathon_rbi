import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AlertWhereInput = {
  alertId?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  typeField?: StringNullableFilter;
};
