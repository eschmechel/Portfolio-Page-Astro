interface TimelineEvent {
  startDate?: string;
  endDate?: string;
  title: string;
  description: string;
  color: "primary" | "secondary" | "accent";
}

export const timelineEvents: TimelineEvent[] = [
  {
    startDate: "September 2024",
    endDate: "Present",
    title: "Started at Langara College",
    description: "Computer Science Program",
    color: "primary",
  },
  {
    startDate: "August 2024",
    endDate: "Present",
    title: "Game tester for Riot Games",
    description:
      "Provided confidential feedback and testing for proprietary game features under NDA.",
    color: "secondary",
  },
  {
    startDate: "November 2024",
    endDate: "Present",
    title: "AI Red Teamer at Data Annotation",
    description: "Quality assurance and model testing",
    color: "primary",
  },
  {
    startDate: "June 2025",
    endDate: "Present",
    title: "IT Intern at Langara French Club",
    description:
      "Provide IT support and developed solutions for club activities.",
    color: "primary",
  },
  {
    startDate: "July 2025",
    endDate: "Present",
    title: "Started Student Software Association",
    description:
      "Building inter-university community and projects for CS students.",
    color: "primary",
  },
  {
    title: "Current",
    description: "Available for opportunities",
    color: "accent",
  },
];

export default timelineEvents;
