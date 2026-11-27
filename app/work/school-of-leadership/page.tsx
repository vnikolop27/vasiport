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


const pinsTop = [
  { n: 1, x: 96.5, y: 2.4 },
  { n: 2, x: 49.2, y: 2.4, a11y: true },
  { n: 3, x: 13.5, y: 47.5 },
  { n: 4, x: 83.5, y: 55.3, a11y: true },
  { n: 5, x: 75.5, y: 69.4 },
  { n: 6, x: 71.4, y: 85.3 },
];
const pinsBottom = [
  { n: 7, x: 40, y: 12.9, a11y: true },
  { n: 8, x: 13, y: 33.8 },
  { n: 8, x: 68.8, y: 71.5 },
  { n: 8, x: 64.5, y: 89 },
];
const notes = [
  { n: 1, t: "No “Apply” or “Partner with us” in the nav. “Community” is vague, and the partnership form is buried under it." },
  { n: 2, t: "Active nav link: #2456DA on #000063 is 2.9:1. WCAG AA needs 4.5:1.", a11y: true },
  { n: 3, t: "The first call to action leads to more reading, not a next step. The mission never says who SoL is for." },
  { n: 4, t: "“DOING.” #5799E2 on #C3ECFD is 2.4:1, under even the 3:1 large-text minimum.", a11y: true },
  { n: 5, t: "“Learn more” on every section. The site invites exploring, never acting." },
  { n: 6, t: "Twelve partner logos and no numbers: no alumni count, no outcomes." },
  { n: 7, t: "“HEART AND MIND.” #5798E3 on #E0FE90 is 2.7:1, another fail.", a11y: true },
  { n: 8, t: "Three more button styles for the same kind of action, in the bottom half alone." },
];
const fails = [
  { label: "Active nav link", fg: "#2456DA", bg: "#000063", ratio: "2.9:1", need: "4.5:1", text: "Home" },
  { label: "Section heading", fg: "#5799E2", bg: "#C3ECFD", ratio: "2.4:1", need: "3:1", text: "DOING." },
  { label: "Section heading", fg: "#5798E3", bg: "#E0FE90", ratio: "2.7:1", need: "3:1", text: "HEART AND MIND." },
];
const oldButtons = ["lime", "mint", "salmon", "sky", "peach", "signup", "gray"];

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
          Designing the About and Get in Touch pages for a youth leadership school, starting from a parent’s
          questions.
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
            <dd>User interviews, UI design, design systems</dd>
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
          <p className="mono">Problem</p>
          <div className="body">
            <h2>The old site looked alive but led nowhere.</h2>
            <p>
              Real photos and real people, but no way to act on them. Our team audited every page; these are the
              old homepage’s problems, with contrast measured from the live colors.
            </p>
          </div>
          <div className="wide">
            <div className="annot">
              <div className="annot-img">
                <img src="/work/sol/old-home-top.webp" alt="Old SoL homepage, top half: navy nav, hero photo, mission statement, Learn by Doing band, partner logos." width={1400} height={1619} loading="lazy" />
                {pinsTop.map((p) => (
                  <span key={`t${p.n}`} className={`pin${p.a11y ? " a11y" : ""}`} style={{ left: `${p.x}%`, top: `${p.y}%` }}>{p.n}</span>
                ))}
              </div>
              <div className="annot-img">
                <img src="/work/sol/old-home-bottom.webp" alt="Old SoL homepage, bottom half: Every journey band on lime, testimonial, community sign-up and footer." width={1400} height={1165} loading="lazy" />
                {pinsBottom.map((p, i) => (
                  <span key={`b${i}`} className={`pin${p.a11y ? " a11y" : ""}`} style={{ left: `${p.x}%`, top: `${p.y}%` }}>{p.n}</span>
                ))}
              </div>
            </div>
            <ol className="annot-notes">
              {notes.map((n) => (
                <li key={n.n} className={n.a11y ? "a11y" : ""}>
                  <span className={`pin static${n.a11y ? " a11y" : ""}`}>{n.n}</span>
                  <p>{n.t}</p>
                </li>
              ))}
            </ol>
            <p className="mono annot-key"><span className="pin static a11y">!</span> Red: fails WCAG 2.2 contrast</p>

            <div className="stats3">
              <div><b>2.4:1</b><span>Lowest contrast we measured. AA needs 4.5:1 for text, 3:1 for large text.</span></div>
              <div><b>18+</b><span>Button variations across the site, from the team’s UI inventory.</span></div>
              <div><b>0</b><span>Ways to apply or partner from the navigation.</span></div>
            </div>

            <div className="fails">
              {fails.map((f) => (
                <figure key={f.text} className="fail">
                  <div className="fail-swatch" style={{ background: f.bg, color: f.fg }}>{f.text}</div>
                  <figcaption>
                    <span className="mono">{f.label}</span>
                    <b>{f.ratio} <em>Fail</em></b>
                    <span className="mono">{f.fg} on {f.bg} · needs {f.need}</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <figure className="btn-strip">
              <div className="btn-row">
                {oldButtons.map((b) => (
                  <img key={b} src={`/work/sol/btn-${b}.webp`} alt="" height={56} loading="lazy" />
                ))}
              </div>
              <figcaption className="mono">Seven looks for “do something” on just two pages. Site-wide, the team counted 18+.</figcaption>
            </figure>
          </div>
        </section>

        <section className="row">
          <p className="mono">Ideation</p>
          <div className="body">
            <h2>How the team got there</h2>
            <p>
              The groundwork was shared. Harshita Dandu led the design system; I owned About us and Get in Touch.
            </p>
            <ol className="flow">
              <li><span className="mono">01</span><b>Site audit</b><p>Strong credibility signals, but built for exploring, not acting: no metrics, no partner path, “Learn More” everywhere.</p></li>
              <li><span className="mono">02</span><b>8 interviews</b><p>Students, parents, schools, companies and funders, each watched using the live site.</p></li>
              <li><span className="mono">03</span><b>Landscape audit</b><p>Four youth, mission-driven sites. They lead with story, clear value and action-first CTAs.</p></li>
              <li><span className="mono">04</span><b>Explore → Evaluate → Act</b><p>One architecture every audience moves through, from programs to proof to a next step.</p></li>
              <li><span className="mono">05</span><b>Four-item nav</b><p>Programs, About SOL, Get Involved, Stories, with Get in Touch kept visible on every page.</p></li>
              <li><span className="mono">06</span><b>Structure first</b><p>Lo-fi wireframes to agree on order and CTAs with the client before any visual style.</p></li>
              <li><span className="mono">07</span><b>Extract components</b><p>A UI inventory showed every page solving the same problem differently, with 18+ button variations. Stakeholders voted on one page to pilot a system on (below).</p></li>
            </ol>
            <div className="pgrid">
              <figure>
                <div className="shot"><img src="/work/sol/process-audit.webp" alt="Annotated audit of the old SoL site: green notes on credibility signals, red notes on repetitive Learn More CTAs and missing metrics." width={1191} height={670} loading="lazy" /></div>
                <figcaption className="mono">01 · Site audit</figcaption>
              </figure>
              <figure>
                <div className="shot"><img src="/work/sol/process-arch.webp" alt="System architecture: users flow into SOL, then Programs, Mentors, Impact, Community, Application Journey and Partner with us, along an Explore, Evaluate, Act scale." width={951} height={681} loading="lazy" /></div>
                <figcaption className="mono">04 · Explore → Evaluate → Act</figcaption>
              </figure>
              <figure>
                <div className="shot"><img src="/work/sol/process-ia.webp" alt="Information architecture tree: Home, Programs, About SOL, Stories, Get Involved, Get in Touch, language toggle and footer." width={1457} height={658} loading="lazy" /></div>
                <figcaption className="mono">05 · Information architecture</figcaption>
              </figure>
              <figure>
                <div className="shot"><img src="/work/sol/process-lofi.webp" alt="Grayscale low-fidelity wireframes of the Programs, Corporate Leadership and About pages." width={1457} height={658} loading="lazy" /></div>
                <figcaption className="mono">06 · Lo-fi wireframes</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="row">
          <p className="mono">Pilot</p>
          <div className="body">
            <h2>Proving the system on one page first.</h2>
            <p>
              The team pitched a full design system. The founder wasn’t ready to commit to building a system before
              seeing pages, so Harshita ran a workshop with design, engineering, content and the founder to vote on
              the highest-impact page. The homepage won, and became the pilot: start small, prove value, then scale.
            </p>
            <figure style={{ margin: "8px 0 8px" }}>
              <div className="shot">
                <img src="/work/sol/pilot-scoring.webp" alt="System pilot scoring table: Homepage, Programs, About us, Corporate partnership and Individual program pages scored on business impact, technical feasibility, marketing potential, common component potential, common pattern potential and scope. Homepage averages 7.8, the highest." width={1764} height={1066} loading="lazy" />
              </div>
              <figcaption className="mono">The pilot vote · each page scored 1–10 on six criteria</figcaption>
            </figure>
            <p>
              We scored five candidate pages on six criteria. The homepage came out on top (7.8) mostly because it
              shares more components with the rest of the site than any other page (9/10): fix it, and you fix pieces
              of every page. My About us page scored lowest (5.0), so instead of piloting the system, it was built
              from the parts the pilot produced.
            </p>
            <p>
              Patterns the pilot repeated became components with documented states. Those components then carried
              over to the rest of the site, including my About us and Get in Touch pages.
            </p>
            <div className="before-after">
              <figure>
                <div className="ba-box">
                  <div className="btn-row small">
                    {oldButtons.map((b) => (
                      <img key={b} src={`/work/sol/btn-${b}.webp`} alt="" height={36} loading="lazy" />
                    ))}
                  </div>
                </div>
                <figcaption className="mono">Before · 18+ button variations</figcaption>
              </figure>
              <span className="ba-arrow" aria-hidden="true">→</span>
              <figure>
                <div className="ba-box">
                  <img src="/work/sol/pilot-buttons.webp" alt="Two button components: a primary blue button and an underlined secondary link, each with default and hover states." width={498} height={166} loading="lazy" style={{ maxWidth: 300 }} />
                </div>
                <figcaption className="mono">After · 2 components, default + hover</figcaption>
              </figure>
            </div>
            <figure style={{ marginTop: 24 }}>
              <div className="shot scroller" tabIndex={0}>
                <img src="/work/sol/new-home-full.webp" alt="The pilot homepage: blue hero, three pathway cards, who we are, impact numbers on cyan, testimonials, partner logos, stories, and a get-in-touch form." width={1200} height={4958} loading="lazy" />
              </div>
              <figcaption className="mono">The pilot · new homepage · scroll inside</figcaption>
            </figure>
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
            <div className="obs sticky">
              <figure>
                <blockquote>Asked to reach out, she found a form asking for personal details with no reply time, and said she’d rather email or WhatsApp.</blockquote>
                <figcaption className="mono">Parent of a high schooler · my session</figcaption>
              </figure>
              <figure>
                <blockquote>“I am trying to find a way to contact the association but I can’t seem to find it.”</blockquote>
                <figcaption className="mono">International school director · team session</figcaption>
              </figure>
              <figure>
                <blockquote>“Needs more CTA. If people don’t pay attention, they might lose something and don’t know where to go.”</blockquote>
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
                  <h3>Designed About us to answer “is this real?”</h3>
                </div>
                <p>
                  The whole page, top to bottom: a mission people get in one line, an origin story with a timeline from
                  Bangkok to six countries, real photos instead of stock imagery, the people behind SoL, and the proof that
                  was missing before (alumni, mentors, partners and countries) on the cyan SOL Collective band.
                </p>
                <figure>
                  <div className="shot scroller" tabIndex={0}>
                    <img
                      src="/work/sol/about-full.webp"
                      alt="The full About us page: mission hero, origin story with timeline, values, team, the SOL Collective stats on cyan, who we work with, a closing call to action and footer."
                      width={1200}
                      height={5135}
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mono">The full About us page · scroll inside</figcaption>
                </figure>
              </li>
              <li>
                <div className="step-head">
                  <span className="mono">02</span>
                  <h3>Turned Get in Touch from a blank box into a clear path.</h3>
                </div>
                <p>
                  The first version was a generic form. The next added a topic so messages reach the right person,
                  then a notice setting expectations. The final version answers the parent directly: the email address
                  comes first, one click to copy, and the form becomes a short backup that promises a reply.
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
                      <img src="/work/sol/git-v3.webp" alt="Third version: a 'Before you get in touch, please be advised' box listing requests SoL can't respond to, next to the form." width={900} height={777} loading="lazy" />
                    </div>
                    <figcaption className="mono">v3 · Expectations set first</figcaption>
                  </figure>
                </div>
                <figure style={{ marginTop: 20 }}>
                  <div className="shot">
                    <img
                      src="/work/sol/git-final.webp"
                      alt="Final Get in Touch page on a cyan (#99D9F7) panel: 'Via email' with the address in a copy button, then 'Or enquiry' with name, email, 'You are a…' and message fields and a Submit button."
                      width={1100}
                      height={1144}
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mono">Final · Email first, form as backup · #99D9F7</figcaption>
                </figure>
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
          <p className="mono">Next</p>
          <div className="body">
            <h2>What I’d measure next.</h2>
            <p>
              How many Get in Touch messages arrive by topic, and how many people who start the form finish it.
              And whether About us visitors go on to explore programs, which would show the page is doing its job
              of building trust.
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
