import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

describe('<Button />', () => {
  it('should render medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      fontSize: '1.4rem',
      padding: '0.8rem 3.2rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render small size button', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
      fontSize: '1.2rem',
      padding: '0.8rem'
    })
  })

  it('should render large size button', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem',
      fontSize: '1.8rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render button with icon', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
