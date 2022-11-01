import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Auth from '.'

describe('<Auth />', () => {
  it('should render logos, title, subtitle and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    expect(screen.getAllByRole('img', { name: 'Won Games' })).toHaveLength(2)
    expect(
      screen.getByRole('heading', { name: 'Auth Title' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'WON is the best and most complete gaming platform.'
      })
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
