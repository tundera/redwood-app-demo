import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PlayerCreateArgs>({
  player: {
    one: {
      data: {
        updatedAt: '2021-10-29T02:16:14Z',
        name: 'String',
        handle: 'String93426',
        slug: 'String7644592',
        height: 'String',
        weight: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2021-10-29T02:16:14Z',
        name: 'String',
        handle: 'String489337',
        slug: 'String7450970',
        height: 'String',
        weight: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
