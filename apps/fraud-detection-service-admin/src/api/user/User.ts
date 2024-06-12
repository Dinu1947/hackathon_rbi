import { JsonValue } from "type-fest";
import { MuleAccount } from "../muleAccount/MuleAccount";

export type User = {
  biometricData: JsonValue;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  muleAccounts?: Array<MuleAccount>;
  phoneNumber: string | null;
  roles: JsonValue;
  socialMediaProfile: JsonValue;
  updatedAt: Date;
  username: string;
};
