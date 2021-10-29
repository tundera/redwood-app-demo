export const schema = gql`
  type UserExample {
    id: Int!
    email: String!
    name: String
  }

  type Query {
    userExamples: [UserExample!]! @requireAuth
  }

  input CreateUserExampleInput {
    email: String!
    name: String
  }

  input UpdateUserExampleInput {
    email: String
    name: String
  }
`
