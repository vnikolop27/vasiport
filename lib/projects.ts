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
  // Image that peeks up from the bottom of the thumbnail and slides up on hover
  // (position in % of the 570 × 418 Figma frame).
  peek?: { src: string; left: string; top: string; width: string };
  // White frame coming in from the bottom right that grows on hover
  // (its top-left corner, in % of the Figma frame).
  frame?: { left: string; top: string };
  tint: string; // placeholder background
};

export const projects: Project[] = [
  {
    slug: "hellas-direct",
    title: "Hellas Direct",
    subtitle: "Moving key services out of the footer and into the main menu",
    tags: ["Information architecture", "Navigation"],
    href: "/work/hellas-direct",
    peek: { src: "/work/thumbs/hellas-laptop.webp", left: "6.67%", top: "55.02%", width: "86.67%" },
    tint: "#e7e7e7",
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
    frame: { left: "25.26%", top: "35.41%" },
    tint: "#304ac7",
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
