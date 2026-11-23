import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hellas Direct",
  description: "Moving the services people come back for out of the footer and into the main navigation.",
};

/* eslint-disable @next/next/no-img-element */
export default function HellasDirect() {
  return (
    <div className="wrap" id="top">
      <Header />
      <main id="content">

    <Link className="back mono" href="/#work">← Selected work</Link>
    <h1>Hellas Direct</h1>
    <p className="lede">Moving the services people come back for out of the footer and into the main navigation.</p>

    <dl className="meta">
      <div><dt className="mono">Product</dt><dd>Hellas Direct/ Insurance website, homepage &amp; navigation</dd></div>
      <div><dt className="mono">Role</dt><dd>Product Design Intern, with the Design Lead</dd></div>
      <div><dt className="mono">Tools</dt><dd>Figma, Google Analytics</dd></div>
      <div><dt className="mono">Skills</dt><dd>Competitive analysis, product audit, information architecture</dd></div>
    </dl>

    <div className="stats">
      <div className="stat"><b>+15%</b><span className="mono">Navigation success (Google Analytics)</span></div>
      <div className="stat"><b>7</b><span className="mono">Competitors analyzed</span></div>
      <div className="stat"><b>2</b><span className="mono">Menu groups I designed, live on the site today</span></div>
    </div>

    <section className="row">
      <p className="mono">Context</p>
      <div className="body">
        <p>Hellas Direct is a digital insurer in Greece selling car, motorcycle and home cover online. I joined as a product design intern and worked with the Design Lead on the homepage.</p>
      </div>
    </section>

    <section className="row">
      <p className="mono">Before</p>
      <div className="body">
        <h2>What I found</h2>
        <p>The top menu only listed products: Car, Motorcycle, Home, wallet+. Everything customers come back for after buying, like claims, FlexiPay instalments, Fast Track, partner garages and payment help, was in the footer.</p>
        <figure>
          <div className="shot"><img src="/work/hellas/before-nav.webp" alt="Old Hellas Direct header: Help center and Claims in a top bar; main menu Car, Motorcycle, Home, wallet+." width="1240" height="130" /></div>
          <figcaption className="mono">Header, June 2025</figcaption>
        </figure>
        <figure style={{marginTop:20}}>
          <div className="shot"><img src="/work/hellas/before-footer.webp" alt="Old footer columns: Car, Home, Wallet+, Services (claims, offers, Fast Track, FlexiPay, payment methods, Help Center) and Info." width="820" height="300" /></div>
          <figcaption className="mono">Footer, June 2025: services only lived here</figcaption>
        </figure>
      </div>
    </section>

    <section className="row">
      <p className="mono">Process</p>
      <div className="body">
        <h2>What I did</h2>
        <ol className="steps">
          <li>
            <div className="step-head"><span className="mono">01</span><h3>Audited seven competitors.</h3></div>
            <p>Hellas Direct against State Farm, Progressive, Lemonade, Allianz, Interamerican, Intersalonica and Ethniki Asfalistiki. Strengths, weaknesses, opportunities and threats for each. Four patterns shaped the menu:</p>
            <ul className="findings">
              <li><span>No self-service section meant contact forms for everything</span><span>Give services their own group</span></li>
              <li><span>Overlapping menus repeated the same links</span><span>Keep groups separate, one home per link</span></li>
              <li><span>Jargon overwhelmed first-time users</span><span>Plain-language help in one place</span></li>
              <li><span>Coverage organized by what's insured was easy to scan</span><span>Group insurance by product</span></li>
            </ul>
<div className="ca-takeaway">
              <b>6 of 8</b>
              <span>insurers faced the same threat: competitors with smoother onboarding.</span>
            </div>
            <figure>
              <div className="shot affinity"><div className="cluster"><h4 className="mono">First-time users</h4><ul><li className="note key"><p>Jargon overwhelms newcomers</p><span className="who">State Farm · Progressive</span></li><li className="note"><p>No guidance on which plan fits</p><span className="who">Ethniki</span></li><li className="note"><p>Little inline help for terms</p><span className="who">Interamerican</span></li><li className="note pos"><p>Plain language</p><span className="who">Interamerican</span></li></ul></div><div className="cluster"><h4 className="mono">Self-service</h4><ul><li className="note key"><p>No self-service, contact form only</p><span className="who">Allianz</span></li><li className="note"><p>No online quote</p><span className="who">Intersalonica · Ethniki</span></li><li className="note"><p>Too many steps to a quote</p><span className="who">State Farm</span></li><li className="note pos"><p>Instant quote calculator</p><span className="who">Interamerican</span></li></ul></div><div className="cluster"><h4 className="mono">Structure</h4><ul><li className="note key"><p>Menus overlap and repeat links</p><span className="who">Ethniki</span></li><li className="note key pos"><p>Organized by type of vehicle</p><span className="who">Intersalonica</span></li><li className="note pos"><p>Clear, concise coverage sections</p><span className="who">Allianz</span></li><li className="note"><p>Relies on PDFs and text</p><span className="who">Intersalonica</span></li></ul></div><div className="cluster"><h4 className="mono">Look and feel</h4><ul><li className="note"><p>Dated visuals</p><span className="who">State Farm · Progressive · Interamerican · Intersalonica</span></li><li className="note"><p>Static, little interactivity</p><span className="who">Progressive · Allianz · Interamerican · Ethniki</span></li><li className="note pos"><p>Engaging animation, playful brand</p><span className="who">Lemonade</span></li></ul></div></div>
              <figcaption className="mono legend2"><span><span className="dot"></span>Shaped the menu</span><span><span className="sw pos"></span>Strength</span><span><span className="sw"></span>Weakness</span></figcaption>
            </figure>
          </li>
          <li>
            <div className="step-head"><span className="mono">02</span><h3>Grouped the menu by what people come to do.</h3></div>
            <p>Insurance for buying cover. Services for managing it. Info for getting help.</p>
            <figure>
              <div className="shot pad"><img src="/work/hellas/concept-menu.webp" alt="Proposed menu: Insurance (Home, Car, Motorcycle, Trailer), Info (Partner Garages, ENFIA, Help Center, Payment Methods), Services (Flexipay, Fast Track, Offers & Partnerships, Refer a friend)." width="608" height="263" /></div>
              <figcaption className="mono">Proposed menu</figcaption>
            </figure>
          </li>
          <li>
            <div className="step-head"><span className="mono">03</span><h3>Simplified the header around it.</h3></div>
            <p>One Insurance dropdown and Claims one click away, instead of a row of product links.</p>
            <figure>
              <div className="shot"><img src="/work/hellas/concept-nav.webp" alt="Proposed header: Insurance dropdown, Claims, wallet+, About us." width="1320" height="160" /></div>
              <figcaption className="mono">Proposed header</figcaption>
            </figure>
          </li>
        </ol>
      </div>
    </section>

    <section className="row">
      <p className="mono">Outcome</p>
      <div className="body">
        <h2>What shipped</h2>
        <p>The Info and Services groups went live almost as designed. The team adapted the rest.</p>
        <div className="compare">
          <figure>
            <div className="shot menu">
              <div><h4>Insurance</h4><ul><li>Home</li><li>Car</li><li>Motorcycle</li><li>Trailer</li></ul></div>
              <div><h4>Info</h4><ul><li>Partner Garages</li><li>ENFIA</li><li>Help Center</li><li>Payment Methods</li></ul></div>
              <div><h4>Services</h4><ul><li>Flexipay</li><li>Fast Track</li><li>Offers &amp; Partnerships</li><li>Refer a friend</li></ul></div>
            </div>
            <figcaption className="mono">Proposed</figcaption>
          </figure>
          <figure>
            <div className="shot menu">
              <div><h4 className="new">Vehicle</h4><ul><li>Car</li><li>Bike</li><li>Trailer</li><li>Truck &amp; Van</li></ul><h4 className="new" style={{marginTop:12}}>Home</h4><ul><li>Home</li><li>ENFIA</li></ul></div>
              <div><h4>Info</h4><ul><li>Partner garages</li><li>Help Center</li><li>Payment methods</li></ul></div>
              <div><h4>Services</h4><ul><li className="new">Claims</li><li>FlexiPay car / bike</li><li>Fast Track</li><li>Offers &amp; Partnerships</li></ul></div>
            </div>
            <figcaption className="mono">Live today</figcaption>
          </figure>
        </div>
        <p className="legend mono"><span><i></i>Changed by the team</span></p>
        <div className="changes">
          <div className="change"><span className="before">One Insurance group</span><span className="arrow">→</span><span>Split into Vehicle and Home</span></div>
          <div className="change"><span className="before">ENFIA under Info</span><span className="arrow">→</span><span>Moved under Home</span></div>
          <div className="change"><span className="before">Claims as its own link</span><span className="arrow">→</span><span>Added to Services</span></div>
        </div>
      </div>
    </section>

    <section className="row">
      <p className="mono">Reflection</p>
      <div className="body">
        <h2>What I learned.</h2>
        <p>Good structure survives handoff. The team changed my labels and split one group, but the idea underneath, organizing by what people come to do, shipped intact.</p>
        <p>Next time I'd run a tree test on the live menu to see whether first-time visitors find Claims and FlexiPay without help. Compare my single Insurance menu with the team's Vehicle and Home split, since both are easy to test. And bring the plain-language thinking from the analysis into the help pages, where jargon still lives.</p>
      </div>
    </section>

    
        <div className="next" style={{ cursor: "default" }}>
          <span>
            <span className="mono" style={{ color: "var(--muted)" }}>Next</span>
            <br />
            <span className="t">ZOVU</span>
          </span>
          <span className="status">In progress</span>
        </div>
      </main>
      <Footer connect={false} />
    </div>
  );
}
