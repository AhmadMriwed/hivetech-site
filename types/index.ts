export interface ProjectProps {
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
export interface ServiceProps {
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
  export interface TestimoniProps {
    id: number
    image : string;
    title: string;
    sub_title: string;
    content: string;
    url: string;

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
  export interface SliderProps {
    id: number;                                               
    image: string;
    title: string;
    description: string;
    first_btn_text: string
    first_btn_url: string;
    second_btn_text: string;
    second_btn_url: string;
  }

  export type ProjectsArray = ProjectProps[];
  export type ServicesArray = ServiceProps[];
  export type TestimoniArray = TestimoniProps[];
  export type SliderArray = SliderProps[];
 