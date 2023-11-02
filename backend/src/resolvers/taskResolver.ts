import { Resolver, Query, Mutation, Arg } from "type-graphql";
import Task, { NewTaskInput, UpdateTaskInput } from "../entities/Task";
import { GraphQLError } from "graphql";

@Resolver(Task)
class TaskResolver {
  @Query(() => [Task])
  async tasks() {
    return await Task.find();
  }

  @Mutation(() => Task)
  async createTask(@Arg("data") data: NewTaskInput) {
    return await Task.create({
      ...data,
    }).save();
  }

  @Mutation(() => Boolean)
  async deleteTask(@Arg("taskId") id: number) {
    const task = await Task.findOneById(id);
    if (task === null) {
      throw new GraphQLError("not found");
    }
    await task.remove();
    return true;
  }

  @Query(() => Task)
  async getTask(@Arg("taskId") id: number) {
    const task = await Task.findOneById(id);
    if (task === null) {
      throw new GraphQLError("not found");
    }
    return task;
  }

  @Mutation(() => Task)
  async modifyTask(
    @Arg("taskId") id: number,
    @Arg("data") data: UpdateTaskInput
  ) {
    const task = await Task.findOneById(id);
    if (task === null) {
      throw new GraphQLError("not found");
    }
    console.log({ task, data });

    Task.merge(task, { ...data });
    console.log(task);
    return await task.save();
  }
}

export default TaskResolver;
