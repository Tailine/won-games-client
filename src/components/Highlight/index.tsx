import Button from 'components/Button'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  floatImage?: string
  alignment?: 'right' | 'left'
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = 'right'
}: HighlightProps) => (
  <S.Wrapper alignment={alignment} backgroundImage={backgroundImage}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
