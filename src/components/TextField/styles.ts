import styled, { css } from 'styled-components'
import { DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

export const InputWrapper = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    align-items: center;
    flex-direction: ${iconPosition === 'right' ? 'row-reverse' : 'row'};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    svg {
      width: 2.2rem;
      fill: ${theme.colors.gray};
    }
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
  color: ${theme.colors.black};
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.medium};
  padding: ${theme.spacings.xxsmall} 0;
  padding-${iconPosition}: ${theme.spacings.xxsmall};
  background: transparent;
  border: 0;
  outline: none;
  width: 100%;

    &::placeholder {
      color: ${theme.colors.gray};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
  `}
`

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border: 1px solid ${theme.colors.error};
    }
    ${Label} {
      color: ${theme.colors.error};
    }
    svg {
      fill: ${theme.colors.error};
    }
  `
}

type WrapperProps = {
  error: boolean
} & Pick<TextFieldProps, 'disabled'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
    ${error && wrapperModifiers.error(theme)}
  `};
`

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.xsmall};
  `};
`
