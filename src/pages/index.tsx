import type { NextPage } from 'next'
import Profile from '../components/Profile'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  return (
    <main id="root">
      <Profile />
      <Projects />
    </main>
  )
}

export default Home
