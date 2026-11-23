/**
 * Playground — a tiny soccer game for the portfolio home page.
 *
 * The cursor becomes a cleat. Click (or tap) to kick: if the toe is close to
 * the ball, it flies away from the cleat. Walking the cleat into the ball
 * nudges it along, so you can dribble into position and then shoot.
 * Score in the goal on the right. Keyboard: focus the pitch and press Enter/Space to shoot.
 *
 * Framework-agnostic: createPlayground(element) builds everything inside the
 * element and returns { destroy }. The React wrapper (Playground.tsx) just
 * calls this in useEffect.
 */

const COLORS = {
  outline: "#5bb96e", // pitch outline (Figma)
  line: "#85a463", // centre line + circle (Figma)
  ink: "#20211e", // body text colour
  muted: "#596154", // tag text colour
};

const BOOT_SVG = `
<svg class="pg-boot-svg" width="48" height="32" viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
  <!-- upper: high heel counter, low collar, sloping vamp to a rounded toe -->
  <path d="M3 9.5C3 7 4.6 5.5 7 5.5h7.2c1.6 3.4 4.5 5 8.6 5 5.4 0 10.6.9 15.3 2.9 4.2 1.8 6.9 4.6 6.9 8v1.4c0 1.3-1 2.2-2.3 2.2H5.2C3.9 25 3 24.1 3 22.8z"
        fill="${COLORS.ink}"/>
  <!-- laces -->
  <path d="M21.5 12.6l2.2 2.4M25.5 12.9l2.1 2.5M29.5 13.6l2 2.5M33.4 14.6l1.8 2.4"
        stroke="#f8f5f4" stroke-width="1.3" stroke-linecap="round"/>
  <!-- heel counter + sole edge -->
  <path d="M8.6 6.5c-.9 4.6-.5 9.6 1.4 14.4" stroke="#f8f5f4" stroke-width="1" opacity=".5" fill="none"/>
  <path d="M3.5 22.2h41" stroke="#f8f5f4" stroke-width="1.1" opacity=".55"/>
  <!-- studs -->
  <rect x="5" y="24.5" width="3.4" height="4.5" rx="1" fill="${COLORS.ink}"/>
  <rect x="12" y="24.5" width="3.4" height="4.5" rx="1" fill="${COLORS.ink}"/>
  <rect x="25" y="24.5" width="3.4" height="4.5" rx="1" fill="${COLORS.ink}"/>
  <rect x="32" y="24.5" width="3.4" height="4.5" rx="1" fill="${COLORS.ink}"/>
  <rect x="39" y="24.5" width="3.4" height="4.5" rx="1" fill="${COLORS.ink}"/>
</svg>`;
// The toe of the cleat is the "hot spot" that sits exactly on the pointer.
const BOOT_HOT = { x: 45, y: 20 };

const STYLE_ID = "pg-styles";
const CSS = `
.pg-root{position:relative;width:100%;aspect-ratio:1162/245;min-height:220px;user-select:none;-webkit-user-select:none;touch-action:pan-y;outline:none;overflow:hidden}
.pg-root:focus-visible{box-shadow:0 0 0 2px ${COLORS.outline}}
.pg-root.pg-fine{cursor:none}
.pg-canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.pg-hud{position:absolute;top:12px;right:calc(var(--pg-goal-depth,50px) + 14px);font-family:var(--pg-mono);font-size:11px;letter-spacing:.04em;text-transform:uppercase;color:${COLORS.muted};pointer-events:none}
.pg-hint{position:absolute;font-family:var(--pg-display);font-size:12px;color:#000;pointer-events:none;transition:opacity .4s ease}
.pg-goal{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;pointer-events:none;opacity:0}
.pg-goal b{font-family:var(--pg-display);font-weight:400;font-size:clamp(36px,6vw,64px);line-height:1;color:${COLORS.ink}}
.pg-goal span{font-family:var(--pg-mono);font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:${COLORS.muted}}
.pg-goal.pg-show{animation:pg-pop 1.6s ease forwards}
@keyframes pg-pop{0%{opacity:0;transform:scale(.85)}12%{opacity:1;transform:scale(1.04)}22%{transform:scale(1)}80%{opacity:1}100%{opacity:0}}
.pg-boot{position:absolute;left:0;top:0;pointer-events:none;opacity:0;transition:opacity .15s;will-change:transform}
.pg-boot.pg-visible{opacity:1}
.pg-boot-svg{display:block;transform-origin:9px 6px}
.pg-boot.pg-kick .pg-boot-svg{animation:pg-swing .2s ease-out}
@keyframes pg-swing{0%{transform:rotate(-38deg)}55%{transform:rotate(14deg)}100%{transform:rotate(0)}}
.pg-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
@media (prefers-reduced-motion: reduce){.pg-goal.pg-show{animation:pg-fade 1.6s linear forwards}.pg-boot.pg-kick .pg-boot-svg{animation:none}}
@keyframes pg-fade{0%,80%{opacity:1}100%{opacity:0}}
`;

