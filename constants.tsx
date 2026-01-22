
import { TeamMember, Publication, Interview } from './types';

export const COLORS = {
  primary: '#0B1221', // Dark Navy
  accent: '#E8DCC4',  // Cream/Gold
  muted: '#2C3E50',
  white: '#FFFFFF'
};

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Alejandro Valdés',
    role: 'Director Editorial',
    bio: 'Especialista en Derecho Corporativo con más de 20 años de trayectoria académica y profesional.',
    imageUrl: 'https://picsum.photos/seed/law1/400/500'
  },
  {
    id: '2',
    name: 'Mtra. Sofía Carrillo',
    role: 'Coordinadora de Investigaciones',
    bio: 'Experta en Litigio Civil y Mercantil, dedicada a la supervisión científica de nuestras publicaciones.',
    imageUrl: 'https://picsum.photos/seed/law2/400/500'
  },
  {
    id: '3',
    name: 'Lic. Ricardo Mendoza',
    role: 'Jefe de Redacción',
    bio: 'Periodista jurídico con enfoque en análisis normativo y tendencias legales internacionales.',
    imageUrl: 'https://picsum.photos/seed/law3/400/500'
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
