import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  biometricData?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  phoneNumber?: SortOrder;
  roles?: SortOrder;
  socialMediaProfile?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
