import { db } from 'api/src/lib/db'

import colorSchemes from 'api/db/helpers/team-colors.json'

export const seedColorSchemesData = async () => {
  await db.colorScheme.createMany({
    data: colorSchemes.map((colorScheme) => ({
      primary: colorScheme.primary,
      secondary: colorScheme.secondary,
    })),
    skipDuplicates: true,
  })
}
