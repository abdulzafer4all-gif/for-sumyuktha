/* ==========================================================
   For Sumyuktha, from Zafer: quiz + the big question
   ========================================================== */

/* ==========================================================
   ✏️ CONFIG: everything personal lives here. Edit freely!
   ========================================================== */
const CONFIG = {
  from: "Zafer",
  to: "Sumyuktha",

  greeting: "Hey Sumyuktha 💕",
  introText:
    "There are a few thousand kilometres between us, but let's see how well you know us. " +
    "Answer honestly… or just pick whatever makes me smile 😌",

  // Where we each are. tz must be an IANA zone so times are right on any phone.
  me:  { city: "Muscat",    flag: "🇴🇲", tz: "Asia/Muscat",  lat: 23.588,  lon: 58.3829 },
  her: { city: "Bangalore", flag: "🇮🇳", tz: "Asia/Kolkata", lat: 12.9716, lon: 77.5946 },

  // The final question. "highlight" is shown in the curly script font.
  ask: { before: "So… will you go on a", highlight: "video-call date", after: "with me?" },

  // The event. date + time are the wall-clock time in event.tz (any IANA zone).
  event: {
    date: "2026-10-22",          // YYYY-MM-DD
    time: "22:29",               // 24h HH:MM
    tz: "Asia/Muscat",           // the zone that date/time is written in
    durationMinutes: 120,
    calendarTitle: "Video-call date: Sumyuktha & Zafer 💖",
    calendarLocation: "WhatsApp video call",
    // Shown as cards on the success screen (add or remove rows as you like)
    details: [
      { icon: "📱", label: "Where",      value: "WhatsApp video call (I'll call you)" },
      { icon: "👗", label: "Dress code", value: "Cosy & cute. Pyjamas totally allowed 😴" },
      { icon: "☕", label: "Bring",      value: "Filter coffee, snacks and that smile" },
      { icon: "🎬", label: "Plan",       value: "Dinner on camera, a movie in sync, then talk till late 🍿" },
    ],
  },

  successTitle: "Yaaay! It's a date 🥰",
  message:
    "Muscat to Bangalore is a long way, but it can't stop a date night. " +
    "You, me, two screens and absolutely zero network excuses. I'll call right on time, promise 💖",
  signoff: "— Zafer 💌",

  // WhatsApp: digits only with country code. Set number to "" to hide the button.
  whatsapp: {
    number: "96894194177",
    text: "YES! 💖 It's a date. See you on video call on {herDate} at {herTime} my time 🥰",
  },

  // Live notifications to your phone via https://ntfy.sh (install the ntfy app and
  // subscribe to this topic). Add ?quiet to the page URL to test without notifying.
  ntfy: { enabled: true, topic: "for-sumyuktha-6e4019574794" },
};

/* ==========================================================
   ✏️ QUIZ QUESTIONS
   correct: index of the right option (0 = first), or "all" for a trick question.
   type "distance" / "time" are generated live from the cities above.
   {km} {myCity} {herCity} {myTime} {herTime} are filled in automatically.
   ========================================================== */
const QUESTIONS = [
  {
    emoji: "📞",
    q: "Who says \"I'll call you in 5 minutes\" and calls an hour later?",
    options: ["Sumyuktha", "Zafer", "Both of us", "Blame the network"],
    correct: 1,
    right: "Guilty as charged 🙋‍♂️ But for this date I'll be on time, promise!",
    wrong: "Let's be honest… it's me 🙋‍♂️ Working on it, I promise!",
  },
  {
    type: "distance",
    emoji: "✈️",
    q: "How far apart are we right now?",
    right: "Correct! Though honestly it feels like 0 km 🫶",
    wrong: "It's about {km} km… not that I'm counting. (I'm counting.)",
  },
  {
    type: "time",
    emoji: "🕰️",
    q: "Quick! What time is it for me in {myCity} right now?",
    right: "Yes! I'm 1½ hours behind you… but way ahead in missing you 😏",
    wrong: "It's {myTime} here. I'm 1½ hours behind you, remember? 🙈",
  },
  {
    emoji: "🏆",
    q: "Who wins basically every argument?",
    options: ["Zafer, obviously", "Sumyuktha, obviously", "It's always a draw", "Whoever sends the cuter sticker"],
    correct: 1,
    right: "Correct. I never stood a chance 😌",
    wrong: "Nice try, but it's you. Every single time 😌",
  },
  {
    emoji: "🍽️",
    q: "Better food: Bangalore's masala dosa or Muscat's shuwa?",
    options: ["Masala dosa, no contest", "Shuwa (I'm being brave)", "Whichever we eat together", "Both… please don't fight me"],
    correct: "all",
    right: "Trick question! Every answer is right, as long as we eat it together 🥰",
  },
  {
    emoji: "🥺",
    q: "On a scale of 1–10, how much do I miss you?",
    options: ["7", "9", "10", "It broke the scale"],
    correct: 3,
    right: "Correct! The scale is broken. I miss you THAT much 💔➡️💖",
    wrong: "Way off! The scale is broken. I miss you THAT much 🥺",
  },
  {
    emoji: "✨",
    q: "What's my favourite thing about you?",
    options: ["Your smile", "Your laugh", "How you put up with me", "All of the above, and more"],
    correct: "all",
    right: "Trick question again! All of it. Every single thing 💞",
  },
];

