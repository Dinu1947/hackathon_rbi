import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MuleAccountCreateInput = {
  accountId?: string | null;
  flags?: number | null;
  isMule?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
