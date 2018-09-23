import gql from "graphql-tag";

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_TODO_MUTATION = gql`
  mutation AddTodoMutation($title: String!) {
    createTodo(title: $title) {
      id
      title
      completed
    }
  }
`;

export const ALL_TODOS_QUERY = gql`
  query allTodosQuery {
    allTodos {
      id
      completed
      title
    }
  }
`;
