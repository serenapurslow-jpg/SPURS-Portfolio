# How to add a new blog post

Your site has no backend or CMS — every page is a plain HTML file. Adding a
post means duplicating a template file, filling it in, and adding one card
to `blog.html` (and optionally `index.html`). Takes about 10 minutes once
you've done it once.

## Step 1: Duplicate the template

Copy `post-template.html` and rename it to something short and URL-friendly,
matching the pattern of the existing posts, e.g.:

- `post-my-new-tip.html`

Keep it lowercase, hyphens instead of spaces, no special characters.

## Step 2: Fill in the placeholders

Open your new file and work through the numbered comments inside it:

1. **Title** — update the `<title>` tag and the meta description.
2. **Tag** — pick a colour (`var(--c-blue)`, `var(--c-coral)`, etc.) and a
   label, usually "Tip" or "Feature".
3. **Headline + date** — the `<h1>` and the byline underneath it.
4. **Body** — write your post using the building blocks already in the
   template: paragraphs (`<p>`), headings (`<h2>`), bullet lists (`<ul>`),
   images (`<img class="shot">`), YouTube embeds, or Wix-hosted videos.
5. **Neighbouring post links** — point the two links at the bottom to
   whichever posts should sit before/after this one (delete one if this is
   your newest or oldest post).

### A note on images

If you're pulling an image from your old Wix media library, grab the URL and
strip everything after `~mv2.png` (or `.jpg`) — the `/v1/fill/...` part is a
tiny cropped thumbnail. For example:

```
https://static.wixstatic.com/media/b117b6_abc123~mv2.png/v1/fill/w_49,h_32,.../b117b6_abc123~mv2.png
```
becomes:
```
https://static.wixstatic.com/media/b117b6_abc123~mv2.png
```
Add `style="max-width:420px"` (or similar) on the `<img>` tag to control how
big it displays.

If you're using a new image instead, just save it into this same folder and
reference it as `src="my-image.png"`.

### A note on YouTube videos

Don't use an `<iframe>` embed — YouTube iframes often fail to actually play
(either the uploader has embedding disabled, or the browser blocks it when
the page is opened as a local file rather than from a real web address).
The template uses a clickable thumbnail instead (`class="yt-thumb-link"`),
which opens the video on YouTube itself and always works. Just swap in your
video ID in both places it appears.

## Step 3: Add a card to the blog listing

Open `blog.html`, find the `<div class="grid grid-3">` block, and copy one
of the existing `<a class="card tip-card reveal" href="...">` cards. Update:

- `href` → your new file name
- the tag colour/label
- the `<h3>` title
- the description paragraph
- the date in `<span class="tip-meta">`

Paste it in wherever it belongs date-wise (newest posts at the top).

## Step 4 (optional): Feature it on the homepage

If it's a big one, do the same thing in `index.html` under the "Latest from
the blog" section — there's room for 3 cards there. Swap out the oldest of
the three for your new post.

## Step 5: Check your links

Make sure the "previous/next" links at the bottom of your new post, and the
post(s) either side of it in the chronological order, all point to files
that actually exist. A broken link here is the most common mistake.

That's it — no build step, no publishing, just save the files and open
`index.html` to see it live.
