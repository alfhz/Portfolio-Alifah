// Interface untuk data Statistik (Kotak angka)
export interface StatItem {
    value: string;
    label: string;
}

// Interface untuk data Project
export interface ProjectItem {
    title: string;
    category: string;
    image: string;
}

// Interface untuk data Experience
export interface ContributionItem {
    icon: string;
    title: string;
    desc: string;
    colorClass: string; 
}
export interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    period: string;
    desc: string;
    details: string;
    keyContributions: ContributionItem[];
    proofUrl: string;
}

// Interface untuk data Certification
export interface CertificationItem {
    id: number;
    name: string;
    issuer: string;
    year: string;
    link: string;
}

// Interface untuk data Task/Assignment
export interface StatItem {
    value: string;
    label: string;
}

// Interface untuk data Portfolio
export interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    role: string;
    period: string;
    shortDesc: string; 
    projectDesc: string; 
    jobDesc: string; 
    techStack: string[]; 
    images: string[]; 
    sourceUrl: string; 
}