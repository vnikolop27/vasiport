import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "About" };

const experience = [
  ["ZOVU", "UI/UX Design Intern", "Jul 2026–present"],
  ["UN Digital Library", "UX Researcher", "Feb–May 2026"],
  ["School of Leadership", "UX Consultant", "Feb–May 2026"],
  ["Inspired Minds Art Center", "UX Consultant", "Oct–Dec 2025"],
  ["Hellas Direct", "Product Design Intern", "Jun–Sep 2025"],
  ["Van Der Plas Gallery", "Design Intern", "May–Dec 2023"],
];

const education = [
  ["Pratt Institute", "M.S. Information Experience Design", "2025–2027"],
  ["CUNY Brooklyn College", "Art BA", "2020–2024"],
];

function Rows({ rows }: { rows: string[][] }) {
  return (
    <ul className="xp">
      {rows.map(([a, b, c]) => (
        <li key={a}>
          <span>{a}</span>
          <span>{b}</span>
          <span>{c}</span>
        </li>
      ))}
    </ul>
  );
}

export default function About() {
  return (
    <div className="wrap" id="top">
      <Header current="about" />
      <main>
        <h1 className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
          About Vasili Nikolopoulos
        </h1>
        <div className="about-intro">
          <p>
            I notice things others usually walk past such as awkward moments, tiny frustrations and subtle
            personality cues that reveal how people move through the world.
          </p>
          <p>
            Right now I’m a UI/UX Design Intern at Zovu, restructuring their hospitality platform and a UX
            Consultant at Pratt Institute’s Center for Digital Experiences working directly with external partners.
          </p>
        </div>

        <section className="table-row" aria-labelledby="xp-title">
          <h2 className="mono" id="xp-title" style={{ margin: 0, fontWeight: 400 }}>
            Experience
          </h2>
          <Rows rows={experience} />
        </section>

        <section className="table-row" aria-labelledby="edu-title">
          <h2 className="mono" id="edu-title" style={{ margin: 0, fontWeight: 400 }}>
            Education
          </h2>
          <Rows rows={education} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
