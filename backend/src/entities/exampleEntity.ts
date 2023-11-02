import { Field, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export default class ExampleEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;
}
