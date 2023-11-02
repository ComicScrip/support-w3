import Layout from "@/components/Layout";
import { useTasksQuery } from "@/graphql/generated/schema";

export default function Home() {
  const { data } = useTasksQuery();
  console.log({ data });
  return (
    <Layout title="Home">
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
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
}
