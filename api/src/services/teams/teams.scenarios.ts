import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TeamCreateArgs>({
  team: {
    one: {
      data: {
        updatedAt: '2021-10-29T02:16:07Z',
        name: 'String4116225',
        handle: 'String921554',
        slug: 'String6493110',
        city: 'String',
        abbreviation: 'String9060398',
        conference: 'String',
        division: 'String',
        established: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2021-10-29T02:16:07Z',
        name: 'String2313882',
        handle: 'String9517704',
        slug: 'String1273697',
        city: 'String',
        abbreviation: 'String2130423',
        conference: 'String',
        division: 'String',
        established: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
