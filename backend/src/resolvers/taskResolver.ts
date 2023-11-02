import { Resolver, Query } from "type-graphql";
import Task from "../entities/Task";

@Resolver(Task)
class TaskResolver {
  @Query(() => [Task])
  async tasks() {
    return await Task.find();
  }
}

export default TaskResolver;
