import { render } from '@redwoodjs/testing/web'

import FullPageSpinner from './FullPageSpinner'

describe('FullPageSpinner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FullPageSpinner />)
    }).not.toThrow()
  })
})
