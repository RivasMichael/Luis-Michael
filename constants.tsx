
import { TeamMember, Publication, Interview } from './types.ts';

export const COLORS = {
  primary: '#0b0332',
  accent: '#E8DCC4',
  muted: '#2C3E50',
  white: '#FFFFFF'
};

export const CONTACT_EMAIL = 'lexcorporativa@gmail.com';

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/lex-corporativa/',
  instagram: 'https://www.instagram.com/lex_corporativa?utm_source=qr&igsh=MTQ2dWU2YW9rdnU2cw==',
  facebook: 'https://www.facebook.com/share/1C2LvPrdqZ/',
  tiktok: 'https://www.tiktok.com/@lex.corporativa?_r=1&_t=ZS-93LXmMV4IXx'
};

export const PUBLICATIONS: (Publication & { pdfUrl: string; author: string })[] = [
  {
    id: '1',
    title: 'Edición Especial: Análisis Jurídico Lex Corporativa',
    author: 'Cuerpo Editorial',
    edition: 'Volumen I - 2025',
    date: 'Marzo 2025',
    coverUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&h=800&auto=format&fit=crop',
    description: 'Nuestra publicación de lanzamiento donde exploramos los desafíos legales contemporáneos y la visión de nuestra revista.',
    pdfUrl: 'https://drive.google.com/file/d/1aU4IPowSz3_pW3iFRSrYEVYDIRRkLmmo/view?usp=sharing'
  },
  {
    id: '2',
    title: 'Marcos Regulatorios en la Era Digital',
    author: 'Yamiley Solano',
    edition: 'Volumen I - 2025',
    date: 'Marzo 2025',
    coverUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=600&h=800&auto=format&fit=crop',
    description: 'Un análisis crítico sobre cómo la tecnología está redefiniendo el cumplimiento normativo en las organizaciones modernas.',
    pdfUrl: 'https://drive.google.com/file/d/1N4ZzQBJhwge-iYCkzRYsMR6IjFqgN9tW/view?usp=sharing'
  },
  {
    id: '3',
    title: 'Gobernanza y Sostenibilidad Empresarial',
    author: 'Ariana Urruchi',
    edition: 'Volumen I - 2025',
    date: 'Marzo 2025',
    coverUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&h=800&auto=format&fit=crop',
    description: 'Estudio sobre el impacto de los criterios ESG y la responsabilidad social en la estrategia jurídica corporativa.',
    pdfUrl: 'https://drive.google.com/file/d/13blfkchn1495OG7zmHnvJIn_do7Mrk4n/view?usp=sharing'
  },
  {
    id: '4',
    title: 'Tendencias en el Derecho Mercantil 2025',
    author: 'Nikold Lopez',
    edition: 'Volumen I - 2025',
    date: 'Marzo 2025',
    coverUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&h=800&auto=format&fit=crop',
    description: 'Exploración de los cambios procesales y sustantivos más relevantes para el ámbito mercantil en el año en curso.',
    pdfUrl: 'https://drive.google.com/file/d/1mrEgy9VBBK9fIOJIro8AGxDMAz1NqeT8/view?usp=sharing'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Yamiley Mayumi Solano Tinto',
    role: 'Fundadora',
    bio: 'Impulsa la creación y desarrollo de Lex Corporativa como un espacio de investigación, análisis y difusión del pensamiento jurídico estudiantil.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&h=800&auto=format&fit=crop',
    linkedinUrl: SOCIAL_LINKS.linkedin
  },
  {
    id: '2',
    name: 'Ariana Urruchi Pariona',
    role: 'Fundadora',
    bio: 'Impulsa la creación y desarrollo de Lex Corporativa como un espacio de investigación, análisis y difusión del pensamiento jurídico estudiantil.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&h=800&auto=format&fit=crop',
    linkedinUrl: SOCIAL_LINKS.linkedin
  },
  {
    id: '3',
    name: 'Nikold Lopez Barrera',
    role: 'Área de Difusión',
    bio: 'Encargada de la promoción institucional de Lex Corporativa, la difusión del contenido editorial y el posicionamiento de la revista en espacios académicos y digitales.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&h=800&auto=format&fit=crop',
    linkedinUrl: SOCIAL_LINKS.linkedin
  },
  {
    id: '4',
    name: 'Fátima Kamila Sarmiento Flores',
    role: 'Área de Difusión',
    bio: 'Encargada de la promoción institucional de Lex Corporativa, la difusión del contenido editorial y el posicionamiento de la revista en espacios académicos y digitales.',
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&h=800&auto=format&fit=crop',
    linkedinUrl: SOCIAL_LINKS.linkedin
  }
];

export const INTERVIEWS: Interview[] = [
  {
    id: '1',
    guest: 'Cuerpo Académico',
    title: 'El Futuro de la Justicia Estudiantil',
    date: '2025',
    thumbnailUrl: 'https://picsum.photos/seed/int1/800/450',
    description: 'Una conversación sobre los retos de la investigación jurídica en la actualidad.'
  }
];
