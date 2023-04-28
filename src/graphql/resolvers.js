import Todo from "@/graphql/models/Todo.js";

const resolvers = {
  Query: {
    getTodos: async () => {
      let todos = await Todo.find();
      return todos;
    },
  },
  Mutation: {
    addTodo: async (_, { name }) => {
      let newTodo = new Todo({
        name,
        complete: false,
      });

      let todo = newTodo.save();
      return todo;
    },
  },
};

export default resolvers;
