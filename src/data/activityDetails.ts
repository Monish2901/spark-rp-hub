export interface ActivityDetail {
  activityId: number;
  fullDescription: string;
  venue: string;
  time: string;
  organizer: string;
  eligibility: string;
  registrationDeadline: string;
  contactEmail: string;
  highlights: string[];
}

const activityDetails: ActivityDetail[] = [
  {
    activityId: 1,
    fullDescription:
      "A 48-hour coding marathon where teams of 2–4 build innovative solutions to real-world challenges. Mentors from top tech companies will guide participants. Themes include HealthTech, EdTech, and Sustainability. Winning teams receive internship offers and cash prizes.",
    venue: "Main Auditorium & CS Labs",
    time: "9:00 AM – 9:00 AM (48 hrs)",
    organizer: "Department of Computer Science",
    eligibility: "All departments, all years",
    registrationDeadline: "2025-03-10",
    contactEmail: "hackathon@college.edu",
    highlights: ["Industry mentors", "Cash prizes worth ₹50,000", "Internship opportunities", "Free meals & swag"],
  },
  {
    activityId: 2,
    fullDescription:
      "Present original research papers at the annual technical symposium. Papers are reviewed by faculty panels and top entries are published in the college journal. Topics span AI, IoT, renewable energy, and more.",
    venue: "Seminar Hall B",
    time: "10:00 AM – 4:00 PM",
    organizer: "Research & Innovation Cell",
    eligibility: "Year 2+ students with faculty-approved abstracts",
    registrationDeadline: "2025-03-15",
    contactEmail: "research@college.edu",
    highlights: ["Publication opportunity", "Faculty panel review", "Best Paper Award", "Certificate for all presenters"],
  },
  {
    activityId: 3,
    fullDescription:
      "Join fellow students in a community outreach initiative covering campus beautification, local school teaching, and environmental awareness drives. Transportation and lunch provided.",
    venue: "Campus & Local Community Centers",
    time: "8:00 AM – 2:00 PM",
    organizer: "NSS Unit",
    eligibility: "Open to all",
    registrationDeadline: "2025-03-28",
    contactEmail: "nss@college.edu",
    highlights: ["Community impact", "NSS hours credit", "Group activities", "Lunch provided"],
  },
  {
    activityId: 4,
    fullDescription:
      "A weekly guest lecture series featuring CTOs, engineers, and researchers from leading tech companies. Topics include cloud computing, cybersecurity, blockchain, and career guidance.",
    venue: "Virtual (Zoom) + Lecture Hall 1",
    time: "3:00 PM – 5:00 PM",
    organizer: "Training & Placement Cell",
    eligibility: "All students",
    registrationDeadline: "2025-04-08",
    contactEmail: "placement@college.edu",
    highlights: ["Industry networking", "Q&A with experts", "Recording access", "Attendance certificate"],
  },
  {
    activityId: 5,
    fullDescription:
      "Annual inter-department sports fest featuring cricket, football, basketball, volleyball, and athletics. Teams represent their departments and compete over 3 days for the Rolling Trophy.",
    venue: "College Sports Ground & Indoor Stadium",
    time: "7:00 AM – 6:00 PM (3 days)",
    organizer: "Sports Committee",
    eligibility: "Department teams (15 members max per sport)",
    registrationDeadline: "2025-04-12",
    contactEmail: "sports@college.edu",
    highlights: ["Rolling Trophy", "Individual medals", "Best Sportsperson Award", "Live commentary"],
  },
  {
    activityId: 6,
    fullDescription:
      "The flagship cultural festival featuring dance, music, drama, art exhibitions, stand-up comedy, and fashion shows. Open mic sessions and workshops in photography and short filmmaking are also available.",
    venue: "Open Air Theatre & Cultural Block",
    time: "10:00 AM – 9:00 PM (2 days)",
    organizer: "Cultural Committee",
    eligibility: "All students; inter-college participants welcome",
    registrationDeadline: "2025-04-25",
    contactEmail: "cultural@college.edu",
    highlights: ["Celebrity guest performance", "Inter-college competitions", "Art exhibition", "Food stalls"],
  },
  {
    activityId: 7,
    fullDescription:
      "An intensive hands-on workshop covering Python for ML, neural networks, CNNs, NLP basics, and deploying models with Flask. Participants build a real project by the end of the workshop. Laptops required.",
    venue: "AI Lab, CS Block",
    time: "9:00 AM – 5:00 PM (2 days)",
    organizer: "AI & Data Science Club",
    eligibility: "Basic Python knowledge required",
    registrationDeadline: "2025-05-10",
    contactEmail: "aiclub@college.edu",
    highlights: ["Hands-on project", "Industry dataset", "Completion certificate", "GitHub portfolio piece"],
  },
  {
    activityId: 8,
    fullDescription:
      "Inter-college debate competition on topics ranging from AI ethics and data privacy to climate policy. Teams of 2 argue for and against motions in Oxford-style format with judges from academia and media.",
    venue: "Conference Hall",
    time: "10:00 AM – 4:00 PM",
    organizer: "Literary & Debate Society",
    eligibility: "Teams of 2 from any college",
    registrationDeadline: "2025-05-15",
    contactEmail: "debate@college.edu",
    highlights: ["Oxford-style format", "Media judge panel", "Trophy + cash prize", "Best Speaker Award"],
  },
  {
    activityId: 9,
    fullDescription:
      "Annual blood donation camp organized with Indian Red Cross Society. Includes free health check-up, blood group testing, and hemoglobin test. Donors receive certificates and refreshments.",
    venue: "College Health Center",
    time: "9:00 AM – 3:00 PM",
    organizer: "Red Cross Youth Wing",
    eligibility: "Age 18+, healthy individuals",
    registrationDeadline: "2025-05-28",
    contactEmail: "health@college.edu",
    highlights: ["Free health check-up", "Blood group card", "Refreshments", "Donor certificate"],
  },
  {
    activityId: 10,
    fullDescription:
      "A 3-day intensive bootcamp covering ideation, business model canvas, MVP development, pitch deck creation, and investor interaction. Guest speakers include successful startup founders and VCs.",
    venue: "Innovation Center, Block D",
    time: "9:00 AM – 6:00 PM (3 days)",
    organizer: "Entrepreneurship Cell",
    eligibility: "All students; teams of 1–4",
    registrationDeadline: "2025-06-05",
    contactEmail: "ecell@college.edu",
    highlights: ["VC interaction", "Seed funding opportunity", "Startup toolkit", "Pitch competition"],
  },
];

export function getActivityDetail(activityId: number): ActivityDetail | undefined {
  return activityDetails.find((d) => d.activityId === activityId);
}
