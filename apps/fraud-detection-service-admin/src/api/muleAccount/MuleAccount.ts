import { User } from "../user/User";

export type MuleAccount = {
  accountId: string | null;
  createdAt: Date;
  flags: number | null;
  id: string;
  isMule: boolean | null;
  updatedAt: Date;
  user?: User | null;
};
