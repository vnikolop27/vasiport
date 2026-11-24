import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GooglyEyes from "@/components/GooglyEyes";
import Playground from "@/components/Playground";
import { projects, type Project } from "@/lib/projects";

function Card({ p, index }: { p: Project; index: number }) {
  const inner = (
    <>
      <div className="thumb" style={{ background: p.tint }}>
        {p.peek ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="peek"
            src={p.peek.src}
            alt=""
            width={988}
            height={948}
            style={{ left: p.peek.left, top: p.peek.top, width: p.peek.width }}
          />
        ) : p.frame ? (
          <span className="frame-in" style={{ left: p.frame.left, top: p.frame.top }}>
            {p.frame.src && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.frame.src} alt="" width={1000} height={634} />
            )}
          </span>
        ) : p.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.thumbnail} alt="" width={1140} height={836} />
        ) : (
          <span className="ph">{p.inProgress ? "Work in progress" : "Thumbnail"}</span>
        )}
      </div>
      <div className="card-title">
        <span className="num">{String(index + 1).padStart(2, "0")}</span>
        <h3>{p.title}</h3>
        {p.inProgress ? <span className="status">In progress</span> : <span className="arrow" aria-hidden="true">→</span>}
      </div>
      <p className="card-sub">{p.subtitle}</p>
      <div className="card-tags">
        {p.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </>
  );

  return p.href && !p.inProgress ? (
    <Link className="card" href={p.href}>
      {inner}
    </Link>
  ) : (
    <div className="card" aria-label={`${p.title}, in progress`}>
      {inner}
    </div>
  );
}

export default function Home() {
  return (
    <div className="wrap" id="top">
      <Header />
      <main>
        <div className="intro-row">
          <h1 className="intro">
            Vasili is a UX and Product Designer. With a background in Visual Arts he learned to look beyond the
            obvious, and pay attention to the details that shape digital experiences
          </h1>
          <span className="eyes" aria-hidden="true">
            <GooglyEyes />
          </span>
        </div>

        <section className="work" id="work" aria-labelledby="work-title">
          <h2 className="label" id="work-title">
            Selected work
          </h2>
          <div className="grid">
            {projects.map((p, i) => (
              <Card key={p.slug} p={p} index={i} />
            ))}
          </div>
        </section>

        <section className="playground" aria-labelledby="pg-title">
          <h2 className="label" id="pg-title">
            Playground
          </h2>
          <Playground />
        </section>
      </main>
      <Footer />
    </div>
  );
}
