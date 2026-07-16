# Deploying to GitHub Pages

Repo name: **SPURS-Portfolio** → your site will end up live at:
`https://spurz8.github.io/SPURS-Portfolio/`

## 1. Create the repository

1. Go to [github.com](https://github.com) and log in as spurz8.
2. Click the **+** in the top-right → **New repository**.
3. Repository name: `SPURS-Portfolio`
4. Set it to **Public** (GitHub Pages needs a public repo unless you're on a paid plan).
5. Tick **Add a README file**.
6. Click **Create repository**.

## 2. Upload the site files

1. On the new repo's page, click **Add file** → **Upload files**.
2. Open your outputs folder and select the **files themselves** (not the
   folder) — select all of them (Ctrl/Cmd+A) and drag them into the browser
   window. This matters: if you drag the whole folder in, GitHub will nest
   everything inside a subfolder and the site won't work at the address above.
3. You should be uploading all of these:
   - `index.html`, `about.html`, `portfolio.html`, `blog.html`
   - `styles.css`, `script.js`
   - all nine `post-*.html` files
   - `post-template.html` and the two `.md` guides (optional, but handy to keep with the project)
4. Scroll down, add a commit message like "Initial site upload", and click
   **Commit changes**.

## 3. Turn on GitHub Pages

1. In the repo, go to **Settings** (top nav) → **Pages** (left sidebar).
2. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)** → **Save**.
4. Wait about a minute, then refresh the Pages settings page — it'll show
   "Your site is live at https://spurz8.github.io/SPURS-Portfolio/".

## 4. Check it

Open that URL and click through Home, Portfolio, About, and a couple of blog
posts to confirm everything loads correctly from the live site, not just
locally.

## Making future edits

Any time you want to change something: edit the file locally, then on the
repo page use **Add file → Upload files** again (or drag the single changed
file onto the repo's file listing) and commit. GitHub Pages redeploys
automatically within a minute or two of any commit to `main`.
