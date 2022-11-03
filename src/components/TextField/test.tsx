import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MailOutline } from '@styled-icons/material-outlined/MailOutline'

import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('renders with Label', () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('renders without Label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('is accessible by tab', async () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()

    await waitFor(() => {
      expect(input).toHaveFocus()
    })
  })

  it('should render with icon on the left', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        icon={<MailOutline data-testid="icon" />}
      />
    )

    const icon = screen.getByTestId('icon')
    expect(icon).toBeInTheDocument()
    expect(icon.parentElement).toHaveStyle({ 'flex-direction': 'row' })
  })

  it('should render with icon on the right', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        iconPosition="right"
        icon={<MailOutline data-testid="icon" />}
      />
    )

    const icon = screen.getByTestId('icon')
    expect(icon).toBeInTheDocument()
    expect(icon.parentElement).toHaveStyle({ 'flex-direction': 'row-reverse' })
  })

  it('should render a disabled input with correct styles and not change value', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    )

    const input = screen.getByLabelText('TextField')
    expect(input).toBeDisabled()
    expect(input).toHaveStyle({ cursor: 'not-allowed' })

    const text = 'Test'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue()
    })
    expect(onInput).not.toHaveBeenCalled()

    expect(screen.getByText('TextField')).toHaveStyle({
      color: '#8F8F8F',
      cursor: 'not-allowed'
    })
  })

  it('shoul not be accessible with tab when disabled', async () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    )

    expect(document.body).toHaveFocus()
    userEvent.tab()

    await waitFor(() => {
      expect(screen.getByLabelText('TextField')).not.toHaveFocus()
    })
  })

  it('renders with error', () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<MailOutline data-testid="icon" />}
        label="TextField"
        labelFor="TextField"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
