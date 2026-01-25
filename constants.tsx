
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
    title: 'Reestructuración organizacional de la SBS en 2025: análisis de eficiencia y necesariedad.',
    author: 'Rania Esperanza Vásquez Soriano',
    edition: 'Derecho Bancario y Financiero',
    date: '19 ago 2025',
    coverUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&h=800&auto=format&fit=crop',
    description: 'Análisis crítico sobre los cambios estructurales en la Superintendencia de Banca, Seguros y AFP.',
    pdfUrl: 'https://drive.google.com/file/d/1aU4IPowSz3_pW3iFRSrYEVYDIRRkLmmo/view'
  },
  {
    id: '2',
    title: '¿El plazo del artículo 1429 del Código Civil es susceptible de ser modificado para resolver el contrato?',
    author: 'Ariana Soleil Urruchi Pariona',
    edition: 'Derecho Contractual',
    date: '28 jul 2025',
    coverUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=600&h=800&auto=format&fit=crop',
    description: 'Estudio sobre la autonomía de la voluntad frente a los plazos legales de resolución contractual.',
    pdfUrl: 'https://drive.google.com/file/d/1N4ZzQBJhwge-iYCkzRYsMR6IjFqgN9tW/view'
  },
  {
    id: '3',
    title: 'Multipropiedad de Clubes en el Fútbol: Retos Regulatorios y Soluciones de Gobernanza.',
    author: 'Sebastian Mauricio Dávila González',
    edition: 'Derecho Deportivo',
    date: '26 ago 2025',
    coverUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&h=800&auto=format&fit=crop',
    description: 'Análisis de los desafíos legales y administrativos de la multipropiedad en el deporte rey.',
    pdfUrl: 'https://drive.google.com/file/d/13blfkchn1495OG7zmHnvJIn_do7Mrk4n/view'
  },
  {
    id: '4',
    title: 'Revocación por ingratitud: ¿Excepción moral o regla funcional en Derecho Civil peruano?',
    author: 'Yamiley Mayumi Solano Tinta',
    edition: 'Derecho Civil / Contratos',
    date: '14 jul 2025',
    coverUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&h=800&auto=format&fit=crop',
    description: 'Evaluación de la figura de la ingratitud como causal de revocación en el marco jurídico civil nacional.',
    pdfUrl: 'https://drive.google.com/file/d/1mrEgy9VBBK9fIOJIro8AGxDMAz1NqeT8/view'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Yamiley Mayumi Solano Tinta',
    role: 'Fundadora',
    bio: 'Fundadora. Impulsa la creación y desarrollo de Lex Corporativa como un espacio de investigación, análisis y difusión del pensamiento jurídico estudiantil.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&h=800&auto=format&fit=crop',
    linkedinUrl: SOCIAL_LINKS.linkedin
  },
  {
    id: '2',
    name: 'Ariana Urruchi Pariona',
    role: 'Fundadora',
    bio: 'Fundadora. Impulsa la creación y desarrollo de Lex Corporativa como un espacio de investigación, análisis y difusión del pensamiento jurídico estudiantil.',
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
    thumbnailUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    description: 'Una conversación sobre los retos de la investigación jurídica en la actualidad.'
  }
];
