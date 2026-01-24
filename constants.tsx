
import { TeamMember, Publication, Interview } from './types';

export const COLORS = {
  primary: '#0b0332', // Nuevo Azul Profundo
  accent: '#E8DCC4',  // Cream/Gold
  muted: '#2C3E50',
  white: '#FFFFFF'
};

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Valdés Alejandro',
    role: 'Director Editorial',
    bio: 'Especialista en Derecho Corporativo con enfoque en estrategia legal internacional.',
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&h=800&auto=format&fit=crop',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: '2',
    name: 'Carrillo Sofía',
    role: 'Coordinadora de Investigaciones',
    bio: 'Experta en Litigio Mercantil y supervisión de rigor científico editorial.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&h=800&auto=format&fit=crop',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: '3',
    name: 'Mendoza Ricardo',
    role: 'Jefe de Redacción',
    bio: 'Periodista jurídico especializado en análisis normativo y tendencias globales.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&h=800&auto=format&fit=crop',
    linkedinUrl: 'https://linkedin.com'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: '1',
    title: 'Transformación Digital en el Derecho',
    edition: 'Edición Otoño 2024',
    date: 'Octubre 2024',
    coverUrl: 'https://picsum.photos/seed/mag1/600/800',
    description: 'Un análisis profundo sobre cómo la IA está cambiando la práctica legal contemporánea.'
  },
  {
    id: '2',
    title: 'Jurisprudencia Mercantil Moderna',
    edition: 'Edición Verano 2024',
    date: 'Julio 2024',
    coverUrl: 'https://picsum.photos/seed/mag2/600/800',
    description: 'Recopilación de los fallos más significativos del último semestre en materia comercial.'
  },
  {
    id: '3',
    title: 'Derechos Humanos y Empresa',
    edition: 'Edición Primavera 2024',
    date: 'Abril 2024',
    coverUrl: 'https://picsum.photos/seed/mag3/600/800',
    description: 'Explorando la responsabilidad social corporativa desde una perspectiva jurídica integral.'
  }
];

export const INTERVIEWS: Interview[] = [
  {
    id: '1',
    guest: 'Ministro Roberto Sánchez',
    title: 'El Futuro de la Justicia Constitucional',
    date: '15 Nov, 2024',
    thumbnailUrl: 'https://picsum.photos/seed/int1/800/450',
    description: 'Una conversación exclusiva sobre las reformas estructurales al sistema judicial.'
  },
  {
    id: '2',
    guest: 'Dra. Elena Martínez',
    title: 'Propiedad Intelectual en la Era del Software',
    date: '02 Nov, 2024',
    thumbnailUrl: 'https://picsum.photos/seed/int2/800/450',
    description: 'Análisis de los retos que presentan las nuevas tecnologías para el derecho de autor.'
  }
];