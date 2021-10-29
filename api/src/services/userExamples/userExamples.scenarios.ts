import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserExampleCreateArgs>({
  userExample: {
    one: { data: { email: 'String1221553' } },
    two: { data: { email: 'String1700057' } },
  },
})

export type StandardScenario = typeof standard
