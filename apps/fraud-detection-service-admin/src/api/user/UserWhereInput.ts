import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MuleAccountListRelationFilter } from "../muleAccount/MuleAccountListRelationFilter";

export type UserWhereInput = {
  biometricData?: JsonFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  muleAccounts?: MuleAccountListRelationFilter;
  phoneNumber?: StringNullableFilter;
  socialMediaProfile?: JsonFilter;
  username?: StringFilter;
};
