/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addUser = /* GraphQL */ `
  mutation AddUser($user: SaveUserInput!) {
    addUser(user: $user) {
      id
      name
      password
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id) {
      id
      name
      password
    }
  }
`;
