import { InputJsonValue } from "../../types";
import { MuleAccountCreateNestedManyWithoutUsersInput } from "./MuleAccountCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  biometricData?: InputJsonValue;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  muleAccounts?: MuleAccountCreateNestedManyWithoutUsersInput;
  password: string;
  phoneNumber?: string | null;
  roles: InputJsonValue;
  socialMediaProfile?: InputJsonValue;
  username: string;
};
