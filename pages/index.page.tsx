import type { NextPage } from 'next'
import Head from 'next/head'
import { MainContainer } from '../src/components/container/mainContainer'
import { Footer } from '../src/components/footer/Footer'
import HeroSection from '../src/components/heroHeader/Hero'
import NavBar from '../src/components/navbar/Navbar'
import { Seo } from '../src/components/seo/seo'
import Ads from './home/Ads'
import Articles from './home/Articles'
import { HeighLightNews } from './home/HeighlightNews'
import MostView from './home/MostView'

const Home: NextPage = () => {
  return (
    <div dir="ltr">
        {/* seo */}
        <Seo
          keywords="article , news "
          description="modawina-blog, article had many success pages"
          ogTitle=""
          ogType=""
          title="Modawina | مدونة"
          ogUrl=""
          ogImage="articles"
        />
      <NavBar />
      <HeroSection
        heading="Central blog"
        content="there is a huge amount of rendering to applay here "
      />
      <MainContainer>
        <HeighLightNews />
        <Articles />
        <Ads />
        <MostView />
      </MainContainer>

      <Footer />
    </div>
  );
}

export default Home
