import { screen, within } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument()
    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByRole('link', { name: /forgot your password/i }))
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />)

    const signUpText = screen.getByText(/don't have an account?/i)
    expect(signUpText).toBeInTheDocument()
    expect(within(signUpText).getByRole('link', { name: /sign up/i }))
  })
})