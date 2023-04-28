import { useQuery } from "urql";
import ReactFullpage from "@fullpage/react-fullpage";

import getTodos from "../graphql/queries/getTodos.gql";
import { useState } from "react";

export default function Home() {
  const [{ data, fetching, error }] = useQuery({
    query: getTodos,
  });

  if (fetching) return <p>Fetching ...</p>;

  if (error) return <p>Error...</p>;

  return (
    <div>
      hey there
      {data?.getTodos.map((todo, i) => (
        <p key={i}>{todo.name}</p>
      ))}
    </div>
  );
}
