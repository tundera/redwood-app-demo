import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String4019969', hashedPassword: 'String', salt: 'String' } },
    two: { data: { email: 'String2247299', hashedPassword: 'String', salt: 'String' } },
  },
})

export type StandardScenario = typeof standard
