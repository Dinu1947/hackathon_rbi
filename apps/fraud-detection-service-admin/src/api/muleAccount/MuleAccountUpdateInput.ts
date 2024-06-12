import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MuleAccountUpdateInput = {
  accountId?: string | null;
  flags?: number | null;
  isMule?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
