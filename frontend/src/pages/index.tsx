import Layout from "@/components/Layout";
import {
  useTasksQuery,
  useAddNewTaskMutation,
  useEraseTaskMutation,
} from "@/graphql/generated/schema";
import { FormEvent } from "react";

export default function Home() {
  const { data, refetch } = useTasksQuery();
  const [createTask] = useAddNewTaskMutation();
  const [deleteTask] = useEraseTaskMutation();
  console.log({ data });

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
    }).then(() => refetch());
  }

  function deleteTaskById(taskId: number) {
    deleteTask({ variables: { taskId } }).then(() => refetch());
  }

  return (
    <Layout title="Home">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom de la tache :</label>
        <input type="text" name="name" id="name" />
        <input type="submit" value="Ajouter" />
      </form>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Date de création</th>
            <th>Fini ?</th>
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
}