/* ===== Cheeky lines for the final screen ===== */
const NO_TEXTS = ["No", "Are you sure?", "Really?", "Think again!", "Network error 📶", "Nope 🙈", "Can't catch me!", "Pleeease? 🥺", "I flew 2,000 km for this 💔", "Just tap YES 😌", "Almost gone…", "bye 👋"];
const YES_TEXTS = ["YES! 💖", "YES!! 💖", "Yes please 🥰", "Obviously YES 💘", "YES YES YES 💞", "Tap me! 💖", "I'm right here 👉💖", "Say yes 🥺💖"];
const HINTS = [
  "Choose wisely… 😇",
  "Whoops! That button has bad signal 📶",
  "It flew away. Must be the long distance ✈️",
  "The YES button is looking extra cute now 👀",
  "'No' is not available in your region 🌏",
  "It's getting smaller… just like the distance between us 🫶",
  "Resistance is futile 💘",
  "Okay, you're persistent. I love that about you 🥰",
  "Pssst… the big pink one ➡️ YES!",
];
const MAX_NO_TRIES = 12; // after this many dodges the No button gives up and disappears

/* ==========================================================
   Helpers
   ========================================================== */
const $ = (id) => document.getElementById(id);
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const QUIET = new URLSearchParams(location.search).has("quiet");

const fmt = (date, tz, opts) => new Intl.DateTimeFormat("en-US", { timeZone: tz, ...opts }).format(date);
const fmtTime = (date, tz) => fmt(date, tz, { hour: "numeric", minute: "2-digit" });
const fmtDate = (date, tz) => fmt(date, tz, { weekday: "short", day: "numeric", month: "short" });
const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pad = (n) => String(n).padStart(2, "0");

/** Convert a wall-clock date+time in an IANA zone to a real Date (UTC instant). */
function zonedToDate(dateStr, timeStr, tz) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const [hh, mm] = timeStr.split(":").map(Number);
  const wanted = Date.UTC(y, m - 1, d, hh, mm);
  const offsetAt = (ms) => {
    const p = Object.fromEntries(
      new Intl.DateTimeFormat("en-US", {
        timeZone: tz, hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", second: "2-digit",
      }).formatToParts(new Date(ms)).map((x) => [x.type, x.value])
    );
    return Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second) - ms;
  };
  let ts = wanted - offsetAt(wanted);
  ts = wanted - offsetAt(ts); // second pass handles DST edges
  return new Date(ts);
}

function distanceKm(a, b) {
  const r = (x) => (x * Math.PI) / 180;
  const h = Math.sin(r(b.lat - a.lat) / 2) ** 2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(r(b.lon - a.lon) / 2) ** 2;
  return Math.round(6371 * 2 * Math.asin(Math.sqrt(h)));
}
const KM = distanceKm(CONFIG.me, CONFIG.her);
const kmText = (n) => n.toLocaleString("en-US");

const EVENT_START = zonedToDate(CONFIG.event.date, CONFIG.event.time, CONFIG.event.tz);
const EVENT_END = new Date(EVENT_START.getTime() + CONFIG.event.durationMinutes * 60000);

function fill(text) {
  const now = new Date();
  return text
    .replaceAll("{km}", kmText(KM))
    .replaceAll("{myCity}", CONFIG.me.city)
    .replaceAll("{herCity}", CONFIG.her.city)
    .replaceAll("{myTime}", fmtTime(now, CONFIG.me.tz))
    .replaceAll("{herTime}", fmtTime(EVENT_START, CONFIG.her.tz))
    .replaceAll("{herDate}", fmtDate(EVENT_START, CONFIG.her.tz))
    .replaceAll("{myDate}", fmtDate(EVENT_START, CONFIG.me.tz));
}

