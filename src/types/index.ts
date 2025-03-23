export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    githubUrl: string;
    demoUrl: string;
  }
  
  export interface Skill {
    name: string;
    level: number;
    icon: React.ReactNode;
    color: string;
  }
  
  export interface TimelineItem {
    year: string;
    title: string;
    place: string;
    icon: React.ReactNode;
  }
  
  export interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }