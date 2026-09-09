import type { SkillCategory } from './types';

export interface Education {
  title: string;
  status: string;
  description: string;
}

export interface AboutData {
  biography: string[];
  journey: string[];
  workProcess: {
    introduction: string;
    steps: string[];
    principles: string[];
  };
  interests: string[];
  education: Education[];
  growth: {
    introduction: string;
    topics: string[];
    objective: string;
  };
  technologies: SkillCategory[];
}
