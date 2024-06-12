import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MuleAccountService } from "./muleAccount.service";
import { MuleAccountControllerBase } from "./base/muleAccount.controller.base";

@swagger.ApiTags("muleAccounts")
@common.Controller("muleAccounts")
export class MuleAccountController extends MuleAccountControllerBase {
  constructor(protected readonly service: MuleAccountService) {
    super(service);
  }
}
