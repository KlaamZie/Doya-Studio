import {StructuredText} from "datocms-structured-text-utils";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace GraphQlResponse {
  export interface Projects {
    allProjets: Project[];
  }

  export interface Competences {
    allCompetences: Competence[];
  }

  export interface Presentations {
    presentation: Presentation;
  }

  export interface Generals {
    general: General;
  }

  export interface Presentation {
    titre: List[];
    personne: Personne[];
  }

  export interface Project {
    id: string;
    nom: string;
    youtube: string;
    prestation: List[];
    photos: Image[];
    image: Image;
    description: StructuredText<any>;
  }

  export interface Competence {
    id: string;
    titre: string;
    contenu: StructuredText<any>;
    image: Image;
  }

  export interface General {
    showreel: Image;
    telephone: string;
    mail: string;
  }
}

interface List {
  id: string;
  texte: string;
}

interface Personne {
  id: string;
  nom: string;
  image: Image;
  competence: string;
}

interface Image {
  id: string;
  alt: string;
  url: string;
}
