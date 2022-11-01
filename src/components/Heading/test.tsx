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

  it('should render heading with pink bottom line', () => {
    renderWithTheme(<Heading lineBottom>Most Populars</Heading>)

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a small size heading', () => {
    renderWithTheme(<Heading size="small">Most Populars</Heading>)

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyle({ fontSize: '1.6rem' })

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  it('should render a heading with a huge size', () => {
    renderWithTheme(<Heading size="huge">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      fontSize: '5.2rem'
    })
  })

  it('should render heading with line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Most Populars</Heading>)

    expect(screen.getByRole('heading', { name: /most populars/i })).toHaveStyle(
      {
        'border-left': '0.7rem solid #F231A5'
      }
    )
  })

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
