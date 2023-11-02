import Layout from "@/components/Layout";
import { useExampleQuery } from "@/graphql/generated/schema";

export default function Home() {
  const { data } = useExampleQuery();
  return <Layout title="Home">{data?.exampleQuery}</Layout>;
}