export function createPlayground(root, opts = {}) {
  const displayFont = opts.displayFont || "'Instrument Sans', system-ui, sans-serif";
  const monoFont = opts.monoFont || "'DM Mono', ui-monospace, monospace";

  if (!document.getElementById(STYLE_ID)) {
    const s = document.createElement("style");
    s.id = STYLE_ID;
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  const finePointer = window.matchMedia("(pointer: fine)").matches;
  root.classList.add("pg-root");
  if (finePointer) root.classList.add("pg-fine");
  root.style.setProperty("--pg-display", displayFont);
  root.style.setProperty("--pg-mono", monoFont);
  root.tabIndex = 0;
  root.setAttribute("role", "application");
  root.setAttribute(
    "aria-label",
    "Mini soccer game. Click near the ball to kick it into the goal on the right, or press Enter to shoot."
  );
  root.innerHTML = `
    <canvas class="pg-canvas"></canvas>
    <div class="pg-hint">KICK IT!</div>
    <div class="pg-hud"><span class="pg-kicks">Kicks 0</span> &nbsp;·&nbsp; <span class="pg-goals">Goals 0</span></div>
    <div class="pg-goal" aria-hidden="true"><b>Goal!</b><span class="pg-goal-sub"></span></div>
    <div class="pg-boot" aria-hidden="true">${BOOT_SVG}</div>
    <div class="pg-sr" aria-live="polite"></div>`;

  const canvas = root.querySelector(".pg-canvas");
  const ctx = canvas.getContext("2d");
  const hintEl = root.querySelector(".pg-hint");
  const kicksEl = root.querySelector(".pg-kicks");
  const goalsEl = root.querySelector(".pg-goals");
  const goalEl = root.querySelector(".pg-goal");
  const goalSub = root.querySelector(".pg-goal-sub");
  const bootEl = root.querySelector(".pg-boot");
  const liveEl = root.querySelector(".pg-sr");

  // ---- geometry (recomputed on resize) ----
  let W = 0, H = 0, R = 22, G = 50, x0 = 0, x1 = 0, mTop = 0, mBot = 0;
  const ball = { x: 0, y: 0, vx: 0, vy: 0, angle: 0 };
  const firstPos = () => ({ x: W * 0.687, y: H * 0.54 }); // where the ball sits in Figma
  const centreSpot = () => ({ x: (x1 - x0) * 0.25, y: H * 0.5 }); // restart in your own half after a goal

  // ---- game state ----
  let kicks = 0, goals = 0, roundKicks = 0;
  let celebrating = false, celebrateTimer = 0, hintAlpha = 1, hintGone = false;

  // ---- pointer state ----
  const pointer = { x: 0, y: 0, px: 0, py: 0, inside: false, vx: 0, vy: 0, facing: 1 };
  const history = []; // recent {x,y,t} for velocity
  let lastKickAt = 0;

  function layout() {
    const rect = root.getBoundingClientRect();
    const prevW = W, prevH = H;
    W = rect.width; H = rect.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    R = Math.max(13, Math.min(22, H * 0.09));
    G = Math.round(R * 2 + 6); // goal depth: deep enough to hold the whole ball
    x0 = 0; x1 = W - G; // one goal, on the right
    const mouth = Math.min(H * 0.42, R * 4.8);
    mTop = H / 2 - mouth / 2; mBot = H / 2 + mouth / 2;
    root.style.setProperty("--pg-goal-depth", G + "px");

    if (!prevW) {
      Object.assign(ball, firstPos());
    } else {
      ball.x *= W / prevW; ball.y *= H / prevH;
    }
    // "KICK IT!" label sits where the dashed trail starts (as in Figma)
    hintEl.style.left = W * 0.213 + "px";
    hintEl.style.top = H * 0.84 + "px";
  }

  function local(e) {
    const r = root.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  function bootVelocity(now) {
    while (history.length && now - history[0].t > 90) history.shift();
    if (history.length < 2) return { vx: 0, vy: 0 };
    const a = history[0], b = history[history.length - 1];
    const dt = Math.max((b.t - a.t) / 1000, 0.008);
    return { vx: (b.x - a.x) / dt, vy: (b.y - a.y) / dt };
  }

  function placeBoot() {
    const f = pointer.facing;
    bootEl.style.transformOrigin = `${BOOT_HOT.x}px ${BOOT_HOT.y}px`;
    bootEl.style.transform =
      `translate(${pointer.x - BOOT_HOT.x}px, ${pointer.y - BOOT_HOT.y}px) scaleX(${f})`;
  }

  function swingBoot() {
    bootEl.classList.remove("pg-kick");
    void bootEl.offsetWidth; // restart the animation
    bootEl.classList.add("pg-kick");
  }

  function registerKick() {
    kicks++; roundKicks++;
    kicksEl.textContent = `Kicks ${kicks}`;
    if (!hintGone) { hintGone = true; hintEl.style.opacity = "0"; }
  }

  function kick(dirX, dirY, power) {
    const len = Math.hypot(dirX, dirY) || 1;
    ball.vx = (dirX / len) * power;
    ball.vy = (dirY / len) * power;
    registerKick();
  }

  // ---- input ----
  function onMove(e) {
    const p = local(e);
    pointer.px = pointer.x; pointer.py = pointer.y;
    pointer.x = p.x; pointer.y = p.y;
    if (!pointer.inside) { pointer.px = p.x; pointer.py = p.y; }
    pointer.inside = true;
    const now = performance.now();
    history.push({ x: p.x, y: p.y, t: now });
    const v = bootVelocity(now);
    pointer.vx = v.vx; pointer.vy = v.vy;
    if (Math.abs(v.vx) > 40) pointer.facing = v.vx >= 0 ? 1 : -1;
    bootEl.classList.add("pg-visible");
    placeBoot();
    checkBootContact(now);
  }

  function onLeave() {
    pointer.inside = false;
    history.length = 0;
    bootEl.classList.remove("pg-visible");
  }

  function onDown(e) {
    onMove(e);
    swingBoot(); // the cleat always swings on click, hit or miss
    if (celebrating) return;
    const dx = ball.x - pointer.x, dy = ball.y - pointer.y;
    const d = Math.hypot(dx, dy);
    const reach = R + 34; // toe has to be close to the ball
    if (d < reach) {
      pointer.facing = dx >= 0 ? 1 : -1;
      placeBoot();
      // closer contact = cleaner, harder strike
      const power = 700 + 550 * (1 - Math.max(0, d - R) / (reach - R));
      kick(dx || pointer.facing, dy, power);
      lastKickAt = performance.now();
    }
  }

  function onUp(e) {
    if (e.pointerType !== "mouse") onLeave(); // touch: hide the boot when the finger lifts
  }

  function onKey(e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    if (celebrating) return;
    const gx = W;
    const gy = H / 2 + (Math.random() - 0.5) * (mBot - mTop) * 0.5;
    kick(gx - ball.x, gy - ball.y, 1100);
  }

  // Cleat touching the ball without a click: nudge it. Uses the segment the boot travelled since the last
  // event so fast swipes can't pass through the ball between frames.
  function checkBootContact(now) {
    if (celebrating || !pointer.inside) return;
    if (now - lastKickAt < 160) return;
    const ax = pointer.px, ay = pointer.py, bx = pointer.x, by = pointer.y;
    const sx = bx - ax, sy = by - ay;
    const segLen2 = sx * sx + sy * sy;
    let t = segLen2 ? ((ball.x - ax) * sx + (ball.y - ay) * sy) / segLen2 : 1;
    t = Math.max(0, Math.min(1, t));
    const cx = ax + sx * t, cy = ay + sy * t;
    const dx = ball.x - cx, dy = ball.y - cy;
    const d = Math.hypot(dx, dy);
    const touch = R + 6;
    if (d >= touch) return;

    let nx = d ? dx / d : Math.sign(pointer.vx) || 1;
    let ny = d ? dy / d : 0;
    const bs = Math.hypot(pointer.vx, pointer.vy);
    lastKickAt = now;

    // push the ball clear of the boot
    ball.x = cx + nx * (touch + 1);
    ball.y = cy + ny * (touch + 1);

    if (bs > 60) {
      // dribble: the ball is pushed along at roughly the cleat's speed
      const ux = pointer.vx / bs, uy = pointer.vy / bs;
      const dirX = nx * 0.5 + ux * 0.5, dirY = ny * 0.5 + uy * 0.5;
      const len = Math.hypot(dirX, dirY) || 1;
      const push = Math.max(120, Math.min(420, bs * 0.55));
      ball.vx = (dirX / len) * push;
      ball.vy = (dirY / len) * push;
      if (!hintGone) { hintGone = true; hintEl.style.opacity = "0"; }
    } else {
      // boot standing still: the ball just bounces off it
      const vn = ball.vx * nx + ball.vy * ny;
      if (vn < 0) {
        ball.vx -= 1.6 * vn * nx;
        ball.vy -= 1.6 * vn * ny;
      }
      ball.vx += nx * 90; ball.vy += ny * 90;
    }
  }

  // ---- physics ----
  function collidePost(px, py) {
    const dx = ball.x - px, dy = ball.y - py;
    const d = Math.hypot(dx, dy);
    if (d >= R || d === 0) return;
    const nx = dx / d, ny = dy / d;
    ball.x = px + nx * R; ball.y = py + ny * R;
    const vn = ball.vx * nx + ball.vy * ny;
    if (vn < 0) { ball.vx -= 1.7 * vn * nx; ball.vy -= 1.7 * vn * ny; }
  }

  function step(dt) {
    ball.x += ball.vx * dt;
    ball.y += ball.vy * dt;
    const e = 0.72; // wall bounciness

    const inMouth = ball.y > mTop && ball.y < mBot;
    const inRightGoal = ball.x > x1;

    // goal posts
    collidePost(x1, mTop); collidePost(x1, mBot);

    if (inRightGoal) {
      // inside the net: side netting + back of the net
      if (ball.y - R < mTop) { ball.y = mTop + R; ball.vy = Math.abs(ball.vy) * 0.4; }
      if (ball.y + R > mBot) { ball.y = mBot - R; ball.vy = -Math.abs(ball.vy) * 0.4; }
      if (ball.x + R > W) { ball.x = W - R; ball.vx = -Math.abs(ball.vx) * 0.25; }
    } else {
      if (ball.y - R < 0) { ball.y = R; ball.vy = Math.abs(ball.vy) * e; }
      if (ball.y + R > H) { ball.y = H - R; ball.vy = -Math.abs(ball.vy) * e; }
      if (ball.x - R < 0) { ball.x = R; ball.vx = Math.abs(ball.vx) * e; }
      if (!inMouth && ball.x + R > x1) { ball.x = x1 - R; ball.vx = -Math.abs(ball.vx) * e; }
    }

    // whole ball over the line = goal
    if (!celebrating && ball.x - R >= x1) scoreGoal();
  }

  function scoreGoal() {
    celebrating = true;
    celebrateTimer = 1.6;
    goals++;
    goalsEl.textContent = `Goals ${goals}`;
    const msg = roundKicks === 1 ? "First touch!" : `in ${roundKicks} kicks`;
    goalSub.textContent = msg;
    goalEl.classList.remove("pg-show");
    void goalEl.offsetWidth;
    goalEl.classList.add("pg-show");
    liveEl.textContent = `Goal! Scored ${msg === "First touch!" ? "with one kick" : msg}.`;
  }

  function resetBall() {
    celebrating = false;
    roundKicks = 0;
    Object.assign(ball, centreSpot(), { vx: 0, vy: 0 });
  }

  // ---- drawing ----
  function drawBall() {
    const { x, y } = ball;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(ball.angle);
    ctx.beginPath();
    ctx.arc(0, 0, R, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.save();
    ctx.clip();
    ctx.fillStyle = COLORS.ink;
    const pent = (cx, cy, rad, rot) => {
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const a = rot + (i * 2 * Math.PI) / 5 - Math.PI / 2;
        const px = cx + Math.cos(a) * rad, py = cy + Math.sin(a) * rad;
        i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
    };
    pent(0, 0, R * 0.36, 0);
    ctx.strokeStyle = COLORS.ink;
    ctx.lineWidth = Math.max(1.2, R * 0.07);
    for (let i = 0; i < 5; i++) {
      const a = (i * 2 * Math.PI) / 5 - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * R * 0.36, Math.sin(a) * R * 0.36);
      ctx.lineTo(Math.cos(a) * R * 0.78, Math.sin(a) * R * 0.78);
      ctx.stroke();
      const b = a + Math.PI / 5;
      pent(Math.cos(b) * R * 1.02, Math.sin(b) * R * 1.02, R * 0.34, b + Math.PI / 2);
    }
    ctx.restore();
    ctx.beginPath();
    ctx.arc(0, 0, R - 1, 0, Math.PI * 2);
    ctx.lineWidth = Math.max(2, R * 0.12);
    ctx.strokeStyle = COLORS.ink;
    ctx.stroke();
    ctx.restore();
  }

  function drawGoal(left) {
    const gx = left ? 0.5 : x1;
    const gw = left ? x0 - 0.5 : W - 0.5 - x1;
    // net
    ctx.save();
    ctx.beginPath();
    ctx.rect(gx, mTop, gw, mBot - mTop);
    ctx.clip();
    ctx.strokeStyle = COLORS.outline;
    ctx.globalAlpha = 0.28;
    ctx.lineWidth = 1;
    for (let i = -H; i < W; i += 7) {
      ctx.beginPath(); ctx.moveTo(i, mTop); ctx.lineTo(i + (mBot - mTop), mBot); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(i + (mBot - mTop), mTop); ctx.lineTo(i, mBot); ctx.stroke();
    }
    ctx.restore();
    // frame
    ctx.strokeStyle = COLORS.outline;
    ctx.lineWidth = 1;
    ctx.beginPath();
    if (left) {
      ctx.moveTo(x0, mTop + 0.5); ctx.lineTo(0.5, mTop + 0.5); ctx.lineTo(0.5, mBot - 0.5); ctx.lineTo(x0, mBot - 0.5);
    } else {
      ctx.moveTo(x1, mTop + 0.5); ctx.lineTo(W - 0.5, mTop + 0.5); ctx.lineTo(W - 0.5, mBot - 0.5); ctx.lineTo(x1, mBot - 0.5);
    }
    ctx.stroke();
    // posts
    ctx.fillStyle = COLORS.outline;
    const px = left ? x0 : x1;
    for (const py of [mTop, mBot]) { ctx.beginPath(); ctx.arc(px, py, 2.5, 0, Math.PI * 2); ctx.fill(); }
  }

  function drawHint() {
    if (hintAlpha <= 0.01) return;
    const s = firstPos();
    ctx.save();
    ctx.globalAlpha = hintAlpha;
    ctx.setLineDash([9, 9]);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(W * 0.245, H * 0.83);
    ctx.bezierCurveTo(W * 0.37, H * 0.45, W * 0.43, H * 0.33, W * 0.51, H * 0.34);
    ctx.bezierCurveTo(W * 0.58, H * 0.35, W * 0.63, H * 0.4, s.x - R - 6, s.y - R * 0.4);
    ctx.stroke();
    ctx.restore();
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    // field
    ctx.strokeStyle = COLORS.outline;
    ctx.lineWidth = 1;
    ctx.strokeRect(x0 + 0.5, 0.5, x1 - x0 - 1, H - 1);
    ctx.strokeStyle = COLORS.line;
    const mid = Math.round((x0 + x1) / 2) + 0.5;
    ctx.beginPath(); ctx.moveTo(mid, 0); ctx.lineTo(mid, H); ctx.stroke();
    ctx.beginPath(); ctx.arc(mid, H / 2, Math.min(H * 0.25, 61), 0, Math.PI * 2); ctx.stroke();
    drawGoal(false);
    drawHint();
    drawBall();
  }

  // ---- loop ----
  let raf = 0, last = 0, running = false;
  function frame(t) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((t - (last || t)) / 1000, 1 / 30);
    last = t;

    const speed = Math.hypot(ball.vx, ball.vy);
    const steps = Math.max(1, Math.ceil((speed * dt) / (R * 0.4)));
    for (let i = 0; i < steps; i++) step(dt / steps);

    // rolling friction
    const f = Math.exp(-2.0 * dt);
    ball.vx *= f; ball.vy *= f;
    if (Math.hypot(ball.vx, ball.vy) < 6) { ball.vx = 0; ball.vy = 0; }
    ball.angle += (Math.hypot(ball.vx, ball.vy) * dt / R) * (ball.vx >= 0 ? 1 : -1);

    // a stationary boot still blocks a rolling ball
    if (pointer.inside && speed > 0) {
      pointer.px = pointer.x; pointer.py = pointer.y;
      const now = performance.now();
      const v = bootVelocity(now);
      pointer.vx = v.vx; pointer.vy = v.vy;
      checkBootContact(now);
    }

    if (celebrating) {
      celebrateTimer -= dt;
      if (celebrateTimer <= 0) resetBall();
    }
    if (hintGone && hintAlpha > 0) hintAlpha = Math.max(0, hintAlpha - dt * 2.5);

    draw();
  }

  function start() { if (!running) { running = true; last = 0; raf = requestAnimationFrame(frame); } }
  function stop() { running = false; cancelAnimationFrame(raf); }

  // ---- wiring ----
  layout();
  draw();
  const ro = new ResizeObserver(() => { layout(); draw(); });
  ro.observe(root);
  const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
  io.observe(root);

  root.addEventListener("pointermove", onMove);
  root.addEventListener("pointerdown", onDown);
  root.addEventListener("pointerup", onUp);
  root.addEventListener("pointerleave", onLeave);
  root.addEventListener("pointercancel", onLeave);
  root.addEventListener("keydown", onKey);

  return {
    destroy() {
      stop();
      ro.disconnect();
      io.disconnect();
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerdown", onDown);
      root.removeEventListener("pointerup", onUp);
      root.removeEventListener("pointerleave", onLeave);
      root.removeEventListener("pointercancel", onLeave);
      root.removeEventListener("keydown", onKey);
      root.innerHTML = "";
      root.classList.remove("pg-root", "pg-fine");
    },
  };
}
