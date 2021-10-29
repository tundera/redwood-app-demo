import { db } from 'api/src/lib/db'

import coaches from 'api/db/backups/documents/coaches.json'

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
