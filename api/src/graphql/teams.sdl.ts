export const schema = gql`
  type Team {
    createdAt: DateTime!
    updatedAt: DateTime!
    id: String!
    name: String!
    handle: String!
    slug: String!
    city: String!
    abbreviation: String!
    conference: String!
    division: String!
    established: String!
    wins: Int
    losses: Int
    winPercentage: Float
    players: [Player]!
    coaches: [Coach]!
    colorScheme: ColorScheme
  }

  type Query {
    teams: [Team!]! @requireAuth
  }

  input CreateTeamInput {
    name: String!
    handle: String!
    slug: String!
    city: String!
    abbreviation: String!
    conference: String!
    division: String!
    established: String!
    wins: Int
    losses: Int
    winPercentage: Float
  }

  input UpdateTeamInput {
    name: String
    handle: String
    slug: String
    city: String
    abbreviation: String
    conference: String
    division: String
    established: String
    wins: Int
    losses: Int
    winPercentage: Float
  }
`
