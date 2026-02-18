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

export interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    period: string;
    desc: string; // Deskripsi pendek (untuk kartu depan)
    details: string; // Deskripsi panjang (untuk modal pop-up)
}

export interface CertificationItem {
    id: number;
    name: string;
    issuer: string;
    year: string;
    link: string;
}

// (Pastikan interface StatItem dan lainnya tetap ada di sini jika masih dipakai)
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
    shortDesc: string; // Deskripsi pendek untuk kartu depan
    projectDesc: string; // Deskripsi detail Project
    jobDesc: string; // Deskripsi detail Pekerjaan Kamu
    techStack: string[]; // Array icon/nama teknologi (misal: 'Vue', 'Laravel')
    images: string[]; // Array url gambar untuk slider
    sourceUrl: string; // Link ke project/github
}