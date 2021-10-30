import type { TeamsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import TeamCard from 'src/components/TeamCard/TeamCard'
import IntersectionSlide from '../IntersectionSlide/IntersectionSlide'

export const QUERY = gql`
  query TeamsQuery {
    teams {
      id
      handle
      name
      city
      slug
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ teams }: CellSuccessProps<TeamsQuery>) => {
  return (
    <ul className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-16">
      {teams?.map((team) => (
        <li key={team.handle}>
          <IntersectionSlide>
            <Link to={routes.teams({ slug: team.slug })}>
              <TeamCard team={team} />
            </Link>
          </IntersectionSlide>
        </li>
      ))}
    </ul>
  )
}
