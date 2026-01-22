
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Publication {
  id: string;
  title: string;
  edition: string;
  date: string;
  coverUrl: string;
  description: string;
}

export interface Interview {
  id: string;
  guest: string;
  title: string;
  date: string;
  thumbnailUrl: string;
  description: string;
}
