import Link from "next/link";
import { LINKEDIN_URL, RESUME_URL } from "@/lib/site";

// "V logo" component from Figma, exported as SVG. Colour follows CSS (currentColor).
function Logo() {
  return (
    <svg viewBox="0 0 99 80" fill="none" aria-hidden="true">
      <path
        d="M5.46298 18.3688C5.46298 18.3688 5.43207 19.2688 6.53207 20.227C7.53207 20.8797 9.46298 20.9815 10.7957 18.487C13.4612 13.4942 13.5575 0.0251445 19.3212 7.83787C25.0848 15.6506 27.7084 69.0906 27.7084 69.0906C27.7084 69.0906 38.7612 14.3561 44.7648 7.90151C50.0848 2.85605 58.3321 6.19605 57.5575 13.3651C56.7284 21.0415 49.0284 19.5451 49.0284 19.5451C49.0284 19.5451 51.4266 24.0997 52.2266 35.3361C53.0266 46.5706 52.2266 68.7742 52.2266 68.7742C52.2266 68.7742 56.7557 31.5597 61.2284 24.8779C65.7012 18.1942 71.1939 18.9233 73.8321 19.4633C76.4684 20.0051 84.7393 22.9415 83.7339 37.5106C82.7284 52.0797 83.0248 62.0633 87.3339 66.3833C91.6448 70.7033 92.7357 63.6761 92.7357 63.6761"
        stroke="currentColor"
        strokeWidth="5.45455"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header({ current }: { current?: "about" }) {
  return (
    <header className="site">
      <Link className="logo" href="/" aria-label="Vasili Nikolopoulos, home">
        <Logo />
      </Link>
      <nav className="top" aria-label="Main">
        <Link href="/about" aria-current={current === "about" ? "page" : undefined}>
          About
        </Link>
        <a href={RESUME_URL} target="_blank" rel="noreferrer">
          Resume
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </nav>
    </header>
  );
}
