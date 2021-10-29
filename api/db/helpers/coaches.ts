import { db } from 'src/lib/db'

import coaches from 'db/backups/documents/coaches.json'

export const seedCoachData = async () => {
  for (const coach of coaches) {
    await db.coach.create({
      data: {
        handle: coach.handle,
        name: coach.name,
        type: coach.type,
        isAssistant: coach.isAssistant,
      },
    })
  }
}
