import type { GetStaticProps } from "next";
import Head from "next/head";
import Nav from "../components/layout/Nav";
import Equipe from "../components/Equipe";
import Skills from "../components/Skills";
import Real from "../components/Real";
import Contact from "../components/Contact";
import Query from "../lib/datocms/queries";
import { GraphQlResponse } from "../lib/datocms/types";
import { request } from "../lib/datocms/datocms";

const Home: (props: {
  projects: GraphQlResponse.Project[];
  competences: GraphQlResponse.Competence[];
  presentation: GraphQlResponse.Presentation;
  general: GraphQlResponse.General;
}) => JSX.Element = (props: {
  projects: GraphQlResponse.Project[];
  competences: GraphQlResponse.Competence[];
  presentation: GraphQlResponse.Presentation;
  general: GraphQlResponse.General;
}) => {
  return (
    <>
      <Head>
        <title>DOYA Studio</title>
      </Head>
      <>
        <header>
          <Nav />
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            className="video"
            autoPlay
            muted
            loop
            playsInline
            style={{ objectFit: "cover", objectPosition: "center" }}
          >
            <source src={props.general.showreel.url} />
          </video>
        </header>

        <main className="container" style={{ textAlign: "justify" }}>
          <Equipe team={props.presentation} />
          <Skills skills={props.competences} />
          <Real reals={props.projects} />
          <Contact mail={props.general.mail} phone={props.general.telephone} />
        </main>
      </>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { allProjets } = (await request(
    Query.QUERY_PROJECTS
  )) as GraphQlResponse.Projects;
  const { allCompetences } = (await request(
    Query.QUERY_COMPETENCES
  )) as GraphQlResponse.Competences;
  const { presentation } = (await request(
    Query.QUERY_PRESENTATION
  )) as GraphQlResponse.Presentations;
  const { general } = (await request(
    Query.QUERY_GENERAL
  )) as GraphQlResponse.Generals;

  return {
    props: {
      projects: allProjets,
      competences: allCompetences,
      presentation: presentation,
      general: general,
    },
  };
};
