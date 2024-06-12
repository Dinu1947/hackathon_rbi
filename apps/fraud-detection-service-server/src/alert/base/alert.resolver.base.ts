/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Alert } from "./Alert";
import { AlertCountArgs } from "./AlertCountArgs";
import { AlertFindManyArgs } from "./AlertFindManyArgs";
import { AlertFindUniqueArgs } from "./AlertFindUniqueArgs";
import { CreateAlertArgs } from "./CreateAlertArgs";
import { UpdateAlertArgs } from "./UpdateAlertArgs";
import { DeleteAlertArgs } from "./DeleteAlertArgs";
import { AlertService } from "../alert.service";
@graphql.Resolver(() => Alert)
export class AlertResolverBase {
  constructor(protected readonly service: AlertService) {}

  async _alertsMeta(
    @graphql.Args() args: AlertCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Alert])
  async alerts(@graphql.Args() args: AlertFindManyArgs): Promise<Alert[]> {
    return this.service.alerts(args);
  }

  @graphql.Query(() => Alert, { nullable: true })
  async alert(
    @graphql.Args() args: AlertFindUniqueArgs
  ): Promise<Alert | null> {
    const result = await this.service.alert(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Alert)
  async createAlert(@graphql.Args() args: CreateAlertArgs): Promise<Alert> {
    return await this.service.createAlert({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Alert)
  async updateAlert(
    @graphql.Args() args: UpdateAlertArgs
  ): Promise<Alert | null> {
    try {
      return await this.service.updateAlert({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Alert)
  async deleteAlert(
    @graphql.Args() args: DeleteAlertArgs
  ): Promise<Alert | null> {
    try {
      return await this.service.deleteAlert(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Query(() => String)
  async SendAlert(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SendAlert(args);
  }
}
