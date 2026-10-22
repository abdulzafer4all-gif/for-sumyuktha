# 💌 For Sumyuktha, from Zafer

A tiny mobile-first mini-game: a 7-question "How well do you know us?" quiz, then a
big question with a **YES** button that grows and a **No** button that runs away.
Saying yes brings confetti, the date time in **both** Muscat and Bangalore time, a live
countdown, the plan, an "Add to calendar" button (with a 15-minute reminder) and a
"Tell me on WhatsApp" button.

Plain HTML/CSS/JS, no build step, no libraries.

```
index.html   page structure
style.css    look & feel (pastel, glassy, bouncy)
script.js    ALL personal content is in the CONFIG + QUESTIONS blocks at the top
.nojekyll    tells GitHub Pages to serve files as-is
```

---

## 1. Personalise

Open `script.js`. Everything personal is at the top:

| Setting | What it does |
|---|---|
| `from`, `to`, `greeting`, `introText` | Names and the intro text |
| `me` / `her` | City, flag, **IANA time zone** (`Asia/Muscat`, `Asia/Kolkata`) and lat/lon (used for the live distance) |
| `ask` | The final question. `highlight` is shown in the handwritten font |
| `event.date` / `event.time` / `event.tz` | The date's wall-clock time **in the zone you name**. Example: `"2026-11-05"`, `"21:00"`, `"Asia/Muscat"` is 9:00 PM Muscat = 10:30 PM Bangalore |
| `event.details` | The cards on the success screen (where, dress code, what to bring, plan). Add or remove rows freely |
| `successTitle`, `message`, `signoff` | Success screen text |
| `whatsapp.number` | Your number, **digits only** with country code. `""` hides the button |
| `whatsapp.text` | Her prefilled reply. `{herDate}` and `{herTime}` are filled in automatically |
| `ntfy.topic` | Your private notification topic (see below). `enabled: false` turns it off |

**Quiz questions** are in `QUESTIONS` just below:
- `correct: 1` means the second option is right (counting starts at 0).
- `correct: "all"` makes it a **trick question** where every answer is right.
- `type: "distance"` and `type: "time"` questions build their options live from the cities.
- You can use `{km}`, `{myCity}`, `{herCity}` and `{myTime}` in any text.

The runaway "No" lines, growing "YES" lines and hints are in `NO_TEXTS`, `YES_TEXTS`
and `HINTS`. `MAX_NO_TRIES` is how many dodges before the No button gives up.

### Live notifications (ntfy.sh)
1. Install the **ntfy** app (iOS / Android).
2. Tap **+**, subscribe to the topic `sumy-zafer-967767b215` (server: ntfy.sh).
3. You'll get a push when she opens the page, after each answer, her final score,
   her first "No" attempt, and when she says YES.

The topic acts as the password, so keep it long and hard to guess.
**Testing yourself?** Add `?quiet` to the URL (e.g. `…/index.html?quiet`) so you don't notify yourself.

---

## 2. Test locally

Any static server works (opening the file directly mostly works too, but a server is closer to the real thing):

```bash
cd sumyuktha-and-zafer
python3 -m http.server 8000
# open http://localhost:8000/?quiet
```

On your phone (same Wi-Fi): `http://<your-computer-ip>:8000/?quiet`.
In desktop Chrome, press F12 and click the phone icon to check the phone layout.

---

## 3. Push to GitHub

```bash
cd sumyuktha-and-zafer
git init
git add .
git commit -m "A little something for Sumyuktha"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

(Create the empty repo first at https://github.com/new. Don't add a README there.)

## 4. Turn on GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment**, set Source to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then click **Save**.
4. After a minute or two the link appears at the top:
   `https://<your-username>.github.io/<repo-name>/`

Tip: a private-sounding repo name keeps the URL less guessable. Test with `?quiet` before sending her the plain link.

---

## 5. After every change: bump `?v=`

Phones cache CSS/JS aggressively. In `index.html`, raise the version number on **both** lines:

```html
<link rel="stylesheet" href="style.css?v=1" />   →  style.css?v=2
<script src="script.js?v=1"></script>            →  script.js?v=2
```

Then commit and push:

```bash
git add .
git commit -m "Update"
git push
```

Pages updates in about a minute. If she still sees the old version, have her reload once.

---

## Notes
- Time zones use `Intl` with IANA zones, so the times are right on any phone in any country.
- Respects **Reduce Motion**: floating hearts, bouncing and the flying plane are switched off, and the confetti is a gentle fall.
- Cards scroll on small screens, so nothing gets cut off at the top.