/** Fire-and-forget phone notification via ntfy.sh (JSON body, no custom headers → no CORS preflight). */
function notify(title, message, tags = []) {
  if (QUIET || !CONFIG.ntfy.enabled || !CONFIG.ntfy.topic) return;
  try {
    fetch("https://ntfy.sh/", {
      method: "POST",
      body: JSON.stringify({ topic: CONFIG.ntfy.topic, title, message, tags }),
      keepalive: true,
    }).catch(() => {});
  } catch (_) { /* never break the page over a notification */ }
}

function showScreen(from, to) {
  const swap = () => {
    from.hidden = true;
    from.classList.remove("leaving");
    to.hidden = false;
    to.scrollTop = 0;
  };
  if (REDUCED) return swap();
  from.classList.add("leaving");
  setTimeout(swap, 340);
}

/* ===== Background hearts ===== */
(function makeHearts() {
  if (REDUCED) return;
  const box = $("bgHearts");
  const emojis = ["💗", "💕", "💖", "🌸", "✨", "💞", "🤍"];
  const count = window.innerWidth < 600 ? 12 : 20;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.textContent = emojis[i % emojis.length];
    s.style.left = Math.random() * 100 + "vw";
    s.style.fontSize = 14 + Math.random() * 20 + "px";
    s.style.animationDuration = 10 + Math.random() * 14 + "s";
    s.style.animationDelay = -Math.random() * 20 + "s";
    box.appendChild(s);
  }
})();

/* ==========================================================
   1. INTRO
   ========================================================== */
document.title = `For ${CONFIG.to} 💌`;
$("greeting").textContent = CONFIG.greeting;
$("introText").textContent = CONFIG.introText;
$("introSmall").textContent = `${QUESTIONS.length} questions · no pressure · maybe a trick question or two 😏`;
$("myCity").textContent = $("tMyCity").textContent = CONFIG.me.city;
$("herCity").textContent = $("tHerCity").textContent = CONFIG.her.city;
$("myFlag").textContent = $("tMyFlag").textContent = CONFIG.me.flag;
$("herFlag").textContent = $("tHerFlag").textContent = CONFIG.her.flag;
$("distance").textContent = kmText(KM) + " km apart";

function tickClocks() {
  const now = new Date();
  $("myClock").textContent = fmtTime(now, CONFIG.me.tz);
  $("herClock").textContent = fmtTime(now, CONFIG.her.tz);
}
tickClocks();
setInterval(tickClocks, 15000);

notify(`👀 ${CONFIG.to} opened the page`, `${fmtTime(new Date(), CONFIG.her.tz)} her time. Fingers crossed 🤞`, ["eyes"]);

$("startBtn").addEventListener("click", () => {
  showScreen($("introScreen"), $("quizScreen"));
  renderQuestion();
});

/* ==========================================================
   2. QUIZ
   ========================================================== */
let qIndex = 0;
let score = 0;
const picked = []; // her chosen answer text for each question (for the WhatsApp reply)

/** Build options for the live "distance" and "time" questions. */
function buildDynamic(item) {
  if (item.type === "distance") {
    const right = kmText(KM) + " km";
    const opts = shuffle([right, kmText(Math.round((KM * 0.45) / 10) * 10) + " km", kmText(Math.round((KM * 2.3) / 10) * 10) + " km", "Too far 😢"]);
    return { options: opts, correct: opts.indexOf(right) };
  }
  if (item.type === "time") {
    const now = Date.now();
    const right = fmtTime(new Date(now), CONFIG.me.tz);
    const set = new Set([right]);
    [90, -90, 150, -60].forEach((min) => set.add(fmtTime(new Date(now + min * 60000), CONFIG.me.tz)));
    const opts = shuffle([...set].slice(0, 3));
    opts.push("Time stops when I'm talking to you ⏳");
    return { options: opts, correct: opts.indexOf(right) };
  }
  return { options: item.options, correct: item.correct };
}

