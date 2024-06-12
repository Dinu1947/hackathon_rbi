import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MuleAccountServiceBase } from "./base/muleAccount.service.base";

@Injectable()
export class MuleAccountService extends MuleAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
