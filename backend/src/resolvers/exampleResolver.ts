import { Resolver, Query } from "type-graphql";
import ExampleEntity from "../entities/exampleEntity";

@Resolver(ExampleEntity)
class ExampleResolver {
  @Query(() => String)
  async exampleQuery() {
    return "hello";
  }
}

export default ExampleResolver;
