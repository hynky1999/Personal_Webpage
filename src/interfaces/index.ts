export interface Skill {
  name: string;
  proficiency: number;
  commentary: string;
}

export interface Project {
    name: string;
    description: string;
    technologies: string[];
    links: {
        github?: string;
        website?: string;
    },
    image_url: string;
}