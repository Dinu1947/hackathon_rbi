import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  destinationAccount?: StringNullableFilter;
  id?: StringFilter;
  isFraudulent?: BooleanNullableFilter;
  sourceAccount?: StringNullableFilter;
  status?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  transactionId?: StringNullableFilter;
};
