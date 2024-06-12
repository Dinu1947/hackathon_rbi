import { MuleAccountWhereInput } from "./MuleAccountWhereInput";
import { MuleAccountOrderByInput } from "./MuleAccountOrderByInput";

export type MuleAccountFindManyArgs = {
  where?: MuleAccountWhereInput;
  orderBy?: Array<MuleAccountOrderByInput>;
  skip?: number;
  take?: number;
};
