export function getEngagementLevel(rp: number): "High" | "Medium" | "Low" {
  if (rp >= 300) return "High";
  if (rp >= 150) return "Medium";
  return "Low";
}

export interface Student {
  id: number;
  name: string;
  rollNumber: string;
  department: string;
  academicYear: number;
  rewardPoints: number;
  engagementLevel: "High" | "Medium" | "Low";
}

export interface Activity {
  id: number;
  name: string;
  description: string;
  rewardPoints: number;
  date: string;
  category: string;
}

export const students: Student[] = [
  { id: 1, name: "Ms. AAMINA A", rollNumber: "7376231CS101", department: "Computer Science", academicYear: 1, rewardPoints: 420, engagementLevel: "High" },
  { id: 2, name: "Mr. ABHINAV A R", rollNumber: "7376231CS102", department: "Computer Science", academicYear: 1, rewardPoints: 310, engagementLevel: "High" },
  { id: 3, name: "Mr. AAGASH R S", rollNumber: "7376231EC101", department: "Electronics", academicYear: 1, rewardPoints: 180, engagementLevel: "Medium" },
  { id: 4, name: "Mr. AKASH N", rollNumber: "7376231ME101", department: "Mechanical", academicYear: 1, rewardPoints: 95, engagementLevel: "Low" },
  { id: 5, name: "Mr. ABIJITH S", rollNumber: "7376231CS103", department: "Computer Science", academicYear: 2, rewardPoints: 520, engagementLevel: "High" },
  { id: 6, name: "Ms. ABIKSHA D", rollNumber: "7376231CS104", department: "Computer Science", academicYear: 2, rewardPoints: 380, engagementLevel: "High" },
  { id: 7, name: "Ms. ABHISRI M", rollNumber: "7376231EC102", department: "Electronics", academicYear: 2, rewardPoints: 270, engagementLevel: "Medium" },
  { id: 8, name: "Mr. AKASHKUMAR S", rollNumber: "7376231ME102", department: "Mechanical", academicYear: 2, rewardPoints: 160, engagementLevel: "Medium" },
  { id: 9, name: "Mr. ANGU DURGESHWARAN A", rollNumber: "7376231CE101", department: "Civil", academicYear: 2, rewardPoints: 120, engagementLevel: "Low" },
  { id: 10, name: "Mr. ABISHEK HARIHARAN T", rollNumber: "7376231CS105", department: "Computer Science", academicYear: 3, rewardPoints: 610, engagementLevel: "High" },
  { id: 11, name: "Mr. ABISHEK YADAV R", rollNumber: "7376231CS106", department: "Computer Science", academicYear: 3, rewardPoints: 445, engagementLevel: "High" },
  { id: 12, name: "Ms. ABINAYA S", rollNumber: "7376231EC103", department: "Electronics", academicYear: 3, rewardPoints: 330, engagementLevel: "High" },
  { id: 13, name: "Mr. ASHWIN R", rollNumber: "7376231ME103", department: "Mechanical", academicYear: 3, rewardPoints: 200, engagementLevel: "Medium" },
  { id: 14, name: "Mr. ARUNJOTHI T", rollNumber: "7376231CE102", department: "Civil", academicYear: 3, rewardPoints: 140, engagementLevel: "Low" },
  { id: 15, name: "Mr. ADHAVAN SE V", rollNumber: "7376231CS107", department: "Computer Science", academicYear: 4, rewardPoints: 720, engagementLevel: "High" },
  { id: 16, name: "Mr. AJAY DHAYANAND R", rollNumber: "7376231CS108", department: "Computer Science", academicYear: 4, rewardPoints: 580, engagementLevel: "High" },
  { id: 17, name: "Mr. ABISHEK KS", rollNumber: "7376231EC104", department: "Electronics", academicYear: 4, rewardPoints: 350, engagementLevel: "High" },
  { id: 18, name: "Mr. ATHITHYA J", rollNumber: "7376231ME104", department: "Mechanical", academicYear: 4, rewardPoints: 240, engagementLevel: "Medium" },
  { id: 19, name: "Mr. BALAJI RAJAN R V", rollNumber: "7376231CE103", department: "Civil", academicYear: 4, rewardPoints: 90, engagementLevel: "Low" },
  { id: 20, name: "Mr. AJAY K P", rollNumber: "7376231CS109", department: "Computer Science", academicYear: 1, rewardPoints: 260, engagementLevel: "Medium" },
  { id: 21, name: "Mr. ABISHEK V", rollNumber: "7376231EC105", department: "Electronics", academicYear: 2, rewardPoints: 410, engagementLevel: "High" },
  { id: 23, name: "Mr. AHMED ABU HURAIRAH M H", rollNumber: "7376231EC106", department: "Electronics", academicYear: 1, rewardPoints: 150, engagementLevel: "Medium" },
  { id: 22, name: "Mr. BALAJIPRABU A", rollNumber: "7376231CE104", department: "Civil", academicYear: 3, rewardPoints: 175, engagementLevel: "Medium" },
];

export const activities: Activity[] = [
  { id: 1, name: "Hackathon 2025", description: "48-hour coding competition to solve real-world problems. Open to all departments.", rewardPoints: 1000, date: "2025-03-15", category: "Technical" },
  { id: 2, name: "Research Paper Presentation", description: "Present your research findings at the annual symposium.", rewardPoints: 500, date: "2025-03-22", category: "Academic" },
  { id: 3, name: "Community Service Drive", description: "Participate in the campus cleanup and local community outreach program.", rewardPoints: 300, date: "2025-04-01", category: "Social" },
  { id: 4, name: "Tech Talk Series", description: "Attend guest lectures from industry leaders on emerging technologies.", rewardPoints: 100, date: "2025-04-10", category: "Technical" },
  { id: 5, name: "Sports Tournament", description: "Inter-department sports competition including cricket, football, and basketball.", rewardPoints: 500, date: "2025-04-18", category: "Sports" },
  { id: 6, name: "Cultural Fest", description: "Annual cultural festival with performances, art exhibitions, and workshops.", rewardPoints: 300, date: "2025-05-02", category: "Cultural" },
  { id: 7, name: "Workshop: AI & ML", description: "Hands-on workshop on artificial intelligence and machine learning fundamentals.", rewardPoints: 500, date: "2025-05-15", category: "Technical" },
  { id: 8, name: "Debate Competition", description: "Inter-college debate on current affairs and technology ethics.", rewardPoints: 300, date: "2025-05-20", category: "Academic" },
  { id: 9, name: "Blood Donation Camp", description: "Annual blood donation drive in collaboration with Red Cross.", rewardPoints: 100, date: "2025-06-01", category: "Social" },
  { id: 10, name: "Entrepreneurship Bootcamp", description: "3-day bootcamp on startup fundamentals, pitching, and fundraising.", rewardPoints: 1000, date: "2025-06-12", category: "Academic" },
];
