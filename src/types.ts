export type PortfolioCategory = 
  | 'All'
  | 'Video Editing'
  | 'Social Media'
  | 'Content Creation'
  | 'YouTube'
  | 'Graphics';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Video Editing' | 'Social Media' | 'Content Creation' | 'YouTube' | 'Graphics';
  shortDescription: string;
  fullDescription?: string;
  thumbnail: string;
  aspectRatio?: '16:9' | '9:16' | '1:1' | '4:5';
  isVideo?: boolean;
  videoUrl?: string; // Direct video file link or MP4
  embedUrl?: string; // YouTube/Vimeo embed or share link
  youtubeUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  toolsUsed?: string[];
  role?: string;
  clientPlaceholder?: string;
  deliverables?: string[];
  metricsPlaceholder?: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  deliverables: string[];
  tag: string;
}

export interface ExperienceItem {
  id: string;
  categoryTitle: string;
  organization: string;
  dates: string;
  role: string;
  responsibilities: string[];
  isPlaceholder?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  roleOrCompany: string;
  projectType: string;
  isPlaceholder?: boolean;
}

export interface ToolSkill {
  name: string;
  category: 'Software & Tools' | 'Core Craft' | 'Strategy & Growth';
  levelDescription: string;
  iconName: string;
  highlight?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}
