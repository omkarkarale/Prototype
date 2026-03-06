export interface Project {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  liveDemo?: string;
}

export const projects: Project[] = [
  {
    title: "ResQ-Net – Real-time Emergency Response Grid",
    description:
      "Multimodal AI-powered emergency response system connecting paramedics and hospitals during the critical golden hour.",
    techStack: ["Flutter", "Firebase", "Google Cloud", "Dart"],
    github: "https://github.com/omkarkarale/ResQ-Net-Hackathon",
  },
  {
    title: "StockMaster Inventory System",
    description:
      "Centralized inventory management platform designed to replace manual stock registers and spreadsheets.",
    techStack: ["HTML", "CSS", "JavaScript", "Java"],
    github: "https://github.com/omkarkarale/StockMaster-Odoo-SPIT",
  },
  {
    title: "Rock Life Game",
    description:
      "Browser-based interactive game featuring player mechanics, NPC interactions and dynamic gameplay.",
    techStack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/omkarkarale/ROCK_LIFE",
  },
  {
    title: "Omkar Games Collection",
    description:
      "Collection of experimental browser games exploring gameplay mechanics and JavaScript game development.",
    techStack: ["JavaScript", "HTML", "CSS"],
    liveDemo: "https://sites.google.com/view/omkar-games/",
  },
];
