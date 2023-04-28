import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    getTodos: [Todo]
  }

  type Mutation {
    addTodo(name: String): Todo
  }

  type Todo {
    id: ID
    name: String
    complete: Boolean
  }
`;
export default typeDefs;
