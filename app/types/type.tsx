interface TeamMemberProps {
    name: string;
    role: string;
    skills: string[];
    description: string;
    initials: string;
    color: string;
    photo?: string;
    linkedin?: string;
    github?: string;
    portfolio?: string;
}

interface RoadmapStepProps {
    number: number;
    title: string;
    description: string;
    isLast?: boolean;
}