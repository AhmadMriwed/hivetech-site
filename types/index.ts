export interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    content: string;
    image: string;
    project_link: string | null;
    demo_link: string | null;
    views: number;
    likes: number;
  }
export interface Service {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    content: string;
    image: string;
    project_link: string | null;
    demo_link: string | null;
    views: number;
    likes: number;
  }
  export interface Testimoni {
    id: number
    imageUrl : string;
    name: string;
    company: string;
    testimoni: string
  }
  export interface Projects {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    content: string;
    image: string;
    project_link: string | null;
    demo_link: string | null;
    views: number;
    likes: number;
    type: string;
  }