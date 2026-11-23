import { LINKEDIN_URL } from "@/lib/site";

export default function Footer({ connect = true }: { connect?: boolean }) {
  return (
    <>
      {connect && (
      <section className="connect" aria-labelledby="connect-title">
        <p className="mono">Let’s connect</p>
        <div>
          <h2 id="connect-title">Have something in mind?</h2>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            Find me on LinkedIn →
          </a>
        </div>
      </section>
      )}
      <footer className="site mono">
        <span>© {new Date().getFullYear()} Vasilios Nikolopoulos</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
