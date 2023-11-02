import { Field, Int, ObjectType, InputType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";

@ObjectType()
@Entity()
export default class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description: string;

  @CreateDateColumn()
  @Field()
  creationDate: Date;

  @Column({ default: false })
  @Field({ nullable: true })
  finished: boolean;
}

@InputType()
export class NewTaskInput {
  @Field()
  name: string;

  @Field({ nullable: true, defaultValue: "aucune description" })
  description?: string;

  @Field({ nullable: true })
  finished?: boolean;
}

@InputType()
export class UpdateTaskInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  finished?: boolean;
}
