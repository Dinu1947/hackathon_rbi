/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MuleAccountWhereInput } from "./MuleAccountWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MuleAccountOrderByInput } from "./MuleAccountOrderByInput";

@ArgsType()
class MuleAccountFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MuleAccountWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MuleAccountWhereInput, { nullable: true })
  @Type(() => MuleAccountWhereInput)
  where?: MuleAccountWhereInput;

  @ApiProperty({
    required: false,
    type: [MuleAccountOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MuleAccountOrderByInput], { nullable: true })
  @Type(() => MuleAccountOrderByInput)
  orderBy?: Array<MuleAccountOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MuleAccountFindManyArgs as MuleAccountFindManyArgs };