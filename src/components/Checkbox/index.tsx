import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'black' | 'white'
  isChecked?: boolean
  value?: string | ReadonlyArray<string> | number
  onCheck?(status: boolean): void
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  label,
  labelFor,
  labelColor = 'white',
  isChecked = false,
  onCheck,
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    onCheck?.(status)
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        value={value}
        onChange={onChange}
        checked={checked}
        {...props}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
