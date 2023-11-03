import Layout from "@/components/Layout";
import {
  TasksDocument,
  useTasksQuery,
  useAddNewTaskMutation,
  useEraseTaskMutation,
  Task,
} from "@/graphql/generated/schema";
import { FormEvent, useState } from "react";
import UpdateTask from "@/components/UpdateTask";
import { gql, useApolloClient } from "@apollo/client";

export default function Home() {
  const { data, refetch } = useTasksQuery();
  const [createTask] = useAddNewTaskMutation();
  const [deleteTask] = useEraseTaskMutation();
  const [openTask, setOpenTask] = useState<Task | null>(null);
  const client = useApolloClient();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());
    createTask({
      variables: {
        data: {
          ...formJSON,
        },
      },
    }).then((res) => {
      const lastTask = res.data?.createTask;

      client.writeQuery({
        query: TasksDocument,
        data: {
          tasks: [...(data?.tasks || []), lastTask],
        },
      });
    });
  }
  console.log(data?.tasks);
  function deleteTaskById(taskId: number) {
    deleteTask({ variables: { taskId } }).then(() => refetch());
  }

  function handleModalTask(task: Task) {
    setOpenTask(task);
    (document.getElementById("my_modal_1") as any)?.showModal();
  }

  return (
    <Layout title="Home">
      <h1>TODO List GrapQL / Next</h1>
      <UpdateTask task={openTask} setOpenTask={setOpenTask} refetch={refetch} />
      <form onSubmit={handleSubmit} className="add-task-container">
        <label htmlFor="name">Nouvelle tâche :</label>
        <input type="text" name="name" id="name" placeholder="name" />
        <input
          type="text"
          name="description"
          id="description"
          placeholder="description"
        />
        <input type="submit" value="Ajouter" className="add-task-btn" />
      </form>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Date de création</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.tasks.map((task) => {
              return (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.name}</td>
                  <td>{task.description}</td>
                  <td>{task.creationDate}</td>
                  <td>{task.finished ? "fini" : "pas fini"}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => {
                        deleteTaskById(task.id);
                      }}
                    >
                      Supprimer
                    </button>
                    <button
                      className="modify-btn"
                      onClick={() => handleModalTask(task)}
                    >
                      Modifier
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
