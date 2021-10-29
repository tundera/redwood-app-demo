import task from 'tasuku'

import { seedCoachData } from 'api/db/helpers/coaches'
import { seedPlayerData } from 'api/db/helpers/players'
import { seedTeamData } from 'api/db/helpers/teams'
import { seedColorSchemesData } from 'api/db/helpers/colorSchemes'

// Manually seed via `yarn rw prisma db seed`
// Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
export default async () => {
  try {
    const runSeedTasks = async () => {
      await task('Seed tasks', async ({ task }) => {
        const tasks = await task.group((task) => [
          task('Seeding players', async () => await seedPlayerData()),
          task('Seeding coaches', async () => await seedCoachData()),
          task('Seeding color schemes', async () => await seedColorSchemesData()),
          task('Seeding teams', async () => await seedTeamData()),
        ])

        tasks.clear()
      })
    }

    await runSeedTasks()
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
