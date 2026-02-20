export interface SubjectEngagement {
  subject: string;
  engagementLevel: "High" | "Medium" | "Low";
}

const eceSubjects = [
  "Digital Communication",
  "Analog Communication",
  "Digital Signal Processing (DSP)",
  "Embedded Systems",
  "Internet of Things (IoT)",
];

// Predefined engagement data for ECE students
const eceEngagementData: Record<number, SubjectEngagement[]> = {
  3: [
    { subject: "Digital Communication", engagementLevel: "High" },
    { subject: "Analog Communication", engagementLevel: "Medium" },
    { subject: "Digital Signal Processing (DSP)", engagementLevel: "High" },
    { subject: "Embedded Systems", engagementLevel: "Low" },
    { subject: "Internet of Things (IoT)", engagementLevel: "Medium" },
  ],
  7: [
    { subject: "Digital Communication", engagementLevel: "Medium" },
    { subject: "Analog Communication", engagementLevel: "High" },
    { subject: "Digital Signal Processing (DSP)", engagementLevel: "Medium" },
    { subject: "Embedded Systems", engagementLevel: "High" },
    { subject: "Internet of Things (IoT)", engagementLevel: "High" },
  ],
  12: [
    { subject: "Digital Communication", engagementLevel: "High" },
    { subject: "Analog Communication", engagementLevel: "High" },
    { subject: "Digital Signal Processing (DSP)", engagementLevel: "High" },
    { subject: "Embedded Systems", engagementLevel: "Medium" },
    { subject: "Internet of Things (IoT)", engagementLevel: "High" },
  ],
  17: [
    { subject: "Digital Communication", engagementLevel: "Low" },
    { subject: "Analog Communication", engagementLevel: "Medium" },
    { subject: "Digital Signal Processing (DSP)", engagementLevel: "High" },
    { subject: "Embedded Systems", engagementLevel: "High" },
    { subject: "Internet of Things (IoT)", engagementLevel: "Medium" },
  ],
  21: [
    { subject: "Digital Communication", engagementLevel: "High" },
    { subject: "Analog Communication", engagementLevel: "Medium" },
    { subject: "Digital Signal Processing (DSP)", engagementLevel: "Low" },
    { subject: "Embedded Systems", engagementLevel: "High" },
    { subject: "Internet of Things (IoT)", engagementLevel: "High" },
  ],
  23: [
    { subject: "Digital Communication", engagementLevel: "Medium" },
    { subject: "Analog Communication", engagementLevel: "Low" },
    { subject: "Digital Signal Processing (DSP)", engagementLevel: "Medium" },
    { subject: "Embedded Systems", engagementLevel: "Low" },
    { subject: "Internet of Things (IoT)", engagementLevel: "Medium" },
  ],
};

// Default engagement for ECE students without specific data
const defaultEceEngagement: SubjectEngagement[] = eceSubjects.map((subject) => ({
  subject,
  engagementLevel: "Medium" as const,
}));

export function getAcademicEngagement(studentId: number, department: string): SubjectEngagement[] | null {
  if (department !== "Electronics") return null;
  return eceEngagementData[studentId] ?? defaultEceEngagement;
}
