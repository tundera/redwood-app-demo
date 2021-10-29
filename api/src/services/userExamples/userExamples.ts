import { db } from 'src/lib/db'

export const userExamples = () => {
  return db.userExample.findMany()
}
