import { Module } from "@nestjs/common";
import { MuleAccountModuleBase } from "./base/muleAccount.module.base";
import { MuleAccountService } from "./muleAccount.service";
import { MuleAccountController } from "./muleAccount.controller";
import { MuleAccountResolver } from "./muleAccount.resolver";

@Module({
  imports: [MuleAccountModuleBase],
  controllers: [MuleAccountController],
  providers: [MuleAccountService, MuleAccountResolver],
  exports: [MuleAccountService],
})
export class MuleAccountModule {}
