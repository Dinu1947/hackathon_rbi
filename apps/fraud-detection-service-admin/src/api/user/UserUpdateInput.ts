import { InputJsonValue } from "../../types";
import { MuleAccountUpdateManyWithoutUsersInput } from "./MuleAccountUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  biometricData?: InputJsonValue;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  muleAccounts?: MuleAccountUpdateManyWithoutUsersInput;
  password?: string;
  phoneNumber?: string | null;
  roles?: InputJsonValue;
  socialMediaProfile?: InputJsonValue;
  username?: string;
};
