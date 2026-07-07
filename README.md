# Xavier Goff — Engineering Portfolio

Personal engineering portfolio: projects, robotics seasons, skills, and contact.

**Live site:** _add your Vercel/GitHub Pages URL here after deploying_

## Stack

Plain HTML/CSS/JS — no frameworks, no build step. `index.html` (structure) + `styles.css` (design) + `script.js` (content data & animations). Open `index.html` in a browser and it runs.

## Editing

- **Add a project:** open `script.js`, find the `PROJECTS` array at the top, copy one block, edit the fields. Set `image: "photos/name.jpg"` to use a real photo (put the file in a `photos/` folder next to `index.html`).
- **Skills:** same idea — edit the `SKILLS` array in `script.js`.
- **Colors/theme:** all colors are CSS variables at the top of `styles.css`.
- **Logo:** vector paths live in the nav `<svg>` and the sketch divider `<svg>`.

## Alternate themes

Kept for reference: `index-blueprint.html`, `index-circuit.html`, `index-workshop.html`, `index-light.html`.

## Deploying

Pushed commits auto-deploy if the repo is connected to [Vercel](https://vercel.com) (free). Alternatively enable GitHub Pages: repo Settings → Pages → deploy from `main`.
