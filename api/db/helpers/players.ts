import { db } from 'src/lib/db'

import players from 'db/backups/documents/players.json'

export const seedPlayerData = async () => {
  for (const player of players) {
    await db.player.create({
      data: {
        handle: player.handle,
        name: player.name,
        slug: player.slug,
        height: player.height,
        weight: player.weight,
        number: player.number,
        position: player.position,
      },
    })
  }
}
