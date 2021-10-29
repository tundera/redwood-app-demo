import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const players = () => {
  return db.player.findMany()
}

export const player = ({ id }: Prisma.PlayerWhereUniqueInput) => {
  return db.player.findUnique({
    where: { id },
  })
}

export const Player = {
  team: (_obj, { root }: ResolverArgs<ReturnType<typeof player>>) =>
    db.player.findUnique({ where: { id: root.id } }).team(),
}
