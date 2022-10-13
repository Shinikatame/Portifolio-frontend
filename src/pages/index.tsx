import type { GetStaticProps } from "next";
import axios from "axios";

import Profile from "../components/Profile";
import Projects from "../components/Projects";

import { AboutMe } from "../Interfaces/AboutMe";
import { Repos } from "../Interfaces/Repos";

export default function Home({aboutMe, repos}: {aboutMe: AboutMe, repos: Repos}){
  return (
    <main id="root">
      <Profile data={aboutMe} />
      <Projects data={repos} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const urlBase = "https://portifolio-api.onrender.com";

  const aboutMeQuery = await axios(`${urlBase}/aboutme`);
  const aboutMe: AboutMe = await aboutMeQuery.data;

  const reposQuery = await axios(`${urlBase}/projects`);
  const repos: Repos = await reposQuery.data;

  return {
    props: {
      aboutMe: aboutMe,
      repos: repos,
    },
    revalidate: 60 * 60 * 24,
  };
};
