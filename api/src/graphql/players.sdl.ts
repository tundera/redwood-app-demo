export const schema = gql`
  type Player {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    handle: String!
    slug: String!
    height: String!
    weight: String!
    number: String
    position: String
    team: Team
    teamId: String
  }

  type Query {
    players: [Player!]! @requireAuth
  }

  input CreatePlayerInput {
    name: String!
    handle: String!
    slug: String!
    height: String!
    weight: String!
    number: String
    position: String
    teamId: String
  }

  input UpdatePlayerInput {
    name: String
    handle: String
    slug: String
    height: String
    weight: String
    number: String
    position: String
    teamId: String
  }
`
