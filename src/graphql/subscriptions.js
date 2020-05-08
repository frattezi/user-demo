/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $id: ID
    $user: String
    $email: String
    $password: String
  ) {
    onCreateUser(id: $id, user: $user, email: $email, password: $password) {
      id
      user
      email
      password
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $id: ID
    $user: String
    $email: String
    $password: String
  ) {
    onUpdateUser(id: $id, user: $user, email: $email, password: $password) {
      id
      user
      email
      password
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $id: ID
    $user: String
    $email: String
    $password: String
  ) {
    onDeleteUser(id: $id, user: $user, email: $email, password: $password) {
      id
      user
      email
      password
    }
  }
`;
