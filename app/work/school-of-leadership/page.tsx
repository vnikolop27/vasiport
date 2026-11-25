import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "School of Leadership",
  description:
    "Designing the About and Get in Touch pages for a youth leadership school, starting from a parent's questions.",
};

const heard = [
  {
    theme: "Finding programs",
    notes: [
      { text: "Word of mouth and personal networks come first", key: false },
      { text: "Online research only plays a supporting role", key: false },
    ],
  },
  {
    theme: "Deciding to trust",
    notes: [
      { text: "No past projects, outcomes or testimonials makes value hard to judge", key: true },
      { text: "Showing real work builds trust", key: true },
      { text: "If the first screen doesn’t land, they won’t scroll", key: false },
    ],
  },
  {
    theme: "Reaching out",
    notes: [
      { text: "A form with no guaranteed reply feels like a dead end", key: true },
      { text: "Prefers direct channels like email or WhatsApp", key: false },
    ],
  },
  {
    theme: "What matters",
    notes: [
      { text: "Overall growth (resilience, teamwork, empathy) over grades", key: false },
      { text: "A clear starting point, with flexibility along the way", key: false },
    ],
  },
];

const palette = [
  { name: "Primary 900", hex: "#0A1642" },
  { name: "Primary 700", hex: "#1E3486" },
  { name: "Primary 500", hex: "#324CD5" },
  { name: "Primary 300", hex: "#8494E5" },
  { name: "Primary 100", hex: "#D6DCF6" },
  { name: "Pink 300", hex: "#FFCCD9" },
  { name: "Yellow 300", hex: "#FFE699" },
  { name: "Cyan 300", hex: "#99D9F7" },
  { name: "Neutral 900", hex: "#1A1A1A" },
  { name: "Neutral 50", hex: "#F5F5F5" },
];

