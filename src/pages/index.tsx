import type { NextPage, GetStaticProps } from 'next'
import axios from "axios"

import Profile from '../components/Profile'
import Projects from '../components/Projects'
import { Github } from '../Interfaces/Data'

export default function Home( {data}: {data: Github} ) {
  return (
    <main id="root">
      <Profile github={ data }/>
      <Projects />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios("https://api.github.com/users/Shinikatame")
  const dataGh: Github = await response.data

  return {
      props: {
          data: dataGh
      },
      revalidate: 60*60*24
  }
}