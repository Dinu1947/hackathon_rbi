import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MuleAccountWhereInput = {
  accountId?: StringNullableFilter;
  flags?: IntNullableFilter;
  id?: StringFilter;
  isMule?: BooleanNullableFilter;
  user?: UserWhereUniqueInput;
};
