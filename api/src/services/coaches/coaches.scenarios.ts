import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CoachCreateArgs>({
  coach: {
    one: {
      data: {
        updatedAt: '2021-10-29T02:16:48Z',
        name: 'String',
        handle: 'String1220574',
        type: 'String',
        isAssistant: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2021-10-29T02:16:48Z',
        name: 'String',
        handle: 'String9231072',
        type: 'String',
        isAssistant: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
