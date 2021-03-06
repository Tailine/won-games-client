import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularGames: gamesMock,
      mostPopularHighlight: highlightMock,
      upcommingMoreGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighlight: highlightMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  }
}
