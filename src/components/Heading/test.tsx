import { screen } from '@testing-library/react'

import Heading from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Most Populars</Heading>)

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyle({ color: '#FAFAFA' })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Most Populars</Heading>)

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyle({ color: '#030517' })
  })

  it('should render heading with bottom line', () => {
    renderWithTheme(<Heading lineBottom>Most Populars</Heading>)

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render heading with line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Most Populars</Heading>)

    expect(screen.getByRole('heading', { name: /most populars/i })).toHaveStyle(
      {
        'border-left': '0.7rem solid #3CD3C1'
      }
    )
  })

  // testar linha de baixo - OK
  // testar cor da font - OK
  // testar linha lateral - OK
})
