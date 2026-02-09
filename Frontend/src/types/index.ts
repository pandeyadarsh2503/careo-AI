// User types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'jobseeker' | 'recruiter';
  avatar?: string;
}

// Job types
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'remote' | 'onsite' | 'hybrid';
  experience: 'fresher' | 'junior' | 'mid' | 'senior';
  salary?: string;
  techStack: string[];
  description: string;
  postedDate: string;
}

// Interview types
export interface InterviewConfig {
  role: 'backend' | 'frontend' | 'ml' | 'fullstack';
  level: 'fresher' | 'intern' | 'experienced';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

// Filter types
export interface JobFilters {
  type: ('remote' | 'onsite' | 'hybrid')[];
  techStack: string[];
  experience: string[];
  searchQuery: string;
}
