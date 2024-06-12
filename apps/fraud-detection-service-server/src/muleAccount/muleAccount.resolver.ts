import * as graphql from "@nestjs/graphql";
import { MuleAccountResolverBase } from "./base/muleAccount.resolver.base";
import { MuleAccount } from "./base/MuleAccount";
import { MuleAccountService } from "./muleAccount.service";

@graphql.Resolver(() => MuleAccount)
export class MuleAccountResolver extends MuleAccountResolverBase {
  constructor(protected readonly service: MuleAccountService) {
    super(service);
  }
}
