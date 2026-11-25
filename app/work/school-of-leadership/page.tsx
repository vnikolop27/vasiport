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
          Designing the About and Get in Touch pages for a youth leadership school, and the reusable components
          behind them.
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
            <dd>User interviews, UI design, component design</dd>
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
              <li><span className="mono">07</span><b>Extract components</b><p>A UI inventory showed every page solving the same problem differently. Stakeholders voted on the highest-impact page to pilot a system, then repeated patterns became components with documented states.</p></li>
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
                <blockquote>“I am trying to find a way to contact the association but I can’t seem to find it.”</blockquote>
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
                  <h3>Turned my pages into reusable parts.</h3>
                </div>
                <p>
                  Instead of drawing each screen by hand, I built the pieces my pages repeat as components with
                  states, on top of the palette and type scale the team agreed on. Anyone on the team could drop them
                  into another page and get the same behavior.
                </p>
                <div className="kit">
                  <div className="kit-item kit-wide">
                    <p className="mono kit-label">Topic dropdown · 9 variants</p>
                    <div className="dd-row">
                      <div className="dd-state">
                        <div className="dd"><span className="ph-t">Select a topic</span><i /></div>
                        <span className="mono">Empty</span>
                      </div>
                      <div className="dd-state">
                        <div className="dd open"><span className="ph-t">Select a topic</span><i /></div>
                        <ul className="dd-menu">
                          <li>Student Programs</li>
                          <li className="hov">Parent Questions</li>
                          <li>Partnerships &amp; Collaboration</li>
                          <li>Volunteer Opportunities</li>
                          <li>Events &amp; Workshops</li>
                          <li>Other</li>
                          <li>Feedback</li>
                        </ul>
                        <span className="mono">Open</span>
                      </div>
                      <div className="dd-state">
                        <div className="dd"><span>Parent Questions</span><i /></div>
                        <span className="mono">Selected · one per topic</span>
                      </div>
                    </div>
                    <p className="kit-note">
                      Routes each message to the right person, so a parent’s question doesn’t land in the same pile as
                      a sponsorship pitch.
                    </p>
                  </div>
                  <div className="kit-item">
                    <p className="mono kit-label">Impact card</p>
                    <div className="impact-row">
                      <div className="impact"><b>100+</b><span>Alumni across the globe</span></div>
                      <div className="impact"><b>6</b><span>Countries reached</span></div>
                    </div>
                    <p className="kit-note">One card, any number. Built for the proof parents asked for, reusable anywhere SoL shows results.</p>
                  </div>
                  <div className="kit-item">
                    <p className="mono kit-label">Calls to action · default / hover</p>
                    <div className="cta-row">
                      <span className="cta">Share your own story</span>
                      <span className="cta hover">Share your own story →</span>
                    </div>
                    <div className="cta-row">
                      <span className="cta2">Explore programs</span>
                      <span className="cta2 hover">Explore programs →</span>
                    </div>
                    <p className="kit-note">The old site had too few next steps. These give every section one clear action.</p>
                  </div>
                  <div className="kit-item kit-wide">
                    <p className="mono kit-label">Expectation notice</p>
                    <div className="notice">
                      <b>Before you get in touch, please be advised</b>
                      <span>Tells people what SoL can and can’t respond to, before they write.</span>
                    </div>
                  </div>
                </div>
                <figure style={{ marginTop: 20 }}>
                  <div className="shot palette">
                    {palette.map((c) => (
                      <div key={c.hex}>
                        <span style={{ background: c.hex }} />
                        <b>{c.name}</b>
                        <i>{c.hex}</i>
                      </div>
                    ))}
                  </div>
                  <figcaption className="mono">Palette the components use, decided as a team</figcaption>
                </figure>
                <p style={{ marginTop: 18 }}>
                  For how the full system came together, see{" "}
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