function renderQuestion() {
  const item = QUESTIONS[qIndex];
  const { options, correct } = buildDynamic(item);
  item._live = { options, correct };

  $("qCount").textContent = `Question ${qIndex + 1} of ${QUESTIONS.length}`;
  $("qScore").textContent = `💖 ${score}`;
  $("qProgress").style.width = (qIndex / QUESTIONS.length) * 100 + "%";
  $("qEmoji").textContent = item.emoji || "💭";
  $("qText").textContent = fill(item.q);
  $("qFeedback").textContent = "";
  $("qFeedback").className = "feedback";
  $("nextBtn").hidden = true;

  const box = $("qOptions");
  box.innerHTML = "";
  options.forEach((text, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "option";
    b.innerHTML = `<b>${"ABCD"[i] || i + 1}</b><span></span>`;
    b.querySelector("span").textContent = text;
    b.addEventListener("click", () => answer(i));
    box.appendChild(b);
  });

  const body = $("qBody");
  body.classList.remove("swap");
  void body.offsetWidth;
  body.classList.add("swap");
}

function answer(i) {
  const item = QUESTIONS[qIndex];
  const { options, correct } = item._live;
  const isTrick = correct === "all";
  const ok = isTrick || i === correct;
  if (ok) score++;
  picked[qIndex] = options[i];

  const btns = [...$("qOptions").children];
  btns.forEach((b, j) => {
    b.disabled = true;
    if (isTrick || j === correct) b.classList.add("correct");
    else if (j === i) b.classList.add("wrong");
    else b.classList.add("dim");
  });

  const fb = $("qFeedback");
  fb.textContent = fill(ok ? item.right : item.wrong || item.right);
  fb.className = "feedback " + (ok ? "good" : "meh");
  $("qScore").textContent = `💖 ${score}`;
  $("qProgress").style.width = ((qIndex + 1) / QUESTIONS.length) * 100 + "%";

  notify(
    `Q${qIndex + 1} ${isTrick ? "🎭 trick" : ok ? "✅" : "❌"}`,
    `${fill(item.q)}\n→ ${options[i]}`,
    [ok ? "white_check_mark" : "x"]
  );

  const last = qIndex === QUESTIONS.length - 1;
  $("nextBtn").textContent = last ? "See my results 💌" : "Next →";
  $("nextBtn").hidden = false;
  $("nextBtn").focus({ preventScroll: true });
}

$("nextBtn").addEventListener("click", () => {
  qIndex++;
  if (qIndex < QUESTIONS.length) return renderQuestion();
  showResults();
});

/* ==========================================================
   3. RESULTS + THE BIG QUESTION
   ========================================================== */
let noTries = 0;

function showResults() {
  const pct = Math.round((score / QUESTIONS.length) * 100);
  const note =
    pct === 100 ? "Perfect score. You know us better than Google Maps knows the route 🗺️💖"
    : pct >= 70 ? "Certified expert in us. I'm impressed (and a little in love) 😍"
    : pct >= 40 ? "Not bad! We'll study together on the call 📚💕"
    : "Hmm… sounds like we need more dates to practise 😏";
  notify(`📊 Final score: ${score}/${QUESTIONS.length}`, note, ["bar_chart"]);

  showScreen($("quizScreen"), $("askScreen"));
  $("askQ").innerHTML = "";
  $("askQ").append(CONFIG.ask.before + " ");
  const s = document.createElement("span");
  s.className = "script";
  s.textContent = CONFIG.ask.highlight;
  $("askQ").append(s, " " + CONFIG.ask.after);
  $("hint").textContent = HINTS[0];
  $("meterNote").textContent = note;

  // count the meter up
  setTimeout(() => {
    $("meterFill").style.width = pct + "%";
    if (REDUCED) { $("meterPct").textContent = pct + "%"; return; }
    let n = 0;
    const step = () => {
      n = Math.min(pct, n + Math.max(1, Math.round(pct / 40)));
      $("meterPct").textContent = n + "%";
      if (n < pct) requestAnimationFrame(step);
    };
    step();
  }, 450);
}

const noBtn = $("noBtn");
const yesBtn = $("yesBtn");

