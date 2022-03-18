const QUERY_PROJECTS = `
  query MyQuery {
    allProjets {
      id
      nom
      youtube
      prestation {
        id
        texte
      }
      photos {
        url
        alt
        id
      }      
      image {
        url
        alt
        id
      }
      description {
        value
      }
    }
  }
`;
const QUERY_COMPETENCES = `
  query MyQuery {
    allCompetences {
      id
      titre
      contenu {
        value
      }
      image {
        url
        alt
        id
      } 
    }
  }
`;

const QUERY_PRESENTATION = `
  query MyQuery {
    presentation {
      titre {
        id
        texte
      }
      personne {
        id
        nom
        image {
          url
          alt
          id
        } 
        competence
      }
    }
  }
`;

const QUERY_GENERAL = `
  query MyQuery {
    general {
      showreel {
        url
        alt
        id
      }
      telephone
      mail
    }
  }
`;

const Query = {
  QUERY_PROJECTS,
  QUERY_COMPETENCES,
  QUERY_PRESENTATION,
  QUERY_GENERAL,
};

export default Query;
