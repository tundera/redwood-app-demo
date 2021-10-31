export const schema = gql`
  type UserRole {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    user: User
    userId: Int
  }

  type Query {
    userRoles: [UserRole!]! @requireAuth
  }

  input CreateUserRoleInput {
    name: String!
    userId: Int
  }

  input UpdateUserRoleInput {
    name: String
    userId: Int
  }
`
