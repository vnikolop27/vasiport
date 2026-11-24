// The "Selected work" grid. Order here = order on the home page.
//
// Thumbnails: export each one from Figma at 2x (1140 × 836) and save it in
// public/work/thumbs/, then set `thumbnail` to its path, e.g. "/work/thumbs/hellas.png".
// Until then the card shows a tinted placeholder.

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  href?: string; // case study page; leave out while in progress
  inProgress?: boolean;
  thumbnail?: string;
  // Show a tall screenshot inside a laptop frame; on hover it scrolls to the bottom.
  laptop?: string;
  // Hover effect for the thumbnail: "zoom" scales the whole frame up slightly.
  hover?: "zoom";
  tint: string; // placeholder background
};

export const projects: Project[] = [
  {
    slug: "hellas-direct",
    title: "Hellas Direct",
    subtitle: "Moving key services out of the footer and into the main menu",
    tags: ["Information architecture", "Navigation"],
    href: "/work/hellas-direct",
    laptop: "/work/thumbs/hellas-screen.webp",
    tint: "#e4ecf2",
  },
  {
    slug: "zovu",
    title: "ZOVU",
    subtitle: "Untangling navigation for a hospitality platform",
    tags: ["Product design", "SaaS", "Mobile commerce"],
    inProgress: true,
    tint: "#e8e6e1",
  },
  {
    slug: "matchwise",
    title: "Matchwise",
    subtitle: "An AI agent that matches portfolios to the right jobs",
    tags: ["Product design", "AI agent", "Job matching"],
    inProgress: true,
    hover: "zoom",
    tint: "#e7ebe1",
  },
  {
    slug: "school-of-leadership",
    title: "School of Leadership",
    subtitle: "Redesigning a leadership school’s site for five audiences",
    tags: ["UX research", "Website redesign", "Education"],
    inProgress: true,
    tint: "#e3e7ee",
  },
];
