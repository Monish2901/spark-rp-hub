export interface ExamRecord {
  subject: string;
  score: number;
  maxScore: number;
  grade: string;
}

export interface TechnicalSkill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  certifications?: string[];
}

export interface SportRecord {
  sport: string;
  event: string;
  achievement: string;
  date: string;
}

export interface ClubActivity {
  club: string;
  role: string;
  contributions: string;
  since: string;
}

export interface StudentPerformance {
  studentId: number;
  exams: ExamRecord[];
  technicalSkills: TechnicalSkill[];
  sports: SportRecord[];
  clubs: ClubActivity[];
}

export const studentPerformanceData: StudentPerformance[] = [
  {
    studentId: 1,
    exams: [
      { subject: "Data Structures", score: 92, maxScore: 100, grade: "A+" },
      { subject: "Operating Systems", score: 85, maxScore: 100, grade: "A" },
      { subject: "DBMS", score: 78, maxScore: 100, grade: "B+" },
    ],
    technicalSkills: [
      { name: "Python", level: "Advanced", certifications: ["Google Python Certificate"] },
      { name: "React", level: "Intermediate" },
      { name: "Machine Learning", level: "Beginner" },
    ],
    sports: [
      { sport: "Badminton", event: "Inter-College Tournament", achievement: "Runner-Up", date: "2025-11" },
    ],
    clubs: [
      { club: "Coding Club", role: "Secretary", contributions: "Organized 3 hackathons", since: "2025-06" },
    ],
  },
  {
    studentId: 2,
    exams: [
      { subject: "Data Structures", score: 88, maxScore: 100, grade: "A" },
      { subject: "Computer Networks", score: 91, maxScore: 100, grade: "A+" },
    ],
    technicalSkills: [
      { name: "Java", level: "Advanced" },
      { name: "AWS", level: "Intermediate", certifications: ["AWS Cloud Practitioner"] },
    ],
    sports: [],
    clubs: [
      { club: "Robotics Club", role: "Member", contributions: "Built line-follower robot", since: "2025-08" },
    ],
  },
  {
    studentId: 5,
    exams: [
      { subject: "Algorithms", score: 95, maxScore: 100, grade: "A+" },
      { subject: "Software Engineering", score: 89, maxScore: 100, grade: "A" },
      { subject: "AI", score: 93, maxScore: 100, grade: "A+" },
    ],
    technicalSkills: [
      { name: "TypeScript", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "TensorFlow", level: "Intermediate", certifications: ["DeepLearning.AI TensorFlow"] },
    ],
    sports: [
      { sport: "Cricket", event: "Department League", achievement: "Best Bowler", date: "2025-09" },
      { sport: "Chess", event: "State Championship", achievement: "Top 10", date: "2026-01" },
    ],
    clubs: [
      { club: "Open Source Club", role: "Lead", contributions: "Contributed to 5 OSS projects", since: "2024-12" },
      { club: "Quiz Club", role: "Captain", contributions: "Won inter-college quiz", since: "2025-03" },
    ],
  },
  {
    studentId: 10,
    exams: [
      { subject: "Compiler Design", score: 90, maxScore: 100, grade: "A+" },
      { subject: "Cloud Computing", score: 86, maxScore: 100, grade: "A" },
    ],
    technicalSkills: [
      { name: "Go", level: "Advanced" },
      { name: "Kubernetes", level: "Intermediate" },
    ],
    sports: [
      { sport: "Football", event: "Inter-Dept Cup", achievement: "Winner", date: "2025-10" },
    ],
    clubs: [
      { club: "Entrepreneurship Cell", role: "Co-founder", contributions: "Launched campus startup incubator", since: "2024-06" },
    ],
  },
  {
    studentId: 15,
    exams: [
      { subject: "Machine Learning", score: 97, maxScore: 100, grade: "A+" },
      { subject: "Big Data", score: 91, maxScore: 100, grade: "A+" },
      { subject: "NLP", score: 88, maxScore: 100, grade: "A" },
    ],
    technicalSkills: [
      { name: "Python", level: "Advanced", certifications: ["TensorFlow Developer", "AWS ML Specialty"] },
      { name: "Rust", level: "Intermediate" },
      { name: "System Design", level: "Advanced" },
    ],
    sports: [
      { sport: "Table Tennis", event: "University Open", achievement: "Gold Medal", date: "2025-12" },
    ],
    clubs: [
      { club: "AI Research Group", role: "Lead Researcher", contributions: "Published 2 papers", since: "2024-01" },
      { club: "Coding Club", role: "President", contributions: "Mentored 50+ juniors", since: "2024-06" },
    ],
  },
];

// Default performance for students without specific data
const defaultPerformance: Omit<StudentPerformance, "studentId"> = {
  exams: [
    { subject: "Mathematics", score: 72, maxScore: 100, grade: "B" },
    { subject: "Physics", score: 68, maxScore: 100, grade: "B" },
  ],
  technicalSkills: [
    { name: "C Programming", level: "Intermediate" },
    { name: "Microsoft Office", level: "Beginner" },
  ],
  sports: [],
  clubs: [],
};

export function getStudentPerformance(studentId: number): StudentPerformance {
  return (
    studentPerformanceData.find((p) => p.studentId === studentId) ?? {
      studentId,
      ...defaultPerformance,
    }
  );
}
