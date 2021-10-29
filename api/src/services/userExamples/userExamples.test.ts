import { userExamples } from './userExamples'
import type { StandardScenario } from './userExamples.scenarios'

describe('userExamples', () => {
  scenario('returns all userExamples', async (scenario: StandardScenario) => {
    const result = await userExamples()

    expect(result.length).toEqual(Object.keys(scenario.userExample).length)
  })
})