let lastDodge = 0;
function dodge(e) {
  if (e) { e.preventDefault(); e.stopPropagation(); }
  // one physical tap fires pointerdown + touchstart + click; count it once
  const now = Date.now();
  if (now - lastDodge < 350) return;
  lastDodge = now;
  noTries++;
  if (noTries === 1) notify("🙈 She tried to press No!", "First attempt. The button ran away, don't worry 😏", ["see_no_evil"]);

  if (noTries >= MAX_NO_TRIES) {
    noBtn.hidden = true;
    $("hint").textContent = "The No button gave up 🏳️ Only one option left…";
    yesBtn.style.setProperty("--yes-scale", 1.9);
    return;
  }

  noBtn.textContent = NO_TEXTS[Math.min(noTries, NO_TEXTS.length - 1)];
  yesBtn.textContent = YES_TEXTS[noTries % YES_TEXTS.length];
  $("hint").textContent = HINTS[Math.min(noTries, HINTS.length - 1)];
  noBtn.style.setProperty("--no-scale", Math.max(0.4, 1 - noTries * 0.07));
  yesBtn.style.setProperty("--yes-scale", Math.min(1.9, 1 + noTries * 0.09));

  // jump somewhere on screen that isn't under the YES button.
  // Move it to <body> first: the glassy card's backdrop-filter would otherwise
  // make position:fixed relative to the card instead of the screen.
  if (noBtn.parentElement !== document.body) document.body.appendChild(noBtn);
  noBtn.classList.add("runaway");
  const vw = window.innerWidth, vh = window.innerHeight;
  const bw = noBtn.offsetWidth, bh = noBtn.offsetHeight;
  const yr = yesBtn.getBoundingClientRect();
  let x, y, tries = 0;
  do {
    x = 12 + Math.random() * Math.max(1, vw - bw - 24);
    y = 12 + Math.random() * Math.max(1, vh - bh - 24);
    tries++;
  } while (
    tries < 40 &&
    x < yr.right + 16 && x + bw > yr.left - 16 && y < yr.bottom + 16 && y + bh > yr.top - 16
  );
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") dodge(e); });
noBtn.addEventListener("pointerdown", dodge);
noBtn.addEventListener("touchstart", dodge, { passive: false });
noBtn.addEventListener("click", dodge); // keyboard users get dodged too 😇

yesBtn.addEventListener("click", () => {
  notify(`💖 ${CONFIG.to} said YES!`, `${noTries ? `After ${noTries} "No" attempt${noTries > 1 ? "s" : ""}. ` : "Straight away! "}Score ${score}/${QUESTIONS.length}. It's a date 🎉`, ["tada", "heart"]);
  noBtn.hidden = true;
  showScreen($("askScreen"), $("successScreen"));
  renderSuccess();
  setTimeout(confettiBurst, REDUCED ? 0 : 250);
});

/* ==========================================================
   4. SUCCESS
   ========================================================== */
function renderSuccess() {
  $("successTitle").textContent = CONFIG.successTitle;
  $("message").textContent = fill(CONFIG.message);
  $("signoff").textContent = CONFIG.signoff;

  $("tMyTime").textContent = fmtTime(EVENT_START, CONFIG.me.tz);
  $("tMyDate").textContent = fmtDate(EVENT_START, CONFIG.me.tz) + " · my time";
  $("tHerTime").textContent = fmtTime(EVENT_START, CONFIG.her.tz);
  $("tHerDate").textContent = fmtDate(EVENT_START, CONFIG.her.tz) + " · your time";

  const ul = $("details");
  ul.innerHTML = "";
  CONFIG.event.details.forEach((d) => {
    const li = document.createElement("li");
    li.innerHTML = "<span></span><div><small></small><strong></strong></div>";
    li.querySelector("span").textContent = d.icon;
    li.querySelector("small").textContent = d.label;
    li.querySelector("strong").textContent = d.value;
    ul.appendChild(li);
  });

  $("tries").textContent = noTries
    ? `(It only took ${noTries} attempt${noTries > 1 ? "s" : ""} at "No" 😏)`
    : "(Straight to YES. I knew it 😌)";

  if (CONFIG.whatsapp.number) {
    const wa = $("waBtn");
    const reply = [
      fill(CONFIG.whatsapp.text),
      `My quiz score: ${score}/${QUESTIONS.length}`,
      ...picked.map((a, n) => `${n + 1}. ${a}`),
    ].join("\n");
    wa.href = `https://wa.me/${CONFIG.whatsapp.number.replace(/\D/g, "")}?text=${encodeURIComponent(reply)}`;
    wa.hidden = false;
  }

  tickCountdown();
  setInterval(tickCountdown, 1000);
}

function tickCountdown() {
  const now = Date.now();
  const cd = $("countdown");
  if (now >= EVENT_END.getTime()) {
    $("cdLabel").textContent = "That was our date. Thank you for saying yes 🥰";
    cd.querySelector(".countdown__digits").hidden = true;
    return;
  }
  if (now >= EVENT_START.getTime()) {
    $("cdLabel").textContent = "It's happening right now! Pick up your phone 📱💖";
    cd.querySelector(".countdown__digits").hidden = true;
    cd.classList.add("live");
    return;
  }
  let s = Math.floor((EVENT_START.getTime() - now) / 1000);
  const d = Math.floor(s / 86400); s -= d * 86400;
  const h = Math.floor(s / 3600); s -= h * 3600;
  const m = Math.floor(s / 60); s -= m * 60;
  $("cdD").textContent = d;
  $("cdH").textContent = pad(h);
  $("cdM").textContent = pad(m);
  $("cdS").textContent = pad(s);
}

/* ----- .ics calendar file with a 15-minute reminder ----- */
function icsDate(d) {
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}
const icsEscape = (s) => String(s).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

function buildIcs() {
  const desc = [fill(CONFIG.message), "", ...CONFIG.event.details.map((d) => `${d.label}: ${d.value}`)].join("\n");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Sumyuktha and Zafer//Date//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${icsDate(EVENT_START)}-${CONFIG.ntfy.topic || "date"}@love.page`,
    `DTSTAMP:${icsDate(new Date())}`,
    `DTSTART:${icsDate(EVENT_START)}`,
    `DTEND:${icsDate(EVENT_END)}`,
    `SUMMARY:${icsEscape(CONFIG.event.calendarTitle)}`,
    `LOCATION:${icsEscape(CONFIG.event.calendarLocation)}`,
    `DESCRIPTION:${icsEscape(desc)}`,
    "BEGIN:VALARM",
    "ACTION:DISPLAY",
    "DESCRIPTION:Date in 15 minutes 💖",
    "TRIGGER:-PT15M",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

$("calendarBtn").addEventListener("click", () => {
  const blob = new Blob([buildIcs()], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "our-date.ics";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
});

$("againBtn").addEventListener("click", confettiBurst);

/* ==========================================================
   Confetti: plain canvas, no libraries
   ========================================================== */
const canvas = $("confetti");
const ctx = canvas.getContext("2d");
let pieces = [];
let raf = null;

function sizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = innerWidth * dpr;
  canvas.height = innerHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
addEventListener("resize", sizeCanvas);
sizeCanvas();

function confettiBurst() {
  const colors = ["#ff6f9c", "#ffb38a", "#b9a7ff", "#7fd8be", "#ffd166", "#ff4f88"];
  const n = REDUCED ? 40 : innerWidth < 600 ? 160 : 260;
  for (let i = 0; i < n; i++) {
    const fromLeft = i % 2 === 0;
    pieces.push({
      x: REDUCED ? Math.random() * innerWidth : fromLeft ? -10 : innerWidth + 10,
      y: REDUCED ? -20 - Math.random() * innerHeight * 0.5 : innerHeight * (0.55 + Math.random() * 0.3),
      vx: REDUCED ? 0 : (fromLeft ? 1 : -1) * (4 + Math.random() * 8),
      vy: REDUCED ? 2 + Math.random() * 2 : -(9 + Math.random() * 10),
      w: 6 + Math.random() * 7,
      h: 8 + Math.random() * 10,
      rot: Math.random() * Math.PI,
      vr: REDUCED ? 0 : (Math.random() - 0.5) * 0.3,
      color: colors[(Math.random() * colors.length) | 0],
      heart: Math.random() < 0.25,
      life: 0,
    });
  }
  if (!raf) raf = requestAnimationFrame(drawConfetti);
}

function drawHeart(s) {
  ctx.beginPath();
  ctx.moveTo(0, s * 0.3);
  ctx.bezierCurveTo(-s, -s * 0.4, -s * 0.4, -s, 0, -s * 0.35);
  ctx.bezierCurveTo(s * 0.4, -s, s, -s * 0.4, 0, s * 0.3);
  ctx.fill();
}

function drawConfetti() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  pieces = pieces.filter((p) => p.y < innerHeight + 40 && p.life < 600);
  for (const p of pieces) {
    p.life++;
    p.vy += REDUCED ? 0 : 0.25;
    p.vx *= 0.985;
    p.x += p.vx;
    p.y += Math.min(p.vy, 7);
    p.rot += p.vr;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.fillStyle = p.color;
    if (p.heart) drawHeart(p.w * 0.9);
    else ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.life / 8)) + 2);
    ctx.restore();
  }
  raf = pieces.length ? requestAnimationFrame(drawConfetti) : null;
  if (!raf) ctx.clearRect(0, 0, innerWidth, innerHeight);
}