/* eslint-disable @next/next/no-img-element */
export default function SchoolOfLeadership() {
  return (
    <div className="wrap cs" id="top">
      <Header />
      <main id="content">
        <Link className="back mono" href="/#work">
          ← Selected work
        </Link>
        <h1>School of Leadership</h1>
        <p className="lede">
          People couldn’t figure out how to reach a youth leadership school. I redesigned its About and Get in
          Touch pages, then tested the contact path against the old site.
        </p>

        <dl className="meta">
          <div>
            <dt className="mono">Product</dt>
            <dd>Website redesign: About us &amp; Get in Touch</dd>
          </div>
          <div>
            <dt className="mono">Role</dt>
            <dd>UX Designer</dd>
          </div>
          <div>
            <dt className="mono">Tools</dt>
            <dd>Figma, FigJam</dd>
          </div>
          <div>
            <dt className="mono">Skills</dt>
            <dd>User interviews, usability testing, UI design</dd>
          </div>
        </dl>

        <figure style={{ marginTop: 40 }}>
          <div className="shot">
            <img
              src="/work/sol/about-hero.webp"
              alt="About us page hero: 'Our mission is to build the next generation of impact leaders' over a photo of a student writing on an SOL card."
              width={1400}
              height={749}
            />
          </div>
          <figcaption className="mono">About us, final design</figcaption>
        </figure>

        <section className="row">
          <p className="mono">Context</p>
          <div className="body">
            <p>
              School of Leadership (SoL) runs leadership programs in Bangkok for young people, schools and
              companies. Its website was hard to act on: wordy pages, no proof of past work, and no clear way to
              apply or reach out.
            </p>
            <p>
              As part of a student design team, we redesigned the site. The team interviewed eight people across
              SoL’s audiences. I interviewed the parent of a high schooler, then designed the About us and Get in
              Touch pages.
            </p>
          </div>
        </section>

        <section className="row">
          <p className="mono">Research</p>
          <div className="body">
            <h2>What I heard</h2>
            <p>From my interview with the parent of a high schooler. Parents often decide, or help decide, whether a student joins.</p>
            <figure>
              <div className="shot affinity">
                {heard.map((c) => (
                  <div className="cluster" key={c.theme}>
                    <h4 className="mono">{c.theme}</h4>
                    <ul>
                      {c.notes.map((n) => (
                        <li className={`note${n.key ? " key" : ""}`} key={n.text}>
                          <p>{n.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <figcaption className="mono legend2">
                <span>
                  <span className="dot"></span>Shaped my pages
                </span>
              </figcaption>
            </figure>
            <h3 style={{ marginTop: 36 }}>What the old site showed</h3>
            <p>Our team’s usability sessions on the existing site kept hitting the same wall: getting in touch.</p>
            <div className="obs">
              <figure>
                <blockquote>Asked to reach out, she found a form asking for personal details with no reply time, and said she’d rather email or WhatsApp.</blockquote>
                <figcaption className="mono">Parent of a high schooler · my session</figcaption>
              </figure>
              <figure>
                <blockquote>“I am trying to find a way to contact the association but I can’t.”</blockquote>
                <figcaption className="mono">International school director · team session</figcaption>
              </figure>
              <figure>
                <blockquote>Said the site needs more calls to action: skim it and you don’t know where to go next.</blockquote>
                <figcaption className="mono">Same director, wrap-up</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="row">
          <p className="mono">Process</p>
          <div className="body">
            <h2>What I designed</h2>
            <ol className="steps">
              <li>
                <div className="step-head">
                  <span className="mono">01</span>
                  <h3>Made About us answer “is this real?”</h3>
                </div>
                <p>
                  A short origin story with a timeline from Bangkok to six countries, a real photo from an Impact
                  Leaders retreat instead of stock imagery, and the proof that was missing before: alumni, mentors, partners and countries, in numbers.
                </p>
                <figure>
                  <div className="shot">
                    <img
                      src="/work/sol/about-story.webp"
                      alt="'Where we started' section: origin story, group photo from the Impact Leaders Retreat Bangkok 2024, and a numbered timeline."
                      width={1400}
                      height={1014}
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mono">Our story and timeline</figcaption>
                </figure>
                <figure style={{ marginTop: 20 }}>
                  <div className="shot">
                    <img
                      src="/work/sol/about-impact.webp"
                      alt="'The SOL Collective' section with four stat cards: 100+ alumni, 40+ mentors and instructors, 40+ partner organizations, 6 countries."
                      width={1400}
                      height={607}
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mono">Proof in numbers</figcaption>
                </figure>
              </li>
              <li>
                <div className="step-head">
                  <span className="mono">02</span>
                  <h3>Turned Get in Touch from a blank box into a clear path.</h3>
                </div>
                <p>
                  The first version was a generic form. The next added a topic so messages reach the right
                  person. The final version also tells people up front what SoL can’t respond to, so nobody waits
                  on a reply that won’t come.
                </p>
                <div className="versions">
                  <figure>
                    <div className="shot">
                      <img src="/work/sol/git-v1.webp" alt="First version: plain name, email, phone and message form." width={900} height={625} loading="lazy" />
                    </div>
                    <figcaption className="mono">v1 · Generic form</figcaption>
                  </figure>
                  <figure>
                    <div className="shot">
                      <img src="/work/sol/git-v2.webp" alt="Second version: adds a Topic dropdown and a +66 country code." width={900} height={822} loading="lazy" />
                    </div>
                    <figcaption className="mono">v2 · Routed by topic</figcaption>
                  </figure>
                  <figure>
                    <div className="shot">
                      <img src="/work/sol/git-v3.webp" alt="Final version: a 'Before you get in touch, please be advised' box listing requests SoL can't respond to, next to the form." width={900} height={777} loading="lazy" />
                    </div>
                    <figcaption className="mono">Final · Expectations set first</figcaption>
                  </figure>
                </div>
              </li>
              <li>
                <div className="step-head">
                  <span className="mono">03</span>
                  <h3>Built on a shared system.</h3>
                </div>
                <p>
                  The team agreed on one palette and type scale, so every page reads as one SoL: blues for actions,
                  warm accents for highlights, Please Display for headlines and Rethink Sans for body text.
                </p>
                <figure>
                  <div className="shot palette">
                    {palette.map((c) => (
                      <div key={c.hex}>
                        <span style={{ background: c.hex }} />
                        <b>{c.name}</b>
                        <i>{c.hex}</i>
                      </div>
                    ))}
                  </div>
                  <figcaption className="mono">Color palette, decided as a team</figcaption>
                </figure>
                <figure style={{ marginTop: 20 }}>
                  <div className="shot">
                    <img src="/work/sol/type.webp" alt="Type scale: Please Display VF headers 1 to 3, and Rethink Sans body styles." width={1380} height={520} loading="lazy" />
                  </div>
                  <figcaption className="mono">Type scale</figcaption>
                </figure>
                <p style={{ marginTop: 18 }}>
                  For how the team turned this into reusable components, see{" "}
                  <a href="https://www.harshitadandu.com/soldesignsystem" target="_blank" rel="noreferrer">
                    Harshita Dandu’s design system case study
                  </a>
                  .
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="row">
          <p className="mono">Testing</p>
          <div className="body">
            <h2>Did it work?</h2>
            <p>
              I gave <span className="tbd">5</span> parents of teens the same task on the old site and the redesign:
              “You want to ask whether your 15-year-old can join a program. Get in touch.”
            </p>
            <table className="results">
              <thead>
                <tr>
                  <th className="mono"></th>
                  <th className="mono">Old site</th>
                  <th className="mono">Redesign</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Found how to get in touch</td>
                  <td><span className="tbd">_/5</span></td>
                  <td><b><span className="tbd">_/5</span></b></td>
                </tr>
                <tr>
                  <td>Picked the right topic first try</td>
                  <td className="na">No topic field</td>
                  <td><b><span className="tbd">_/5</span></b></td>
                </tr>
                <tr>
                  <td>Median time to send a message</td>
                  <td><span className="tbd">_ s</span></td>
                  <td><b><span className="tbd">_ s</span></b></td>
                </tr>
                <tr>
                  <td>Knew what reply to expect</td>
                  <td><span className="tbd">_/5</span></td>
                  <td><b><span className="tbd">_/5</span></b></td>
                </tr>
              </tbody>
            </table>
            <p style={{ marginTop: 18 }}>
              <span className="tbd">One or two sentences: the biggest change you saw, and one thing that still tripped people up.</span>
            </p>
          </div>
        </section>

        <section className="row">
          <p className="mono">Learned</p>
          <div className="body">
            <h2>What I learned.</h2>
            <p className="tbd">
              Draft, rewrite after testing: A contact page is a promise. People didn’t mind filling in a form; they minded not knowing if anyone would
              answer. Saying up front what happens next did more than any visual change.
            </p>
          </div>
        </section>

<div className="next" style={{ cursor: "default" }}>
          <span>
            <span className="mono" style={{ color: "var(--muted)" }}>
              Next
            </span>
            <br />
            <Link className="t" href="/work/hellas-direct" style={{ textDecoration: "none" }}>
              Hellas Direct →
            </Link>
          </span>
        </div>
      </main>
      <Footer connect={false} />
    </div>
  );
}
