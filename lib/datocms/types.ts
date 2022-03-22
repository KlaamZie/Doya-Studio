import { StructuredText } from "datocms-structured-text-utils";

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
    site: Site;
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
    seo: SEO;
  }

  export interface Site {
    favicon: Favicon[];
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
  video: {
    streamingUrl: string;
  };
}

interface Favicon {
  attributes: AttributesFavicon;
  content?: any;
  tag: string;
}

interface AttributesFavicon {
  sizes: string;
  type: string;
  rel: string;
  href: string;
}

interface SEO {
  _seoMetaTags: SeoMetaTags[];

  concat(favicon: Favicon[]): any;
}

interface SeoMetaTags {
  attributes: SeoAttribute;
  content: string;
  tag: string;
}

interface SeoAttribute {
  property: string;
  content: string;
}
